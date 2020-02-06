package br.com.encomendev.domain;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "encomenda")
public class Encomenda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="codigo_rastreio")
    private String codigoRastreio;

    @ManyToOne(targetEntity = StatusEncomenda.class)
    @JoinColumn(name="id_status_encomenda")
    private StatusEncomenda statusEncomenda;

    @OneToMany(targetEntity = AlteracaoStatusEncomenda.class, mappedBy = "encomenda", fetch = FetchType.LAZY)
    private List<AlteracaoStatusEncomenda> alteracoesStatusEncomenda;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCodigoRastreio() {
        return codigoRastreio;
    }

    public void setCodigoRastreio(String codigoRastreio) {
        this.codigoRastreio = codigoRastreio;
    }

    public StatusEncomenda getStatusEncomenda() {
        return statusEncomenda;
    }

    public void setStatusEncomenda(StatusEncomenda statusEncomenda) {
        this.statusEncomenda = statusEncomenda;
    }


    public List<AlteracaoStatusEncomenda> getAlteracoesStatusEncomenda() {
        return alteracoesStatusEncomenda;
    }

    public void setAlteracoesStatusEncomenda(List<AlteracaoStatusEncomenda> alteracoesStatusEncomenda) {
        this.alteracoesStatusEncomenda = alteracoesStatusEncomenda;
    }

}
