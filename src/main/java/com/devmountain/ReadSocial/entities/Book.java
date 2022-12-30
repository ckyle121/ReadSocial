package com.devmountain.ReadSocial.entities;

import com.devmountain.ReadSocial.dtos.BookDto;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.*;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Books")
//@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="googleId", unique = true)
    private String googleId;

    @Column(name = "title")
    private String title;

    @Column(name = "poster")
    private String poster;

    // Associations
    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonManagedReference
    private Set<Review> reviewSet = new HashSet<>();

    public Book(BookDto bookDto){
        if (bookDto.getId() != null){
            this.id = bookDto.getId();
        }
        if (bookDto.getGoogleId() != null){
            this.googleId = bookDto.getGoogleId();
        }
        if (bookDto.getTitle() != null){
            this.title = bookDto.getTitle();
        }
        if (bookDto.getPoster() != null){
            this.poster = bookDto.getPoster();
        }
    }

}
