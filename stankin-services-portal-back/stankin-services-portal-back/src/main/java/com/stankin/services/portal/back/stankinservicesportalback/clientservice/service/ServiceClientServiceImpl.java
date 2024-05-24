package com.stankin.services.portal.back.stankinservicesportalback.clientservice.service;

import com.stankin.services.portal.back.stankinservicesportalback.clientservice.model.ClientServiceStatusType;
import com.stankin.services.portal.back.stankinservicesportalback.entity.Client;
import com.stankin.services.portal.back.stankinservicesportalback.entity.ClientServiceType;
import com.stankin.services.portal.back.stankinservicesportalback.repository.ClientRepository;
import com.stankin.services.portal.back.stankinservicesportalback.clientservice.model.ClientServiceRequest;
import com.stankin.services.portal.back.stankinservicesportalback.entity.ClientService;
import com.stankin.services.portal.back.stankinservicesportalback.repository.ClientServiceRepository;
import com.stankin.services.portal.back.stankinservicesportalback.repository.ClientServiceTypeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class ServiceClientServiceImpl implements ServiceClientService {

    private final ClientRepository clientRepository;
    private final ClientServiceRepository clientServiceRepository;
    private final ClientServiceTypeRepository clientServiceTypeRepository;

    @Override
    public List<ClientService> getServices(String token) {
        try {
            return clientRepository.findClientServicesWithToken(UUID.fromString(token));
        } catch (Exception e) {
            log.error("createUser: Ошибка получения услуги по токену пользователя, ", e);
        }

        return Collections.emptyList();
    }

    @Override
    public void createServiceForUser(ClientServiceRequest clientServiceRequest) {
        try {
            ClientService clientService = new ClientService();

            Client client = clientRepository.findByToken(clientServiceRequest.getToken());
            clientService.setClientGuid(client.getGuid());

            clientService.setCreatedAt(Instant.now());

            clientService.setStatus(ClientServiceStatusType.IN_PROCESSING);

            ClientServiceType clientServiceType = clientServiceTypeRepository.findByName(clientServiceRequest.getClientServiceName());
            clientService.setClientServiceType(clientServiceType);

            clientServiceRepository.save(clientService);
        } catch (Exception e) {
            log.error("createUser: Ошибка добавления услуги пользователю, ", e);
        }
    }

    @Override
    public void createNewService(String clientServiceName, String cabinet) {
        try {
            ClientServiceType clientServiceType = new ClientServiceType();
            clientServiceType.setName(clientServiceName);
            clientServiceType.setCabinet(cabinet);
            clientServiceTypeRepository.save(clientServiceType);
        } catch (Exception e) {
            log.error("createUser: Ошибка создания новой услуги, ", e);
        }
    }
}
