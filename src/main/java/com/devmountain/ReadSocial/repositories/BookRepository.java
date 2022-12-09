package com.devmountain.ReadSocial.repositories;

import com.devmountain.ReadSocial.services.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import com.devmountain.ReadSocial.services.entities.Book;
import com.devmountain.ReadSocial.services.entities.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    //List<Book> findAllByUserEquals(Review review);
}
