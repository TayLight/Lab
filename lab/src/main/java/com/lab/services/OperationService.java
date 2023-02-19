package com.lab.services;


import com.lab.models.Operation;
import com.lab.repository.OperationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OperationService {
    private final OperationRepository operationRepository;

    public OperationService(OperationRepository operationRepository) {
        this.operationRepository = operationRepository;
    }

    public Operation getOperationById(int id) {
        return operationRepository.findById(id).orElse(null);
    }

    public void save(Operation operation) {
        operationRepository.save(operation);
    }

    public List<Operation> getAll() {
        return operationRepository.findAll();
    }

    public void deleteAllById(List<Integer> ids) {
        operationRepository.deleteAllById(ids);
    }
}
