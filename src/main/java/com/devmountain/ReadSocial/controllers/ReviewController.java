package com.devmountain.ReadSocial.controllers;

import com.devmountain.ReadSocial.dtos.ReviewDto;
import com.devmountain.ReadSocial.entities.Book;
import com.devmountain.ReadSocial.entities.User;
import com.devmountain.ReadSocial.repositories.BookRepository;
import com.devmountain.ReadSocial.repositories.UserRepository;
import com.devmountain.ReadSocial.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/")
    public List<ReviewDto> getAllReviews(){
        return reviewService.getAllReviews();
    }

    @PostMapping("/")
    public void addReview(@RequestBody ReviewDto reviewDto){

        reviewService.addReview(reviewDto, reviewDto.getUserDto().getId(), reviewDto.getBookDto().getId());
    }


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

    @DeleteMapping("/{reviewId}")
    public void deleteReviewById(@PathVariable Long reviewId){
        reviewService.deleteReviewById(reviewId);
    }

    @PutMapping
    public void updateReview(@RequestBody ReviewDto reviewDto){
        reviewService.updateReviewById(reviewDto);
    }
}
