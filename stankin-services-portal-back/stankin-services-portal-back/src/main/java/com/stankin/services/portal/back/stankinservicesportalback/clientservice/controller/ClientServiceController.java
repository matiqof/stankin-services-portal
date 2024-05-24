package com.stankin.services.portal.back.stankinservicesportalback.clientservice.controller;

import com.stankin.services.portal.back.stankinservicesportalback.entity.ClientService;
import com.stankin.services.portal.back.stankinservicesportalback.clientservice.model.ClientServiceRequest;
import com.stankin.services.portal.back.stankinservicesportalback.clientservice.service.ServiceClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Tag(name = "Услуги", description = "Контроллер для работы с услугами и типами услуг")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/services")
@RequiredArgsConstructor
public class ClientServiceController {

    private static final String GET_ALL_SERVICES_BY_USER = "/get";
    private static final String ADD_SERVICE_BY_USER = "/add";
    private static final String ADD_NEW_SERVICE = "/add/new";

    private final ServiceClientService serviceClientService;

    @GetMapping(GET_ALL_SERVICES_BY_USER)
    @Operation(summary = "Возвращает все услуги по токену пользователя из БД")
    List<ClientService> getServices(String token) {
        return serviceClientService.getServices(token);
    }

    @PostMapping(ADD_SERVICE_BY_USER)
    @Operation(summary = "Добавление услуги для пользователя")
    void addServices(@RequestBody ClientServiceRequest clientServiceRequest) {
        serviceClientService.createServiceForUser(clientServiceRequest);
    }

    @GetMapping(ADD_NEW_SERVICE)
    @Operation(summary = "Добавление новой услуги")
    void addServices(String clientServiceName, String cabinet) {
        serviceClientService.createNewService(clientServiceName, cabinet);
    }
}
