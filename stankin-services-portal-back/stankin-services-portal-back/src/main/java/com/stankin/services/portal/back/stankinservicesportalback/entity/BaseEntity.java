package com.stankin.services.portal.back.stankinservicesportalback.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Version;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.Instant;
import java.util.UUID;

@MappedSuperclass
@Getter
@Setter
public class BaseEntity {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(nullable = false)
    private UUID guid;

    @Version
    @Column(nullable = false)
    private Long version;

    @UpdateTimestamp
    @Column(nullable = false)
    private Instant sysLastChangeDate;
}
