package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.BookDto;
import com.devmountain.ReadSocial.entities.Book;
import com.devmountain.ReadSocial.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookRepository bookRepository;

    @Override
    @Transactional
    public void addBook(BookDto bookDto) {
        Book book = new Book(bookDto);
        bookRepository.saveAndFlush(book);
    }

    @Override
    public Optional<BookDto> getBookById(Long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        return Optional.of(new BookDto(bookOptional.get()));
    }
}
