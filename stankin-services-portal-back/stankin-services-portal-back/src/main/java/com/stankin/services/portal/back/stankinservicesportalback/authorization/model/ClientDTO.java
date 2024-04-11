package com.stankin.services.portal.back.stankinservicesportalback.authorization.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientDTO {

    @Schema(description = "Логин пользователя")
    private String userName;

    @Schema(description = "Студенческая группа пользователя")
    private String studentGroup;

    @Schema(description = "Пароль пользователя")
    private String password;
}
