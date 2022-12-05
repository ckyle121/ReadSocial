package com.devmountain.ReadSocial.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devmountain.ReadSocial.entities.Book;
import com.devmountain.ReadSocial.entities.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findAllByUserEquals(User user);
}
