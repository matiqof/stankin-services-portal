package com.stankin.services.portal.back.stankinservicesportalback.clientservice.model;

public enum ClientServiceStatusType {

    IN_PROCESSING("IN_PROCESSING"),

    READY_FOR_PICKUP("READY_FOR_PICKUP");

    private final String value;

    ClientServiceStatusType(String value) {
        this.value = value;
    }

    public final String getValue() {
        return value;
    }
}
