package com.lab.controllers;

import com.lab.models.User;
import com.lab.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("api/user/{id}")
    public User getUserById(@PathVariable(value="id") long id){
        return userService.getUserById(id);
    }

    @GetMapping("api/user/")
    public User getCurrentUser(Principal principal){
        return userService.getCurrentUser(principal);
    }
}
