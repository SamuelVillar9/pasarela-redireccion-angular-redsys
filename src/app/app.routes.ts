import { Routes } from '@angular/router';
import { FormularioPagoComponent } from './formulario-pago/formulario-pago.component';
import { ReciboComponent } from './recibo/recibo.component';

export const routes: Routes = [
    {
        path: '', component: FormularioPagoComponent
    },
    {
        path: 'recibo', component: ReciboComponent
    }
];
