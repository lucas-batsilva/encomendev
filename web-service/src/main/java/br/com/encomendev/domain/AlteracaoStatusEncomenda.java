package br.com.encomendev.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
public class AlteracaoStatusEncomenda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.EAGER, targetEntity = Encomenda.class)
    @JoinColumn(name = "id_encomenda")
    @JsonIgnore
    private Encomenda encomenda;

    @ManyToOne(fetch = FetchType.EAGER, targetEntity = StatusEncomenda.class)
    @JoinColumn(name = "id_status_encomenda")
    private StatusEncomenda statusEncomenda;

    @Column(name = "data_alteracao")
    private Date dataAlteracao;

    public AlteracaoStatusEncomenda() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Encomenda getEncomenda() {
        return encomenda;
    }

    public void setEncomenda(Encomenda encomenda) {
        this.encomenda = encomenda;
    }

    public Date getDataAlteracao() {
        return dataAlteracao;
    }

    public void setDataAlteracao(Date dataAlteracao) {
        this.dataAlteracao = dataAlteracao;
    }

    public StatusEncomenda getStatusEncomenda() {
        return statusEncomenda;
    }

    public void setStatusEncomenda(StatusEncomenda statusEncomenda) {
        this.statusEncomenda = statusEncomenda;
    }
}
