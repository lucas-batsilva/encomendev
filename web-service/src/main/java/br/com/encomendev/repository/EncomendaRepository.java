package br.com.encomendev.repository;

import br.com.encomendev.domain.Encomenda;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EncomendaRepository extends JpaRepository<Encomenda, Long> {
    Optional<Encomenda> findByCodigoRastreio(String codigoRastreio);
}
