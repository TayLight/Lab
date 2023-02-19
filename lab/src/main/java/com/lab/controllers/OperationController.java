package com.lab.controllers;

import com.lab.models.Operation;
import com.lab.services.OperationService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/operation/")
public class OperationController {
    private final OperationService operationService;

    public OperationController(OperationService operationService) {
        this.operationService = operationService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "{id}")
    public Operation getOperationById(@PathVariable("id") int id) {
        return operationService.getOperationById(id);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void save(Operation operation) {
        operationService.save(operation);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Operation> getAll() {
        return operationService.getAll();
    }

    @DeleteMapping(value = "{ids}")
    public void deleteAllById(@PathVariable("ids") List<Integer> ids) {
        operationService.deleteAllById(ids);
    }
}

