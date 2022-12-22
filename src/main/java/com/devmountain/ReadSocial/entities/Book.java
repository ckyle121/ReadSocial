package com.devmountain.ReadSocial.entities;

import com.devmountain.ReadSocial.dtos.BookDto;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Books")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "poster")
    private String poster;

    // Associations
    @OneToMany(mappedBy = "book")
    @JsonManagedReference
    private Set<Review> reviewSet = new HashSet<>();

    public Book(BookDto bookDto){
        if (bookDto.getId() != null){
            this.id = bookDto.getId();
        }
        if (bookDto.getTitle() != null){
            this.title = bookDto.getTitle();
        }
        if (bookDto.getPoster() != null){
            this.poster = bookDto.getPoster();
        }
    }
}
