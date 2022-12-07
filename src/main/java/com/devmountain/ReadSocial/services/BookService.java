package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.BookDto;

import java.util.Optional;


public interface BookService {
    //List<BookDto> getAllBooksByUserId(Long userId);

    Optional<BookDto> getBookById(Long bookId);
}
