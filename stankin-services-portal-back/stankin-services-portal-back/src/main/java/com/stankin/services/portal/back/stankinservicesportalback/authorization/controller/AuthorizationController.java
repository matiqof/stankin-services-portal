package com.stankin.services.portal.back.stankinservicesportalback.authorization.controller;

import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.CheckUserRequest;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.ClientDTO;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.service.AuthorizationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authorization")
@RequiredArgsConstructor
public class AuthorizationController {

    private static final String CHECK_USER = "/user/check";

    private final AuthorizationService authorizationService;

    @PostMapping(CHECK_USER)
    ClientDTO checkUser(@RequestBody CheckUserRequest request) {
        return authorizationService.checkUser(request);
    }
}
