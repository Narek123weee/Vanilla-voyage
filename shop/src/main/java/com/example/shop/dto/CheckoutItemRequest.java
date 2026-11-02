package com.example.shop.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class CheckoutItemRequest {
    private String productId;
    private String name;
    private BigDecimal price;
    private Integer quantity;
    private String imageUrl;
}
