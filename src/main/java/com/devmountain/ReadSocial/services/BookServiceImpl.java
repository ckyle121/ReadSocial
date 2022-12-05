package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.BookDto;
import com.devmountain.ReadSocial.entities.Book;
import com.devmountain.ReadSocial.entities.User;
import com.devmountain.ReadSocial.repositories.BookRepository;
import com.devmountain.ReadSocial.repositories.ReviewRepository;
import com.devmountain.ReadSocial.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class BookServiceImpl {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    public List<BookDto> getAllBooksByUserId(Long userId){
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isPresent()){
            List<Book> bookList = bookRepository.findAllByUserEquals(userOptional.get());
            return bookList.stream().map(book -> new BookDto(book)).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }
}
