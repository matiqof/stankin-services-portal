package com.stankin.services.portal.back.stankinservicesportalback.clientservice.service;

import com.stankin.services.portal.back.stankinservicesportalback.entity.ClientService;
import com.stankin.services.portal.back.stankinservicesportalback.clientservice.model.ClientServiceRequest;

import java.util.List;

public interface ServiceClientService {

    /**
     * Получение всех сервисов для пользователя
     * @param username логин пользователя
     * @return список услуг
     */
    List<ClientService> getServices(String username);

    /**
     * Создание сервиса для пользователя
     * @param clientServiceRequest параметры
     */
    void createServiceForUser(ClientServiceRequest clientServiceRequest);

    /**
     * Создание новой услуги
     * @param clientServiceName название услуги
     * @param cabinet кабинет получения услуги
     */
    void createNewService(String clientServiceName, String cabinet);
}
