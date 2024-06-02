package com.stankin.services.portal.back.stankinservicesportalback.repository;

import com.stankin.services.portal.back.stankinservicesportalback.entity.ClientServiceType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ClientServiceTypeRepository extends JpaRepository<ClientServiceType, UUID> {

    /**
     * Поиск услуги по ее названию
     * @param name название услуги
     * @return услуга
     */
    ClientServiceType findByName(String name);
}
