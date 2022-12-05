package com.devmountain.ReadSocial.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devmountain.ReadSocial.entities.Book;
import com.devmountain.ReadSocial.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface
BookRepository extends JpaRepository<Book, Long> {
    List<Book> findAllByUserEquals(User user);
}
