package com.stankin.services.portal.back.stankinservicesportalback.authorization.service;

import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.BaseUserRequest;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.CreateUserRequest;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.ClientDTO;

public interface AuthorizationService {

    /**
     * Проверка пользователя по параметрам
     * @param request параметры
     * @return пользователь
     */
    ClientDTO checkUser(BaseUserRequest request);

    /**
     * Ручное создание пользователя
     * @param request параметры
     */
    void createUser(CreateUserRequest request);
}
