package com.devmountain.ReadSocial.controllers;

import com.devmountain.ReadSocial.dtos.BookDto;
import com.devmountain.ReadSocial.dtos.CreateReviewDto;
import com.devmountain.ReadSocial.dtos.ReviewDto;
import com.devmountain.ReadSocial.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @GetMapping("/")
    public List<ReviewDto> getAllReviews(){
        return reviewService.getAllReviews();
    }

    @PostMapping("/")
    public void addReview(@RequestBody CreateReviewDto createData){
        ReviewDto reviewDto = new ReviewDto();
        reviewDto.setBook_rating(createData.book_rating);
        reviewDto.setReview_text(createData.review_text);
        reviewService.addReview(reviewDto, createData.userId, createData.bookId);
        System.out.println("Added Review");
    }

//    @PostMapping("/")
//    public void addBook(@RequestBody ReviewDto reviewDto){
//
//        reviewService.addReview(reviewDto);
//    }

    @GetMapping("/user/{userId}")
    public List<ReviewDto> getReviewsByUser(@PathVariable Long userId){
        return reviewService.getAllReviewsByUserId(userId);
    }

    @GetMapping("/book/{bookId}")
    public List<ReviewDto> getReviewsByBook(@PathVariable Long bookId){
        return reviewService.getAllReviewsByBookId(bookId);
    }

    @GetMapping("/{reviewId}")
    public Optional<ReviewDto> getReviewById(@PathVariable Long reviewId){
        return reviewService.getReviewById(reviewId);
    }



//    @PostMapping("/user/{userId}")
//    public void addReviewToUser(@RequestBody ReviewDto reviewDto, @PathVariable Long userId){
//        reviewService.addReviewToUser(reviewDto, userId);
//    }
//    @PostMapping("/book/{bookId}")
//    public void addReviewToBook(@RequestBody ReviewDto reviewDto, @PathVariable Long bookId){
//        reviewService.addReviewToBook(reviewDto, bookId);
//    }

    @DeleteMapping("/{reviewId}")
    public void deleteReviewById(@PathVariable Long reviewId){
        reviewService.deleteReviewById(reviewId);
    }

//    @PutMapping
//    public void updateReview(@RequestBody ReviewDto reviewDto){
//        reviewService.updateReviewById(reviewDto);
//    }
}
