import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sp06-financiamento-de-smartphone',
  templateUrl: './sp06-financiamento-de-smartphone.component.html',
  styleUrls: ['./sp06-financiamento-de-smartphone.component.css']
})
export class Sp06FinanciamentoDeSmartphoneComponent  {

  smartphones: string[] = ['iPhone 12', 'iPhone 11', 'iPhone X', 'iPhone 8'];
 
  selectedCelular : string = '';
  
  selection : any;
  parcelasIphone12: string[] = ['1x R$ 6.999,00 à vista', '2x R$ 3.299,50 sem juros', '3x R$ 2.199,67 sem juros', '4x R$ 1.649,75 sem juros', '5x R$ 1.319,80 sem juros'];
  parcelasIphone11: string[] = ['1x R$ 4.599,00 à vista','2x R$ 2.999,50 sem juros', '3x R$ 1.666,33 sem juros', '4x R$ 1.249,75 sem juros', '5x R$ 999,80 sem juros'];
  parcelasIphone10: string[] = ['1x R$ 3.999,00 à vista', '2x R$ 1.799,50 sem juros', '3x R$ 1.199,67 sem juros', '4x R$ 899,75 sem juros', '5x R$ 719,80 sem juros'];
  parcelasIphone8: string[] = ['1x R$ 3.499,99 à vista', '2x R$ 1.750,00 sem juros', '3x R$ 1.166,66 sem juros', '4x R$ 875,00 sem juros', '5x R$ 700,00 sem juros' ];

 
  constructor() {}
  
  chooseCelular(celular: string){
    this.selectedCelular = celular;
  }
  
  recarregarPagina(){
    window.alert("O smartphone foi escolhido c sucesso!");
    document.location.reload()
  }
}
