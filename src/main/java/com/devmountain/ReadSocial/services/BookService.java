package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.BookDto;
import com.devmountain.ReadSocial.entities.Book;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface BookService {
    List<BookDto> getAllBooksByUserId(Long userId);

    @Transactional
    void addBook(BookDto bookDto, Long userId);

    @Transactional
    void deleteBookById(Long bookId);

    Optional<BookDto> getBookById(Long bookId);
}
