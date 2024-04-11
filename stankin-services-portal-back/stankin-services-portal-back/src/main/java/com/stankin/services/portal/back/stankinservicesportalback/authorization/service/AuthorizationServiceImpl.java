package com.stankin.services.portal.back.stankinservicesportalback.authorization.service;

import com.stankin.services.portal.back.stankinservicesportalback.authorization.mapper.AuthorizationMapper;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.CheckUserRequest;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.ClientDTO;
import com.stankin.services.portal.back.stankinservicesportalback.entity.Client;
import com.stankin.services.portal.back.stankinservicesportalback.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class AuthorizationServiceImpl implements AuthorizationService {

    private static final ClientDTO EMPTY_CLIENT_DTO = new ClientDTO();

    private final ClientRepository clientRepository;
    private final AuthorizationMapper authorizationMapper;

    @Override
    public ClientDTO checkUser(CheckUserRequest request) {
        Client client = clientRepository.findByUserName(request.getUserName());
        if (Objects.nonNull(client) &&
                Objects.equals(request.getPassword(), client.getPassword())) {
            return authorizationMapper.map(client);
        }

        return EMPTY_CLIENT_DTO;
    }
}
