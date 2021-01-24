import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
})
export class CalculoPage implements OnInit {

  public edtHora;
  public edtValorHora;
  public cbDesconto;
  public salarioBruto;
  public desconto;
  public salarioLiquido;
  
  constructor() { }

  ngOnInit() {
  }

  onVerificarClick() {
    let sBruto;
    let sLiquido;
    let sdesconto;

    sBruto = Number(this.edtHora) * Number(this.edtValorHora);
    sdesconto = sBruto * Number(this.cbDesconto);
    sLiquido = sBruto - sdesconto;

    this.desconto = sdesconto;
    this.salarioBruto = sBruto;
    this.salarioLiquido = sLiquido;
  }
}
