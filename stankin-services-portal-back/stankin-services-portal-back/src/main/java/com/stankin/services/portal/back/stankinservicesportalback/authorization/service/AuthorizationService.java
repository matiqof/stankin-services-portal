package com.stankin.services.portal.back.stankinservicesportalback.authorization.service;

import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.CheckUserRequest;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.ClientDTO;

public interface AuthorizationService {

    /**
     * Проверка пользователя по параметрам
     * @param request параметры
     * @return пользователь
     */
    ClientDTO checkUser(CheckUserRequest request);
}
