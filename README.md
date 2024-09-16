
# PASARELA DE PAGO DE REDSYS POR REDIRECCIÓN - ANGULAR

Pasarela de pago por redirección desarrollada con ANGULAR.
Este desarrollo se trata de un ejemplo rápido y sencillo para ver el funcionamiento de la pasarela de pago de Redsys con dicha tecnología.

## Instalación

Descargar código del proyecto, entrar en la carpeta y ejecutar:

```
    cd pasarela-redireccion-angular
    npm install
    ng serve
```

    
## Variables Necesarias

Para poder utilizar este proyecto, se deberán de configurar las variables en el servicio llamado 'redsys.service.ts'. Este archivo está ubicado en la ruta 'src/app/services/redsys.service.ts'. También se puede modificar el formulario de pago en el archivo 'formulario-pago.component.ts', el cuál está ubicado en la ruta 'src/app/formulario-pago/formulario-pago.component.ts'

Las siguientes variables deberán de ser configuradas con los datos propios del comercio:
`DS_MERCHANT_MERCHANTCODE`
`DS_MERCHANT_TERMINAL`
`claveComercio`

Las demás variables, pueden ser customizadas por el comercio, como puede ser la variable `DS_MERCHANT_AMOUNT`, la cuál enviará a la pasarela de pago la cantidad a cobrar. El formato debe de seguir el siguiente patrón:
Por ejemplo, si se desea cobrar '1€' en la pasarela de pago, en dicha variable se debe de enviar el valor `100`; si se quisiera enviar '36,72€', se deberá de enviar `3672`. El formato `36.72` no sería un valor válido.

En el parámetro `DS_MERCHANT_ORDER`, se debe de incluir un número de pedido de máximo 12 caracteres alfanuméricos (es recomendable poner los 4 primer dígitos numericos). En este ejemplo se ha utilizado la función `generarNumeroPedido()`, la cuál devuelve un número generado aleatoriamente, teniendo en cuenta siempre que los cuatro primeros caracteres deben de ser letras y teniendo un número máximo de 12 caracteres en total.

En las variables de `DS_MERCHANT_URLOK` y `DS_MERCHANT_URLKO`, se podrá configurar la URL a la que se mandará al cliente una vez ha finalizado el pago. A la 'URLOK' si la operación ha ido correctamente y a la 'URLKO' si la operación ha tenido algún error.

En la variable `DS_MERCHANT_MERCHANTUL` se podrá configurar la URL no visible, tanto para comercio como para cliente en el flujo, en la que se gestionará la notificación online de la operación. Recomendamos configurar esta URL para poder gestionar los datos de la operación y tratar y comprobar que la operación ha ido correctamente. También sirve como url en la que los comercios gestionan su backoffice y pueden almacenar datos de las operaciones en su BBDD. 



## Documentación de la integración

[Pagos Online Redsys - Redirección](https://pagosonline.redsys.es/conexion-redireccion.html)

[Parámetros de entrada y salida](https://pagosonline.redsys.es/parametros-entrada-salida.html)

[Códigos de respuesta](https://pagosonline.redsys.es/codigosRespuesta.html)

[Datos para realizar pruebas](https://pagosonline.redsys.es/entornosPruebas.html)
## Autor

- [SamuelVillar9](https://github.com/SamuelVillar9)


## Licencia

MIT License

Copyright (c) [2024] [Samuel Villar Gonzalez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

######################################################################

Se concede permiso, sin cargo, a cualquier persona que obtenga una copia de este software y los archivos de documentación asociados (el “Software”), para tratar en el Software sin restricciones, incluyendo sin limitación los derechos de usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del Software, y permitir a las personas a quienes se les proporcione el Software hacerlo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o porciones sustanciales del Software.

EL SOFTWARE SE PROPORCIONA “TAL CUAL”, SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A LAS GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES POR NINGUNA RECLAMACIÓN, DAÑOS U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRO TIPO, QUE SURJA DE, FUERA O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTROS TRATOS EN EL SOFTWARE.
