package com.stankin.services.portal.back.stankinservicesportalback.repository;

import com.stankin.services.portal.back.stankinservicesportalback.entity.ClientService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ClientServiceRepository extends JpaRepository<ClientService, UUID> {
}
