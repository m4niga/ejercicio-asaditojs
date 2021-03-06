class Vehiculo {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  contieneY() {
    this.modelo.includes("Y") && console.log(`Vehículo que contiene en el modelo la letra 'Y': ${this.marca} ${this.modelo} ${formatearPrecio(this.precio)}`)
  }

  printData() {
    this.cilindrada
      ? console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: ${formatearPrecio(this.precio)}`)
      : console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${formatearPrecio(this.precio)}`);
  }
}
class Motocicleta extends Vehiculo {
  constructor(marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }
}
class Automovil extends Vehiculo {
  constructor(marca, modelo, precio, puertas) {
    super(marca, modelo, precio);
    this.puertas = puertas;
  }
}

function formatearPrecio(precio) {
  const precioFormateado = new Intl.NumberFormat("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2
  }).format(precio);
  return precioFormateado;
}

function loadData() {
  const data = [
    new Automovil("Peugeot", "206", 200000.0, 4),
    new Motocicleta("Honda", "Titan", 60000.0, "125cc"),
    new Automovil("Peugeot", "208", 250000.0, 5),
    new Motocicleta("Yamaha", "YBR", 80500.5, "160cc")
  ];
  return data;
}

function printAll(data) {
  data.map(item => item.printData());
}

function masCaro(data) {
  let caro = 0, masCaro;
  data.map(item => {
    if (item.precio > caro) {
      caro = item.precio;
      masCaro = item.marca + " " + item.modelo;
    }
  });
  console.log("Vehículo más caro:", masCaro);
}

function masBarato(data) {
  let barato = 0, masBarato;
  data.map(item => {
    if (barato == 0 || item.precio < barato) {
      barato = item.precio;
      masBarato = item.marca + " " + item.modelo;
    }
  });
  console.log("Vehículo más barato:", masBarato);
}

function existeY(data) {
  data.map(item => item.contieneY() );
}

function ordenar(data) {
  let array = [];
  data.map((item) => {
    const obj = {
      marca: item.marca,
      modelo: item.modelo,
      precio: item.precio
    };
    array.push(obj);
    array.sort((a, b) => {return b.precio - a.precio});
  });
  array.map(item => console.log(item.marca + " " + item.modelo));
}

function resultadoFinal(myData) {
  printAll(myData);
  console.log("============================");
  masCaro(myData);
  masBarato(myData);
  existeY(myData);
  console.log("============================");
  console.log("Vehículos ordenados por precio de mayor a menor:");
  ordenar(myData);
}

const data = loadData();
resultadoFinal(data);