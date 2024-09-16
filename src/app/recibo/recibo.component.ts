import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class ReciboComponent implements OnInit {
  merchantParametersResponse: string = '';
  signatureResponse: string = '';
  objetoMerchant: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.merchantParametersResponse = params['Ds_MerchantParameters'];
      this.signatureResponse = params['Ds_Signature'];

      let parametroDecodificado = atob(this.merchantParametersResponse);
      this.objetoMerchant = JSON.parse(parametroDecodificado);
      console.log(this.objetoMerchant);

      // Decodifica la fecha y la hora
      this.objetoMerchant.Ds_Date = decodeURIComponent(
        this.objetoMerchant.Ds_Date
      );
      this.objetoMerchant.Ds_Hour = decodeURIComponent(
        this.objetoMerchant.Ds_Hour
      );

      // Convierte el importe a euros
      this.objetoMerchant.Ds_Amount = (
        this.objetoMerchant.Ds_Amount / 100
      ).toFixed(2);
    });
  }
}
