package com.example.shop.service;

import com.example.shop.dto.CheckoutRequest;
import com.example.shop.dto.CheckoutItemRequest;
import com.example.shop.entity.*;
import com.example.shop.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    public CartItem addToCart(User user, Long productId, int quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found: " + productId));

        Optional<CartItem> existing = cartItemRepository.findByUserAndProduct_Id(user, productId);
        if (existing.isPresent()) {
            CartItem item = existing.get();
            item.setQuantity(item.getQuantity() + quantity);
            return cartItemRepository.save(item);
        }

        CartItem cartItem = new CartItem();
        cartItem.setUser(user);
        cartItem.setProduct(product);
        cartItem.setQuantity(quantity);
        return cartItemRepository.save(cartItem);
    }

    @Transactional
    public void removeFromCart(User user, Long productId) {
        CartItem item = cartItemRepository.findByUserAndProduct_Id(user, productId)
                .orElseThrow(() -> new RuntimeException("Item not found in cart"));
        cartItemRepository.delete(item);
    }

    public List<CartItem> getCart(User user) {
        return cartItemRepository.findByUser(user);
    }

    public BigDecimal getTotalPrice(User user) {
        return cartItemRepository.findByUser(user).stream()
                .map(item -> item.getProduct().getPrice()
                        .multiply(BigDecimal.valueOf(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    @Transactional
    public Order checkout(User user, CheckoutRequest req) {
        List<CartItem> cartItems = cartItemRepository.findByUser(user);

        if (cartItems.isEmpty() && (req.getItems() == null || req.getItems().isEmpty())) {
            throw new IllegalArgumentException("Cart is empty. Please add items before checkout.");
        }

        Order order = new Order();
        order.setUser(user);
        order.setFullName(clean(req.getFullName(), ""));
        order.setPhone(clean(req.getPhone(), ""));
        order.setAddress(clean(req.getAddress(), ""));
        order.setCity(clean(req.getCity(), ""));
        order.setPostalCode(clean(req.getPostalCode(), ""));
        order.setStatus("PENDING");

        List<OrderItem> orderItems;

        if (!cartItems.isEmpty()) {
            // Use DB cart
            order.setTotalPrice(getTotalPrice(user));
            orderItems = cartItems.stream().map(ci -> {
                OrderItem oi = new OrderItem();
                oi.setOrder(order);
                oi.setProduct(ci.getProduct());
                oi.setQuantity(ci.getQuantity());
                oi.setPriceAtPurchase(ci.getProduct().getPrice());
                return oi;
            }).toList();
        } else {
            // Use items from frontend localStorage cart
            orderItems = checkoutItemsFromRequest(order, req);
            order.setTotalPrice(orderItems.stream()
                    .map(item -> item.getPriceAtPurchase()
                            .multiply(BigDecimal.valueOf(item.getQuantity())))
                    .reduce(BigDecimal.ZERO, BigDecimal::add));
        }

        order.setItems(orderItems);
        Order savedOrder = orderRepository.save(order);

        if (!cartItems.isEmpty()) {
            cartItemRepository.deleteByUser(user);
        }

        return savedOrder;
    }

    private List<OrderItem> checkoutItemsFromRequest(Order order, CheckoutRequest req) {
        return req.getItems().stream().map(item -> {
            if (item.getQuantity() == null || item.getQuantity() <= 0) {
                throw new IllegalArgumentException("Invalid quantity for item: " + item.getName());
            }
            if (item.getPrice() == null || item.getPrice().compareTo(BigDecimal.ZERO) <= 0) {
                throw new IllegalArgumentException("Invalid price for item: " + item.getName());
            }

            OrderItem oi = new OrderItem();
            oi.setOrder(order);
            oi.setProduct(resolveCheckoutProduct(item));
            oi.setQuantity(item.getQuantity());
            oi.setPriceAtPurchase(item.getPrice());
            return oi;
        }).toList();
    }

    private Product resolveCheckoutProduct(CheckoutItemRequest item) {
        String name = clean(item.getName(), clean(item.getProductId(), "Product"));
        BigDecimal price = item.getPrice();

        return productRepository.findFirstByNameAndPrice(name, price).orElseGet(() -> {
            Product product = new Product();
            product.setName(name);
            product.setDescription("Created from checkout");
            product.setPrice(price);
            product.setImageUrl(item.getImageUrl());
            return productRepository.save(product);
        });
    }

    private String clean(String value, String fallback) {
        return (value == null || value.trim().isEmpty()) ? fallback : value.trim();
    }

    @Transactional(readOnly = true)
    public List<Order> getOrders(User user) {
        return orderRepository.findByUser(user);
    }
}
