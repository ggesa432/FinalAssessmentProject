package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()  // Disable CSRF for testing; review for production use.
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/employees/**").permitAll() // Allow public access to employee endpoints.
                .anyRequest().authenticated()
            );
        return http.build();
    }
}