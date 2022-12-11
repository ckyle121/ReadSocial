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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "poster")
    private String poster;

    // Associations
    @OneToMany(mappedBy = "book",fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonManagedReference
    private Set<Review> reviewSet = new HashSet<>();

    public Book(BookDto bookDto){
        if (bookDto.getTitle() != null){
            this.title = bookDto.getTitle();
        }
        if (bookDto.getPoster() != null){
            this.poster = bookDto.getPoster();
        }
    }
}
