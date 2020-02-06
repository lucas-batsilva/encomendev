import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Encomenda } from "../domain/encomenda";
import { NavigationExtras } from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "http://localhost:8080/encomenda";

@Injectable({
  providedIn: "root"
})
export class EncomendaService {
  constructor(private http: HttpClient) {}

  consultarPorCodigoRastreio(codigoRastreio: string): Observable<Encomenda> {
    const url = `${apiUrl}/${codigoRastreio}`;
    return this.http
      .get<Encomenda>(url)
      .pipe(tap(_ => console.log(`encomenda do codigo =${codigoRastreio}`)));
  }
}
