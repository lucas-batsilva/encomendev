export class StatusEncomenda {
  id: number;
  descricao: string;

  constructor(params?: Partial<StatusEncomenda>) {
    if (params) {
      this.id = params.id;
      this.descricao = params.descricao;
    }
  }
}
