package com.devmountain.ReadSocial.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserUIController {
    @RequestMapping("/user/{userId}")
    public String getBookPage(@PathVariable Long userId){
        return "user-single";
    }
}
