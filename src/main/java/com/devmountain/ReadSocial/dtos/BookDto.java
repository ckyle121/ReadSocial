package com.devmountain.ReadSocial.dtos;

import com.devmountain.ReadSocial.entities.Book;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookDto {
    private Long id;

    private String googleId;
    private String title;
    private String poster;


    private Set<ReviewDto> reviewDtoSet = new HashSet<>();
    public BookDto(Book book){
        if (book.getId() != null){
            this.id = book.getId();
        }
        if (book.getGoogleId() != null) {
            this.googleId = book.getGoogleId();
        }
        if (book.getTitle() != null){
            this.title = book.getTitle();
        }
        if (book.getPoster() != null){
            this.poster = book.getPoster();
        }
    }
}
