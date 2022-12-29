package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.BookDto;
import org.springframework.http.ResponseEntity;

import javax.transaction.Transactional;
import java.util.Optional;

public interface BookService {
    //List<BookDto> getAllBooksByUserId(Long userId);

    @Transactional
    void addBook(BookDto bookDto);
    
    Optional<BookDto> getBookByGoogleId(BookDto bookDto);

    Optional<BookDto> getBookById(Long bookId);
}
