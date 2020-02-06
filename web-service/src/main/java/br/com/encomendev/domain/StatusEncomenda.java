package br.com.encomendev.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="status_encomenda")
public class StatusEncomenda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="descricao")
    private String descricao;

    public StatusEncomenda() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

}
