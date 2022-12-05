package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.BookDto;
import com.devmountain.ReadSocial.entities.Book;
import com.devmountain.ReadSocial.entities.User;
import com.devmountain.ReadSocial.repositories.BookRepository;
import com.devmountain.ReadSocial.repositories.ReviewRepository;
import com.devmountain.ReadSocial.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.swing.text.html.Option;
import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class BookServiceImpl implements BookService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public List<BookDto> getAllBooksByUserId(Long userId){
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isPresent()){
            List<Book> bookList = bookRepository.findAllByUserEquals(userOptional.get());
            return bookList.stream().map(book -> new BookDto(book)).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    @Override
    @Transactional
    public void addBook(BookDto bookDto, Long userId) {
        // Optional<User> userOptional = userRepository.findById(userId);
        // Book book = new Book(bookDto);
        // userOptional.ifPresent(book::setUser);
        // bookRepository.saveAllAndFlush(book);
    }

    @Override
    @Transactional
    public void deleteBookById(Long bookId) {

    }

    @Override
    public Optional<BookDto> getBookById(Long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        if(bookOptional.isPresent()){
            return Optional.of(new BookDto(bookOptional.get()));
        }
        return Optional.empty();
    }
}
