package com.stankin.services.portal.back.stankinservicesportalback.authorization.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class ClientDTO {

    @Schema(description = "Логин пользователя")
    private String userName;

    @Schema(description = "Пароль пользователя")
    private String password;

    @Schema(description = "Студенческая группа пользователя")
    private String studentGroup;

    @Schema(description = "Уникальный токен сессии пользователя")
    private UUID token;
}
