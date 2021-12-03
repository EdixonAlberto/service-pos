# Notas

## TODO

- Investigar comandos de terminal para ejecutar la accion de impresion y utilizarlos desde un script con Nodejs

- Crear un microservice con Nodejs y usar el SDK de la impresora termica para prosesar la venta y exponer por medio
  de un servidor en la terminal estos comandos

- Crear servicio de monitoreo de estado para el POS desde el cliente y guardar por ahora localmente el log generado

## Comandos Impresora

- lpstat -a | awk '{print $1}' **lista impresoras conectadas**
- lpq -P "NAME_PRINTER" **muestra que la impresora no tiene ningún trabajo de impresión y que puede seguir adelante e imprimir sus documentos.**
