package com.devmountain.ReadSocial.dtos;

import com.devmountain.ReadSocial.entities.Review;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDto {
    private Long id;
    private Long reviewText;
    private Integer bookRating;
    private UserDto userDto;
    private BookDto bookDto;

    public ReviewDto(Review review){
        if (review.getId() != null){
            this.id = review.getId();
        }
        if (review.getReviewText() != null){
            this.reviewText = review.getReviewText();
        }
        if (review.getBookRating() != null){
            this.bookRating = review.getBookRating();
        }
    }
}
