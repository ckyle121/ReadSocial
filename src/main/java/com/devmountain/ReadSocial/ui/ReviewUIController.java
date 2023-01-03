package com.devmountain.ReadSocial.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReviewUIController {
    @RequestMapping("review/{reviewId}")
    public String getBookPage(@PathVariable Long reviewId){
        return "edit-review";
    }
}
