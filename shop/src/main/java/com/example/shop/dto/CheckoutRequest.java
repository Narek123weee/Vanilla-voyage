package com.example.shop.dto;

import lombok.Data;
import java.util.List;

@Data
public class CheckoutRequest {
    private String fullName;
    private String phone;
    private String address;
    private String city;
    private String postalCode;
    private List<CheckoutItemRequest> items;
}
