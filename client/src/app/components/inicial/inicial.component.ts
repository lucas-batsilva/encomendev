import { Component, OnInit } from "@angular/core";
import { NavigationExtras, ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EncomendaService } from "src/app/service/encomenda.service";
import { Encomenda } from "src/app/domain/encomenda";
import { EncomendaDataService } from "src/app/service/encomenda-data.service";

@Component({
  selector: "app-inicial",
  templateUrl: "./inicial.component.html",
  styleUrls: ["./inicial.component.css"]
})
export class InicialComponent implements OnInit {
  formPesquisar: FormGroup;
  encomenda: Encomenda;
  mensagemErro: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private encomendaService: EncomendaService,
    private encomendaDataService: EncomendaDataService
  ) {}

  ngOnInit() {
    this.formPesquisar = this.formBuilder.group({
      codigoRastreio: ["", Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.encomendaService
        .consultarPorCodigoRastreio(form.value.codigoRastreio)
        .subscribe(
          res => {
            this.encomenda = res;
            this.irParaVisualizacao(this.encomenda);
          },
          err => {
            console.log(err);
            if (err.status == 404)
              this.mensagemErro = "Encomenda não encontrada";
          }
        );
    } else {
      this.mensagemErro = "Digite o código de rastreio";
    }
  }

  irParaVisualizacao(encomenda: Encomenda) {
    this.encomendaDataService.setEncomenda(encomenda);
    this.router.navigateByUrl("/encomenda");
  }
}
