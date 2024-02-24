package com.stankin.services.portal.back.stankinservicesportalback;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@OpenAPIDefinition(
        info = @Info(
                title = "Портал услуг вуза СТАНКИН",
                version = "01.000",
                contact = @Contact(
                        email = "matiqof@gmail.com"
                )
        )
)

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class StankinServicesPortalBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(StankinServicesPortalBackApplication.class, args);
    }

}
