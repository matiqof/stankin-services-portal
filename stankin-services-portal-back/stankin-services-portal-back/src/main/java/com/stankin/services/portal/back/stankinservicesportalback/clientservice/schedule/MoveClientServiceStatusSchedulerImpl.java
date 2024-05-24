package com.stankin.services.portal.back.stankinservicesportalback.clientservice.schedule;

import com.stankin.services.portal.back.stankinservicesportalback.clientservice.model.ClientServiceStatusType;
import com.stankin.services.portal.back.stankinservicesportalback.entity.ClientService;
import com.stankin.services.portal.back.stankinservicesportalback.repository.ClientServiceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class MoveClientServiceStatusSchedulerImpl implements MoveClientServiceStatusScheduler {

    private static final long statusUpdateTimeInSeconds = 900;
    private static final Instant instantNow = Instant.now();

    private final ClientServiceRepository clientServiceRepository;

    @Override
    @Scheduled(fixedRateString = "${app.moveClientServiceStatusFixedRate}")
    public void MoveClientServiceStatus() {
        try {
            List<ClientService> clientServices = clientServiceRepository.findAll();

            for (ClientService clientService : clientServices) {
                if (ClientServiceStatusType.IN_PROCESSING.equals(clientService.getStatus())
                        && instantNow.getEpochSecond() - clientService.getCreatedAt().getEpochSecond() >= statusUpdateTimeInSeconds) {
                    clientService.setStatus(ClientServiceStatusType.READY_FOR_PICKUP);
                    clientService.setCompletedAt(Instant.now());
                }
            }

            clientServiceRepository.saveAll(clientServices);
        } catch (Exception e) {
            log.error("createUser: Ошибка перемещения статусов заявок, ", e);
        }
    }
}
