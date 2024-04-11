package com.stankin.services.portal.back.stankinservicesportalback.authorization.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CheckUserRequest {

    /**
     * Логин пользователя
     */
    private String userName;

    /**
     * Пароль пользователя
     */
    private String password;
}
