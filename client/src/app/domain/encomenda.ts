import { StatusEncomenda } from "./statusEncomenda";
import { AlteracaoStatusEncomenda } from "./alteracaoStatusEncomenda";

export class Encomenda {
  id: number;
  codigoRastreio: string;
  statusEncomenda: StatusEncomenda;
  alteracoesStatusEncomenda: AlteracaoStatusEncomenda[];

  constructor(params?: Partial<Encomenda>) {
    if (params) {
      this.id = params.id;
      this.codigoRastreio = params.codigoRastreio;
      this.statusEncomenda = params.statusEncomenda;
      this.alteracoesStatusEncomenda = params.alteracoesStatusEncomenda;
    }
  }
}
