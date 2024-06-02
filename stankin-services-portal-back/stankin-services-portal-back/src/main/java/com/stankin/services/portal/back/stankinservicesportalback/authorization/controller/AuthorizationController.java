package com.stankin.services.portal.back.stankinservicesportalback.authorization.controller;

import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.BaseUserRequest;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.CreateUserRequest;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.ClientDTO;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.service.AuthorizationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Авторизация", description = "Контроллер для работы с авторизацией")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/authorization")
@RequiredArgsConstructor
public class AuthorizationController {

    private static final String CHECK_USER = "/user/check";
    private static final String CREATE_USER = "/user/create";

    private final AuthorizationService authorizationService;

    @PostMapping(CHECK_USER)
    @Operation(summary = "Возвращает пользователя по параметрам")
    ClientDTO checkUser(@RequestBody BaseUserRequest request) {
        return authorizationService.checkUser(request);
    }

    @PutMapping(CREATE_USER)
    @Operation(summary = "Создание пользователя")
    void createUser(@RequestBody CreateUserRequest request) {
        authorizationService.createUser(request);
    }
}
