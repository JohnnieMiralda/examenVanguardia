import { Component, OnInit } from '@angular/core';
import { Transacciones } from '../shared/transacciones';
import { Account } from '../shared/cuentas';
import { TransaccionesMock } from '../shared/Mocks/transacciones-mock';
import { CuentatMock } from '../shared/Mocks/cuentas-mock';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  title: string = "Resumen";
  income: number=0;
  expenses: number=0;
  total: number=0;
  transactions!: Transacciones[];
  accounts!: Account[];
  constructor() { }

  ngOnInit(): void {
    this.transactions= TransaccionesMock;
    this.accounts= CuentatMock; 
    this.getInfo()
  }
  getInfo(){
    this.transactions.forEach((item) =>{  
      var rate=this.accounts?.find(p => p.Id == item.AccountId)?.ConversionRate
      if(item.Amount >0)     
        if(rate){
          this.income = this.income + (item.Amount * rate ); 
        }
              
      else         
        if(rate){
          this.income = this.income + (item.Amount * rate ); 
        }    
      })     
      this.total = this.income + this.expenses;   
    }
}
