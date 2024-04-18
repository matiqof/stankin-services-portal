package com.stankin.services.portal.back.stankinservicesportalback.authorization.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateUserRequest extends BaseUserRequest {

    /**
     * Студенческая группа пользователя
     */
    private String studentGroup;
}
