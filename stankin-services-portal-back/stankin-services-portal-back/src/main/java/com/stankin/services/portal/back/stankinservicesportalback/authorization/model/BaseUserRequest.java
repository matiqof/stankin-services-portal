package com.stankin.services.portal.back.stankinservicesportalback.authorization.model;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class BaseUserRequest {

    /**
     * Логин пользователя
     */
    private String userName;

    /**
     * Пароль пользователя
     */
    private String password;

    /**
     * Уникальный токен сессии пользователя
     */
    private UUID token;
}
