package com.stankin.services.portal.back.stankinservicesportalback.entity;

import com.stankin.services.portal.back.stankinservicesportalback.clientservice.model.ClientServiceStatusType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.UUID;

@Entity
@Getter
@Setter
public class ClientService extends BaseEntity {

    @Column(nullable = false)
    private UUID clientGuid;

    /**
     * Статус услуги
     */
    @Column(nullable = false)
    private ClientServiceStatusType status;

    /**
     * Дата создания заявки на услугу
     */
    @Column(nullable = false)
    private Instant createdAt;

    /**
     * Дата завершения обработки услуги
     */
    private Instant completedAt;

    @OneToOne
    @JoinColumn(name = "clientServiceGuid")
    private ClientServiceType clientServiceType;
}
