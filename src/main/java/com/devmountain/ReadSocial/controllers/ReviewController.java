package com.devmountain.ReadSocial.controllers;

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

    @PostMapping("/user/{userId}")
    public void addReview(@RequestBody ReviewDto reviewDto, @PathVariable Long userId){
        reviewService.addReview(reviewDto, userId);
    }

    @DeleteMapping("/{reviewId}")
    public void deleteReviewById(@PathVariable Long reviewId){
        reviewService.deleteReviewById(reviewId);
    }

    @PutMapping
    public void updateReview(@RequestBody ReviewDto reviewDto){
        reviewService.updateReviewById(reviewDto);
    }
}
