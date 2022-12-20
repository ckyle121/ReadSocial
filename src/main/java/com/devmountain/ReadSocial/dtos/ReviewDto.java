package com.devmountain.ReadSocial.dtos;

import com.devmountain.ReadSocial.entities.Review;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDto implements Serializable {
    private Long id;
    private String review_text;
    private Integer book_rating;

    private UserDto userDto;

    private BookDto bookDto;

    public ReviewDto(Review review){
        if (review.getId() != null){
            this.id = review.getId();
        }
        if (review.getReview_text() != null){
            this.review_text = review.getReview_text();
        }
        if (review.getBook_rating() != null){
            this.book_rating = review.getBook_rating();
        }
    }
}
