package com.devmountain.ReadSocial.entities;

import com.devmountain.ReadSocial.dtos.ReviewDto;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "text")
    private String review_text;

    @Column(name = "rating")
    private Integer book_rating;

    // Associations

    @ManyToOne
    @JsonBackReference
    private User user;


    @ManyToOne()
    @JsonBackReference
    private Book book;

    public Review(ReviewDto reviewDto){
        if (reviewDto.getReview_text() != null){
            this.review_text = reviewDto.getReview_text();
        }
        if (reviewDto.getBook_rating() != null){
            this.book_rating = reviewDto.getBook_rating();
        }
    }

}
