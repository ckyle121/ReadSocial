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
        this.bookDto = new BookDto();
        this.bookDto.setPoster(review.getBook().getPoster());
        this.bookDto.setTitle(review.getBook().getTitle());
        this.bookDto.setId(review.getBook().getId());
        this.userDto = new UserDto();
        this.userDto.setUsername(review.getUser().getUsername());
        this.userDto.setPassword(review.getUser().getPassword());
        this.userDto.setId(review.getUser().getId());
    }
}
