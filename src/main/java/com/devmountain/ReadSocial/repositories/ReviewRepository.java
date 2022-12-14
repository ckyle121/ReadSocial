package com.devmountain.ReadSocial.repositories;

import com.devmountain.ReadSocial.entities.Book;
import com.devmountain.ReadSocial.entities.Review;
import com.devmountain.ReadSocial.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllByUserEquals(User user);

    List<Review> findAllByBookEquals(Book book);
}
