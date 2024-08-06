package com.per.evemt.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String role; // "PARTICIPANT" or "ORGANIZER"

    @ManyToMany(mappedBy = "participants")
    private Set<Event> events = new HashSet<>();
}