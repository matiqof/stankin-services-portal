package com.stankin.services.portal.back.stankinservicesportalback.repository;

import com.stankin.services.portal.back.stankinservicesportalback.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface ClientRepository extends JpaRepository<Client, UUID>{

    /**
     * Получить пользователя по логину
     * @return пользователь
     */
    Client findByUserName(String userName);
}
