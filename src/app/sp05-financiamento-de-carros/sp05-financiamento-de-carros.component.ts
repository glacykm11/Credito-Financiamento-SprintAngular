import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sp05-financiamento-de-carros',
  templateUrl: './sp05-financiamento-de-carros.component.html',
  styleUrls: ['./sp05-financiamento-de-carros.component.css']
})
export class Sp05FinanciamentoDeCarrosComponent implements OnInit {

  veiculos: string[] = ['Escolha o veículo:','Barco','Caminhão','Carro','Iate', 
  'JetSki','Lancha', 'Limousine', 'Moto', 'Van']

  constructor() { }

  ngOnInit(): void {
  }

  realizarPedido(){
    alert("Pedido realizado!");
    document.location.reload(true);
  }
}
