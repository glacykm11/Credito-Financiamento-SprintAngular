import { Sp02MenuInicialComponent } from './sp02-menu-inicial/sp02-menu-inicial.component';
import { Sp03PosContratoComponent } from './sp03-pos-contrato/sp03-pos-contrato.component';
import { Sp04CreditoImobiliarioComponent } from './sp04-credito-imobiliario/sp04-credito-imobiliario.component';
import { Sp05FinanciamentoDeCarrosComponent } from './sp05-financiamento-de-carros/sp05-financiamento-de-carros.component';
import { Sp06FinanciamentoDeSmartphoneComponent } from './sp06-financiamento-de-smartphone/sp06-financiamento-de-smartphone.component';
import { Sp07CreditoPessoalComponent } from './sp07-credito-pessoal/sp07-credito-pessoal.component';
import { Sp08FinanciamentoIdealComponent } from './sp08-financiamento-ideal/sp08-financiamento-ideal.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: '' , component: Sp02MenuInicialComponent},
    { path: 'sp03-pos-contrato' , component: Sp03PosContratoComponent},
    { path: 'sp04-credito-imobiliario' , component: Sp04CreditoImobiliarioComponent},
    { path: 'sp05-financiamento-de-carros' , component: Sp05FinanciamentoDeCarrosComponent},
    { path: 'sp06-financiamento-de-smartphone' , component: Sp06FinanciamentoDeSmartphoneComponent},
    { path: 'sp07-credito-pessoal' , component: Sp07CreditoPessoalComponent},
    { path: 'sp08-financiamento-ideal' , component: Sp08FinanciamentoIdealComponent},
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }