package com.lab.repository;

import com.lab.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findUserByUsername(String username);

    Optional<User> findUserById(Long id);
}
