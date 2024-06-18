function saludo (){
    alert('¡Hola ' + nombre + ', Bienvenido a Neil!')
}

function despedida (){
    alert( nombre + ', ¡Que tenga un excelente dia!')
}
let nombre =prompt('Ingrese su Nombre')
saludo ()




let producto = '';
let cantidad = 0;
let precio = 0;
let seguirComprando = false;
let precioFinal = 0;
let productosFinal = 0;


do {

  producto = prompt( nombre + ' ¿Queres comprar Zapatillas o Indumentaria?').toLowerCase();

  switch (producto) {
    case 'zapatillas':
    let zapatillasModelo = prompt('¿Que modelo de zapatilla buscas?\n 1: Zapatos?\n 2: Ojotas?')
        if (zapatillasModelo == 1){
            alert('Elegiste Zapatos, valen $20000');
            precio = 20000
        } else if (zapatillasModelo == 2){
            alert('Elegiste Ojotas, valen $15000');
            precio = 15000
        } else {
            alert('¡No existe ese modelo!');
        }
        break

    case 'indumentaria':
    let indumentariaModelo = prompt('¿Que modelo de Indumentaria buscas?\n 1: Pantalon?\n 2: Campera?')
      if (indumentariaModelo == 1){
            alert('Elegiste Pantalon, vale $5000');
            precio = 5000
        } else if (indumentariaModelo == 2){
            alert('Elegiste Campera, vale $10000');
            precio = 10000
        } else {
            alert('¡No existe ese modelo!');
        }
        break
     default:
        alert('¡No existe el producto!');
  }

    precioFinal += precio
    // productosFinal += producto
  
  seguirComprando = confirm('¿Quieres comprar algo mas?')

}while (seguirComprando);
  

alert('El precio total es de ' + precioFinal)

despedida ()



