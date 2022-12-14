package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.ReviewDto;
import com.devmountain.ReadSocial.entities.Book;
import com.devmountain.ReadSocial.entities.Review;
import com.devmountain.ReadSocial.entities.User;
import com.devmountain.ReadSocial.repositories.ReviewRepository;
import com.devmountain.ReadSocial.repositories.UserRepository;
import com.devmountain.ReadSocial.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<ReviewDto> getAllReviews(){
        List<Review> reviewList = reviewRepository.findAll();
        return reviewList.stream().map(review -> new ReviewDto(review)).collect(Collectors.toList());
    }

    @Override
    public List<ReviewDto> getAllReviewsByUserId(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isPresent()){
            List<Review> reviewList = reviewRepository.findAllByUserEquals(userOptional.get());
            return reviewList.stream().map(review -> new ReviewDto(review)).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    @Override
    public List<ReviewDto> getAllReviewsByBookId(Long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        System.out.println(bookId);
        if(bookOptional.isPresent()){
            List<Review> reviewList = reviewRepository.findAllByBookEquals(bookOptional.get());
            return reviewList.stream().map(review -> new ReviewDto(review)).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    @Override
    @Transactional
    public void addReview(ReviewDto reviewDto, Long userId, String googleId){
        Optional<User> userOptional = userRepository.findById(userId);
        System.out.println("userId = " + userId);
        Optional<Book> bookOptional = bookRepository.findByGoogleId(googleId);
        System.out.println(bookOptional.isPresent());
        Review review = new Review(reviewDto);
        bookOptional.ifPresent(review::setBook);
        bookOptional.ifPresent(System.out::println);
        userOptional.ifPresent(review::setUser);
        userOptional.ifPresent(System.out::println);
        userOptional.ifPresent(review::setUser);
        userOptional.ifPresent(System.out::println);
        System.out.println(review);
        reviewRepository.saveAndFlush(review);
    }

    @Override
    @Transactional
    public void deleteReviewById(Long reviewId) {
        Optional<Review> reviewOptional = reviewRepository.findById(reviewId);
        reviewOptional.ifPresent(review -> reviewRepository.delete(review));
    }

    @Override
    @Transactional
    public void updateReviewById(ReviewDto reviewDto) {
        Optional<Review> reviewOptional = reviewRepository.findById(reviewDto.getId());
        reviewOptional.ifPresent(review -> {
            Review reviewObj = new Review(reviewDto);
            reviewObj.setId(review.getId());
            reviewObj.setUser(review.getUser());
            reviewObj.setBook(review.getBook());
//            \review.setReview_text(review.getReview_text());
//            review.setBook_rating(review.getBook_rating());
            reviewRepository.saveAndFlush(reviewObj);
        });
    }

    @Override
    public Optional<ReviewDto> getReviewById(Long reviewId) {
        Optional<Review> reviewOptional = reviewRepository.findById(reviewId);
        if(reviewOptional.isPresent()){
            return Optional.of(new ReviewDto(reviewOptional.get()));
        }
        return Optional.empty();
    }
}
