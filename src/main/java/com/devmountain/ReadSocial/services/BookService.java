package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.BookDto;
import com.devmountain.ReadSocial.dtos.ReviewDto;
import com.devmountain.ReadSocial.repositories.BookRepository;
import com.devmountain.ReadSocial.entities.Book;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface BookService {
    //List<BookDto> getAllBooksByUserId(Long userId);

    @Transactional
    void addBook(BookDto bookDto);

    Optional<BookDto> getBookById(Long bookId);
}
