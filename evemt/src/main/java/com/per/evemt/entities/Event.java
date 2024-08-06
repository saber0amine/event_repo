package com.per.evemt.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
@Entity
@Data
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;
    private LocalDateTime dateTime;
    private String description;

    @ManyToOne
    private User organizer;

    @ManyToMany
    private Set<User> participants = new HashSet<>();
}
