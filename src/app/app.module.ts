import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SP01IntroducaoAoCreditoComponent } from './sp01-introducao-ao-credito/sp01-introducao-ao-credito.component';
import { Sp02MenuInicialComponent } from './sp02-menu-inicial/sp02-menu-inicial.component';
import { Sp03RenegociacaoComponent } from './sp03-renegociacao/sp03-renegociacao.component';
import { Sp04CreditoImobiliarioComponent } from './sp04-credito-imobiliario/sp04-credito-imobiliario.component';
import { Sp05FinanciamentoDeCarrosComponent } from './sp05-financiamento-de-carros/sp05-financiamento-de-carros.component';
import { Sp06FinanciamentoDeSmartphoneComponent } from './sp06-financiamento-de-smartphone/sp06-financiamento-de-smartphone.component';
import { Sp07CreditoPessoalComponent } from './sp07-credito-pessoal/sp07-credito-pessoal.component';
import { Sp08FinanciamentoIdealComponent } from './sp08-financiamento-ideal/sp08-financiamento-ideal.component';

/* Importação do ngx-mask para formatar para moeda BRL na tela financiamento de carros */
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SP01IntroducaoAoCreditoComponent,
    Sp02MenuInicialComponent,
    Sp03RenegociacaoComponent,
    Sp04CreditoImobiliarioComponent,
    Sp05FinanciamentoDeCarrosComponent,
    Sp06FinanciamentoDeSmartphoneComponent,
    Sp07CreditoPessoalComponent,
    Sp08FinanciamentoIdealComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
