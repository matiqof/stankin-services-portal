package com.stankin.services.portal.back.stankinservicesportalback.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
public class Client extends BaseEntity {

    /**
     * Логин пользователя
     */
    @Column(unique = true, nullable = false)
    private String userName;

    /**
     * Пароль пользователя
     */
    @Column(nullable = false)
    private String password;

    /**
     * Студенческая группа пользователя
     */
    private String studentGroup;

    /**
     * Уникальный токен сессии пользователя
     */
    private UUID token;
}
