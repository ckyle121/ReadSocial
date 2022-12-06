package com.devmountain.ReadSocial.entities;

import com.devmountain.ReadSocial.dtos.ReviewDto;
import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @Column(columnDefinition = "text")
    private Long reviewText;

    @Column(columnDefinition = "rating")
    private Integer bookRating;

    // Associations
    @ManyToOne
    @JsonBackReference
    private User user;

    @ManyToOne
    @JsonBackReference
    private Book book;

    public Review(ReviewDto reviewDto){
        if (reviewDto.getReviewText() != null){
            this.reviewText = reviewDto.getReviewText();
        }
        if (reviewDto.getBookRating() != null){
            this.bookRating = reviewDto.getBookRating();
        }
    }
}
