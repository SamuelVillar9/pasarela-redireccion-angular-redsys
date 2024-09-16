import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedsysService } from '../services/redsys.service';

@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.component.html',
  styleUrls: ['./formulario-pago.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class FormularioPagoComponent implements OnInit {
  euros: string = '';
  cents: string = '';

  DS_MERCHANT_AMOUNT: string = '';
  DS_MERCHANT_CURRENCY: string = '';
  DS_MERCHANT_MERCHANTCODE: string = '';
  DS_MERCHANT_MERCHANTURL: string = ''; //La notificación se debe de recoger desde el lado del servidor por POST
  DS_MERCHANT_ORDER: string = generarNumeroPedido();
  DS_MERCHANT_TERMINAL: string = '';
  DS_MERCHANT_TRANSACTIONTYPE: string = '';
  DS_MERCHANT_URLOK: string = '';
  DS_MERCHANT_URLKO: string = '';

  constructor(private readonly redsysService: RedsysService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Combinar euros y céntimos en DS_MERCHANT_AMOUNT
    const eurosAsNumber = parseFloat(this.euros) || 0;
    const centsAsNumber = parseFloat(this.cents) || 0;
    const totalAmount = eurosAsNumber * 100 + centsAsNumber;
    this.DS_MERCHANT_AMOUNT = totalAmount.toString();

    // Enviar datos a un servicio o API
    const formulario = {
      DS_MERCHANT_AMOUNT: this.DS_MERCHANT_AMOUNT,
      DS_MERCHANT_CURRENCY: this.DS_MERCHANT_CURRENCY,
      DS_MERCHANT_MERCHANTCODE: this.DS_MERCHANT_MERCHANTCODE,
      DS_MERCHANT_MERCHANTURL: this.DS_MERCHANT_MERCHANTURL,
      DS_MERCHANT_ORDER: this.DS_MERCHANT_ORDER,
      DS_MERCHANT_TERMINAL: this.DS_MERCHANT_TERMINAL,
      DS_MERCHANT_TRANSACTIONTYPE: this.DS_MERCHANT_TRANSACTIONTYPE,
      DS_MERCHANT_URLOK: this.DS_MERCHANT_URLOK,
      DS_MERCHANT_URLKO: this.DS_MERCHANT_URLKO,
    };

    this.redsysService.enviarDatosRedsys(formulario);
  }
}

function generarNumeroPedido() {
  // Generar los primeros 4 caracteres numéricos
  let numeros = Math.floor(1000 + Math.random() * 9000).toString();

  // Generar los siguientes 8 caracteres alfanuméricos
  let caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let alfanumericos = "";
  for (let i = 0; i < 8; i++) {
    alfanumericos += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }

  // Combinar ambos para obtener el número de pedido
  return numeros + alfanumericos;
}
