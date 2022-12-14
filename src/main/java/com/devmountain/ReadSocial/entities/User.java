package com.devmountain.ReadSocial.entities;

import com.devmountain.ReadSocial.dtos.UserDto;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Users")
//@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;

    @Column
    private String password;

    @OneToMany(mappedBy = "user",  fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST})
    @JsonManagedReference
    private Set<Review> reviewSet = new HashSet<>();

    public User(UserDto userDto){
        if (userDto.getUsername() != null){
            this.username = userDto.getUsername();
        }
        if (userDto.getPassword() != null){
            this.password = userDto.getPassword();
        }
    }

}