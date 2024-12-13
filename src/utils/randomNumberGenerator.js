export default function generarNumeroAleatorio() {
    let numero;
    do {
      numero = Math.floor(Math.random() * 81) - 40;
    } while (numero === 0);
    return numero;
  }
  