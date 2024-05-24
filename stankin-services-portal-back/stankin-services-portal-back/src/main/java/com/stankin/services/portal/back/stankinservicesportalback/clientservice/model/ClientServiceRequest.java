package com.stankin.services.portal.back.stankinservicesportalback.clientservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientServiceRequest {

    /**
     * Название услуги
     */
    private String clientServiceName;

    /**
     * Токен клиента
     */
    private UUID token;
}
