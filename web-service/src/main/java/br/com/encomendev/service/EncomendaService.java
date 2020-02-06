package br.com.encomendev.service;

import br.com.encomendev.domain.Encomenda;
import br.com.encomendev.repository.EncomendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EncomendaService {

    @Autowired
    EncomendaRepository encomendaRepository;

    public Optional<Encomenda> consultarPorCodigoRastreio(String codigoRastreio) {
        return encomendaRepository.findByCodigoRastreio(codigoRastreio);
    }

}
