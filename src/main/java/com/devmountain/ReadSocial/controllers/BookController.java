package com.devmountain.ReadSocial.controllers;

import com.devmountain.ReadSocial.dtos.BookDto;
import com.devmountain.ReadSocial.exception.ResourceNotFoundException;
import com.devmountain.ReadSocial.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/books")
public class BookController {
    @Autowired
    private BookService bookService;

    @PostMapping("/")
    public void addBook(@RequestBody BookDto bookDto){
        bookService.addBook(bookDto);
    }

    @GetMapping("/{bookId}")
    public Object getBookById(@PathVariable Long bookId){
        return bookService.getBookById(bookId);
    }
}
