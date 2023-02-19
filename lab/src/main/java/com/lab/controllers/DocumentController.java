package com.lab.controllers;

import com.lab.models.Document;
import com.lab.services.DocumentService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/document/")
public class DocumentController {
    private final DocumentService documentService;

    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "{id}")
    public Document getDocumentById(@PathVariable("id") int id) {
        return documentService.getDocumentById(id);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void save(Document document) {
        documentService.save(document);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Document> getAll() {
        return documentService.getAll();
    }

    @DeleteMapping(value = "{ids}")
    public void deleteAllById(@PathVariable("ids") List<Integer> ids) {
        documentService.deleteAllById(ids);
    }
}

