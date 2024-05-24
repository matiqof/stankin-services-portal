package com.stankin.services.portal.back.stankinservicesportalback.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
public class ClientServiceType extends BaseEntity {

    /**
     * Идентификатор услуги
     */
    private UUID clientServiceGuid;

    /**
     * Название услуги
     */
    @Column(nullable = false, unique = true)
    private String name;

    /**
     * Номер кабинета выполнения услуги
     */
    @Column(nullable = false)
    private String cabinet;
}
