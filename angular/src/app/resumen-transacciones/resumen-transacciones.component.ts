import { Component, OnInit } from '@angular/core';
import { TransaccionesMock } from '../shared/Mocks/transacciones-mock';
import { Transacciones } from '../shared/transacciones';
import { Account } from '../shared/cuentas';
import { CuentatMock } from '../shared/Mocks/cuentas-mock';

@Component({
  selector: 'app-resumen-transacciones',
  templateUrl: './resumen-transacciones.component.html',
  styleUrls: ['./resumen-transacciones.component.css']
})
export class ResumenTransaccionesComponent implements OnInit {
  title: string = "Resumen Transacciones";
  transactions!: Transacciones[];
  accounts!: Account[];
  constructor() { }

  ngOnInit(): void {
    this.transactions= TransaccionesMock;
    this.accounts= CuentatMock;
  }
  GetNombreCuenta(Accountid: number){
    var account = this.accounts?.find(p=> p.Id == Accountid);
    return account?.Name;
  }
  GetCurrency(Accountid: number){
    var account = this.accounts?.find(p=> p.Id == Accountid);
    return account?.Currency;
  }

}
