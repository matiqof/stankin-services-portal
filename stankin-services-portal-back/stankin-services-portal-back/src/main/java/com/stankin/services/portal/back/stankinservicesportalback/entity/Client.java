package com.stankin.services.portal.back.stankinservicesportalback.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.Instant;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(uniqueConstraints= @UniqueConstraint(columnNames={"user_name"}) )
public class Client {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(updatable = false, nullable = false)
    private UUID guid;

    /**
     * Логин пользователя
     */
    private String userName;

    /**
     * Студенческая группа пользователя
     */
    private String studentGroup;

    /**
     * Пароль пользователя
     */
    private String password;

    @UpdateTimestamp
    private Instant sysLastChangeDate;
}
