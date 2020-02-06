import { Injectable } from "@angular/core";
import { Encomenda } from "../domain/encomenda";
import { formatDate } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class EncomendaDataService {
  private encomenda: Encomenda;

  constructor() {}

  setEncomenda(encomenda: Encomenda) {
    this.encomenda = encomenda;
  }

  getEncomenda() {
    return this.encomenda;
  }

  formatDate(date: Date) {
    return formatDate(date, "dd/MM/yyyy", "en-US");
  }
}
