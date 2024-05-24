package com.stankin.services.portal.back.stankinservicesportalback.repository;

import com.stankin.services.portal.back.stankinservicesportalback.entity.Client;
import com.stankin.services.portal.back.stankinservicesportalback.entity.ClientService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ClientRepository extends JpaRepository<Client, UUID> {


    /**
     * Получить пользователя по логину
     * @param userName логин
     * @return пользователь
     */
    Client findByUserName(String userName);

    /**
     * Получить пользователя по токену
     * @param token токен
     * @return пользователь
     */
    Client findByToken(UUID token);


    /**
     * Получение всех услуг у пользователя по токену
     * @param token токен
     * @return список услуг
     */
    @Query("SELECT c.clientServices FROM Client c WHERE c.token = ?1")
    List<ClientService> findClientServicesWithToken(UUID token);
}
