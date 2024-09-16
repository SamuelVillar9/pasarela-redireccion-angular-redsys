import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioPagoComponent } from './formulario-pago/formulario-pago.component';

@NgModule({
  imports: [
    FormularioPagoComponent,
    FormsModule,
  ],
  declarations:[
      AppComponent
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
