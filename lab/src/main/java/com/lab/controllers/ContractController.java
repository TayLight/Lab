package com.lab.controllers;

import com.lab.models.Contract;
import com.lab.services.ContractService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contract/")
public class ContractController {
    private final ContractService contractService;

    public ContractController(ContractService contractService) {
        this.contractService = contractService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "{id}")
    public Contract getContractById(@PathVariable("id") int id) {
        return contractService.getContractById(id);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void save(Contract contract) {
        contractService.save(contract);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Contract> getAll() {
        return contractService.getAll();
    }

    @DeleteMapping(value = "{ids}")
    public void deleteAllById(@PathVariable("ids") List<Integer> ids) {
        contractService.deleteAllById(ids);
    }
}

