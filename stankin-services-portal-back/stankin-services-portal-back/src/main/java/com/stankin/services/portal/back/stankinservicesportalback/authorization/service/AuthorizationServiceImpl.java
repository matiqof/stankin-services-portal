package com.stankin.services.portal.back.stankinservicesportalback.authorization.service;

import com.stankin.services.portal.back.stankinservicesportalback.authorization.mapper.AuthorizationMapper;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.BaseUserRequest;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.CreateUserRequest;
import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.ClientDTO;
import com.stankin.services.portal.back.stankinservicesportalback.entity.Client;
import com.stankin.services.portal.back.stankinservicesportalback.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthorizationServiceImpl implements AuthorizationService {

    private static final ClientDTO EMPTY_CLIENT_DTO = new ClientDTO();

    private final ClientRepository clientRepository;
    private final AuthorizationMapper authorizationMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public ClientDTO checkUser(BaseUserRequest request) {
        try {
            String userName = request.getUserName();
            UUID token = request.getToken();
            if (Objects.nonNull(userName) && Objects.nonNull(request.getPassword()) && Objects.isNull(token)) {
                Client client = clientRepository.findByUserName(request.getUserName());
                if (Objects.nonNull(client) &&
                        passwordEncoder.matches(request.getPassword(), client.getPassword())) {
                    client.setToken(UUID.randomUUID());
                    clientRepository.save(client);
                    return authorizationMapper.map(client);
                }
            } else if (Objects.nonNull(token)) {
                Client client = clientRepository.findByToken(token);
                if (Objects.nonNull(client)) {
                    return authorizationMapper.map(client);
                }
            }
        } catch (Exception e) {
            log.error("checkUser: Ошибка проверки пользователя, ", e);
        }

        return EMPTY_CLIENT_DTO;
    }

    @Override
    public void createUser(CreateUserRequest request) {
        try {
            Client client = authorizationMapper.map(request);
            String password = request.getPassword();
            if (StringUtils.hasLength(password)) {
                client.setPassword(passwordEncoder.encode(request.getPassword()));
                clientRepository.save(client);
            } else {
                log.error("createUser: Ошибка сохранения пользователя, пароль равен null");
            }
        } catch (Exception e) {
            log.error("createUser: Ошибка сохранения пользователя, ", e);
        }
    }
}
