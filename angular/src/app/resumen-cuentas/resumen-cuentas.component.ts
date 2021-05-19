import { Component, OnInit } from '@angular/core';
import { Account } from '../shared/cuentas';
import { CuentatMock } from '../shared/Mocks/cuentas-mock';

@Component({
  selector: 'app-resumen-cuentas',
  templateUrl: './resumen-cuentas.component.html',
  styleUrls: ['./resumen-cuentas.component.css']
})
export class ResumenCuentasComponent implements OnInit {
  title: string = "Resumen Cuentas";
  acounts!: Account[];
  constructor() { }

  ngOnInit(): void {
    this.acounts= CuentatMock;
  }

}
