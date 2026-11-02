package com.example.shop.controller;

import com.example.shop.dto.CartRequest;
import com.example.shop.dto.CheckoutRequest;
import com.example.shop.entity.User;
import com.example.shop.repository.UserRepository;
import com.example.shop.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;
    private final UserRepository userRepository;

    private User getUser(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));
    }

    @GetMapping
    public ResponseEntity<?> getCart(@RequestHeader("userId") Long userId) {
        return ResponseEntity.ok(cartService.getCart(getUser(userId)));
    }

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestHeader("userId") Long userId,
                                 @RequestBody CartRequest req) {
        return ResponseEntity.ok(cartService.addToCart(getUser(userId), req.getProductId(), req.getQuantity()));
    }

    @DeleteMapping("/remove/{productId}")
    public ResponseEntity<?> remove(@RequestHeader("userId") Long userId,
                                    @PathVariable Long productId) {
        cartService.removeFromCart(getUser(userId), productId);
        return ResponseEntity.ok("Removed");
    }

    @GetMapping("/total")
    public ResponseEntity<?> total(@RequestHeader("userId") Long userId) {
        return ResponseEntity.ok(cartService.getTotalPrice(getUser(userId)));
    }

    @PostMapping("/checkout")
    public ResponseEntity<?> checkout(@RequestHeader("userId") Long userId,
                                      @RequestBody CheckoutRequest req) {
        try {
            return ResponseEntity.ok(cartService.checkout(getUser(userId), req));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.internalServerError().body("Checkout failed: " + ex.getMessage());
        }
    }

    @GetMapping("/orders")
    public ResponseEntity<?> orders(@RequestHeader("userId") Long userId) {
        return ResponseEntity.ok(cartService.getOrders(getUser(userId)));
    }
}
