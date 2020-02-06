import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicialComponent } from "./components/inicial/inicial.component";
import { EncomendaComponent } from "./components/encomenda/encomenda.component";

const routes: Routes = [
  { path: "", component: InicialComponent },
  { path: "encomenda", component: EncomendaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
