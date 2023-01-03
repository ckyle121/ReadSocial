package com.devmountain.ReadSocial.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BookUIController {
    @RequestMapping("book/{bookId}")
    public String getBookPage(@PathVariable Long bookId){
        return "book-single";
    }
}
