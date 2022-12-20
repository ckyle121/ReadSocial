package com.devmountain.ReadSocial.services;

import com.devmountain.ReadSocial.dtos.ReviewDto;
import com.devmountain.ReadSocial.dtos.UserDto;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface UserService {
    @Transactional
    List<String> addUser(UserDto userDto);

    List<String> userLogin(UserDto userDto);

    Optional<UserDto> getUserById(Long userId);
}