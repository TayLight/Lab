package com.lab.services;

import com.lab.models.Contract;
import com.lab.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractService {
    private final ContractRepository contractRepository;

    public ContractService(ContractRepository contractRepository) {
        this.contractRepository = contractRepository;
    }

    public Contract getContractById(int id) {
        return contractRepository.findById(id).orElse(null);
    }

    public void save(Contract contract) {
        contractRepository.save(contract);
    }

    public List<Contract> getAll() {
        return contractRepository.findAll();
    }

    public void deleteAllById(List<Integer> ids) {
        contractRepository.deleteAllById(ids);
    }
}
