# Service POS

Micro servicio para controlar y monitorear el POS y la impresora del totem digital.

## Diagrama de Diseño

![./docs/](./docs/integration-pos.drawio.png)

## Endpoints Server HTTP

| Metodo | Endpoint          | Body        | Descripción                                  |
| ------ | ----------------- | ----------- | -------------------------------------------- |
| GET    | /pos/             | TODO:       | Obtener el estado del servicio               |
| POST   | /pos/newSale      | TSale[body] | Ejecutar un nuevo proceso de venta en el POS |
| POST   | /pos/printVoucher | TODO:       | Ejecutar una impresion desde la impresara    |

> TODO: falta por crear endpoints

Los datos a enviar en cada petición estan documentados en los siguientes tipos de typescript:
[serverHTTP.d.ts](./src/@types/serverHTTP.d.ts)

## Endpoints Server Web Socket

> TODO: falta por crear endpoints

## Environments

Para usar variables de entorno en el proyecto debe crear un archivo `development.env` en la carpeta `/env`, para esto
puede ejecutar el siguiente comando y usar la plantilla de variables proporcionada:

```sh
cp env/.env.template env/development.env
```

Nota: crear `production.env` para usar en producción.

## Recursos

- SDK Transbank para Nodejs: https://github.com/TransbankDevelopers/transbank-pos-sdk-nodejs
- Documentación Transbank: https://www.transbankdevelopers.cl/referencia/posintegrado?l=js#mensaje-de-venta
