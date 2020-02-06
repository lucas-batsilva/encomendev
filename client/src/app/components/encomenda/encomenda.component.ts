import { Component, OnInit } from "@angular/core";
import { AlteracaoStatusEncomenda } from "src/app/domain/alteracaoStatusEncomenda";
import { Encomenda } from "src/app/domain/encomenda";
import { EncomendaDataService } from "src/app/service/encomenda-data.service";

@Component({
  selector: "app-encomenda",
  templateUrl: "./encomenda.component.html",
  styleUrls: ["./encomenda.component.css"]
})
export class EncomendaComponent implements OnInit {
  encomenda: Encomenda;
  alteracoes: AlteracaoStatusEncomenda[];

  constructor(private encomendaDataService: EncomendaDataService) {}

  ngOnInit() {
    this.encomenda = this.encomendaDataService.getEncomenda();
    this.alteracoes = this.encomenda.alteracoesStatusEncomenda;
  }
}
