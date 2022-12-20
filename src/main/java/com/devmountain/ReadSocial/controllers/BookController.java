package com.devmountain.ReadSocial.controllers;

import com.devmountain.ReadSocial.dtos.BookDto;
import com.devmountain.ReadSocial.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

//    @GetMapping("/user/{userId}")
//    public List<BookDto> getBooksByUser(@PathVariable Long userId){
//        return bookService.getAllBooksByUserId(userId);
//    }

    @GetMapping("/{bookId}")
    public Optional<BookDto> getBookById(@PathVariable Long bookId){
        return bookService.getBookById(bookId);
    }
}
