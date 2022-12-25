package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.BookDto;
import org.springframework.http.ResponseEntity;

import javax.transaction.Transactional;

public interface BookService {
    //List<BookDto> getAllBooksByUserId(Long userId);

    @Transactional
    void addBook(BookDto bookDto);

    Object getBookById(Long bookId);
}
