package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.ReviewDto;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface ReviewService {
    List<ReviewDto> getAllReviewsByUserId(Long userId);

    @Transactional
    void addReview(ReviewDto reviewDto, Long userId);

    @Transactional
    void deleteReviewById(Long reviewId);

    @Transactional
    void updateReviewById(ReviewDto reviewDto);

    Optional<ReviewDto> getReviewById(Long reviewId);
}
