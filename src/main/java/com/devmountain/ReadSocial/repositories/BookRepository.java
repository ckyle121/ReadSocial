package com.devmountain.ReadSocial.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devmountain.ReadSocial.entities.Book;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    //List<Book> findAllByUserEquals(Review review);
}
