package com.lab.controllers;

import com.lab.models.Client;
import com.lab.services.ClientService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/client/")
public class ClientController {
    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "{id}")
    public Client getClientById(@PathVariable("id") int id) {
        return clientService.getClientById(id);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void save(Client client) {
        clientService.save(client);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Client> getAll() {
        return clientService.getAll();
    }

    @DeleteMapping(value = "{ids}")
    public void deleteAllById(@PathVariable("ids") List<Integer> ids) {
        clientService.deleteAllById(ids);
    }
}

