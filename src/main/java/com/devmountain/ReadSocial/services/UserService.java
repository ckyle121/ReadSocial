package com.devmountain.ReadSocial.services;

import javax.transaction.Transactional;
import java.util.List;

import com.devmountain.ReadSocial.dtos.UserDto;

public interface UserService {
    @Transactional
    List<String> addUser(UserDto userDto);

    List<String> userLogin(UserDto userDto);
}
