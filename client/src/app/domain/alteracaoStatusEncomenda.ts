import { StatusEncomenda } from "./statusEncomenda";
import { Encomenda } from "./encomenda";

export class AlteracaoStatusEncomenda {
  id: number;
  encomenda: Encomenda;
  statusEncomenda: StatusEncomenda;
  dataAlteracao: Date;

  constructor(params?: Partial<AlteracaoStatusEncomenda>) {
    if (params) {
      this.id = params.id;
      this.encomenda = params.encomenda;
      this.statusEncomenda = params.statusEncomenda;
      this.dataAlteracao = params.dataAlteracao;
    }
  }
}
