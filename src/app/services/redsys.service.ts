import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class RedsysService {
  private endpointTest = 'https://sis-t.redsys.es:25443/sis/realizarPago';
  signatureVersion: string = 'HMAC_SHA256_V1';

  constructor() {}

  enviarDatosRedsys(datosFormulario: any): void {
    console.log(datosFormulario);

    let params: any = {
      DS_MERCHANT_AMOUNT: datosFormulario.DS_MERCHANT_AMOUNT,
      DS_MERCHANT_CURRENCY: datosFormulario.DS_MERCHANT_CURRENCY,
      DS_MERCHANT_MERCHANTCODE: datosFormulario.DS_MERCHANT_MERCHANTCODE,
      DS_MERCHANT_MERCHANTURL: datosFormulario.DS_MERCHANT_MERCHANTURL,
      DS_MERCHANT_ORDER: datosFormulario.DS_MERCHANT_ORDER,
      DS_MERCHANT_TERMINAL: datosFormulario.DS_MERCHANT_TERMINAL,
      DS_MERCHANT_TRANSACTIONTYPE: datosFormulario.DS_MERCHANT_TRANSACTIONTYPE,
    };

    let merchantParameters64 = createMerchantParameters(params);

    let signature = createMerchatSignature(params, merchantParameters64);

    // FORMULARIO TPV
    const form_tpv = document.createElement('form');
    form_tpv.setAttribute('method', 'post');
    form_tpv.setAttribute('target', 'paymentFrame');
    form_tpv.setAttribute('action', this.endpointTest);

    const inputMerchantParameters = document.createElement('input');
    inputMerchantParameters.setAttribute('type', 'hidden');
    inputMerchantParameters.setAttribute('name', 'Ds_MerchantParameters');
    inputMerchantParameters.setAttribute('value', merchantParameters64);
    form_tpv.appendChild(inputMerchantParameters);

    const inputSignature = document.createElement('input');
    inputSignature.setAttribute('type', 'hidden');
    inputSignature.setAttribute('name', 'Ds_Signature');
    inputSignature.setAttribute('value', signature);
    form_tpv.appendChild(inputSignature);

    const inputSignatureVersion = document.createElement('input');
    inputSignatureVersion.setAttribute('type', 'hidden');
    inputSignatureVersion.setAttribute('name', 'Ds_SignatureVersion');
    inputSignatureVersion.setAttribute('value', this.signatureVersion);
    form_tpv.appendChild(inputSignatureVersion);

    document.body.appendChild(form_tpv);
    form_tpv.submit();
  }
}

function createMerchantParameters(params: any) {
  let merchantParameters = CryptoJS.enc.Utf8.parse(JSON.stringify(params));
  let merchantBase64 = merchantParameters.toString(CryptoJS.enc.Base64);

  return merchantBase64;
}

function createMerchatSignature(params: any, merchantBase64: any) {
  const claveComercio = 'sq7HjrUOBfKmC576ILgskD5srU870gJ7';

  // Decode key
  let decodeKey = CryptoJS.enc.Base64.parse(claveComercio);

  // Generate transaction key
  let iv = CryptoJS.enc.Hex.parse('0000000000000000');
  let cipher = CryptoJS.TripleDES.encrypt(params.DS_MERCHANT_ORDER, decodeKey, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  });

  // Sign
  let signature = CryptoJS.HmacSHA256(merchantBase64, cipher.ciphertext);
  let signatureBase64 = signature.toString(CryptoJS.enc.Base64);

  return signatureBase64;
}
