package com.stankin.services.portal.back.stankinservicesportalback.authorization.mapper;

import com.stankin.services.portal.back.stankinservicesportalback.authorization.model.ClientDTO;
import com.stankin.services.portal.back.stankinservicesportalback.entity.Client;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AuthorizationMapper {

    ClientDTO map(Client source);
}
