package com.lab.controllers;

import com.example.CarService.WithAuth;
import com.lab.models.Client;
import com.lab.repository.ClientRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class ClientControllerTest extends WithAuth {
    private final ClientRepository clientRepository;
    private Client client;

    ClientControllerTest(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @BeforeEach
    void setUp() {
        client = new Client();
        client.setFirstName("Иван");
        client.setLastName("Иванов");
        client.setPatronymic("Иванович");
        client.setPassportNumber("231444");
        client.setPassportSeries("1314");
        client.setPhoneNumber("89421347754");
        client.setAddress("Иваново 1");
        clientRepository.save(client);
    }

    @Test
    void getClientById() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/client/1")
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk());
    }

    @Test
    void save() throws Exception{
        Client client2 = new Client();
        client.setFirstName("Петр");
        client.setLastName("Петров");
        client.setPatronymic("Петрович");
        client.setPassportNumber("123144");
        client.setPassportSeries("1312");
        client.setPhoneNumber("8942423141");
        client.setAddress("Петрово 1");
        mockMvc.perform(MockMvcRequestBuilders.post("/api/client/")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(asJsonString(client2)))
                .andExpect(status().isOk());
    }

    @Test
    void getAll() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders.get("/api/client/")
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk());
    }

    @Test
    void deleteAllById() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/client/1")
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk());
    }
}