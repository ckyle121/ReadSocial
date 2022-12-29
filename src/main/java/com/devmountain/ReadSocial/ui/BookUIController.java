package com.devmountain.ReadSocial.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BookUIController {
    @RequestMapping("/books/bookId")
    public String getBookPage(){
        return "book";
    }
}
