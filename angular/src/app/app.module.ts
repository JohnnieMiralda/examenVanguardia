import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ResumenCuentasComponent } from './resumen-cuentas/resumen-cuentas.component';
import { ResumenTransaccionesComponent } from './resumen-transacciones/resumen-transacciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResumenComponent,
    ResumenCuentasComponent,
    ResumenTransaccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
