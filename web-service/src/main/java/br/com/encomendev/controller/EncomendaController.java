package br.com.encomendev.controller;

import br.com.encomendev.domain.Encomenda;
import br.com.encomendev.repository.EncomendaRepository;
import br.com.encomendev.service.EncomendaService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("encomenda")
public class EncomendaController {

    @Autowired
    EncomendaService encomendaService;

    @RequestMapping(value = "/{codigoRastreio}", method = RequestMethod.GET)
    public ResponseEntity<?> consultarPorCodigoRastreio(@PathVariable String codigoRastreio) {
        return encomendaService.consultarPorCodigoRastreio(codigoRastreio)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
