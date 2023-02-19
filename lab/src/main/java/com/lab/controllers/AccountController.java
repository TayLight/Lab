package com.lab.controllers;

import com.lab.models.Account;
import com.lab.services.AccountService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/account/")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "{id}")
    public Account getAccountById(@PathVariable("id") int id) {
        return accountService.getAccountById(id);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void save(Account account) {
        accountService.save(account);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Account> getAll() {
        return accountService.getAll();
    }

    @DeleteMapping(value = "{ids}")
    public void deleteAllById(@PathVariable("ids") List<Integer> ids) {
        accountService.deleteAllById(ids);
    }
}
