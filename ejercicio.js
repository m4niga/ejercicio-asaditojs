
      class Vehiculo {
        constructor(marca, modelo, precio) {
          this.marca = marca;
          this.modelo = modelo;
          this.precio = precio;
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
      function loadData() {
        return (data = [
            new Automovil("Peugeot", "206", 200000.0, 4),
            new Motocicleta("Honda", "Titan", 60000.0, "125cc"),
            new Automovil("Peugeot", "208", 250000.0, 5),
            new Motocicleta("Yamaha", "YBR", 80500.5, "160cc")
          ])
      }

      const data = loadData();

      function printAll(data) {
        data.map((item, index) => {
          var element = "";
          for (const property in item) {
            element += `${property}: ${item[property]} // `;
          }
          console.log(element);
        });
      }

      function masCaro(data) {
        var caro = 0;
        data.map((item, index) => {
          if (item.precio > caro) {
            caro = item.precio;
            masCaro = item.marca + " " + item.modelo;
          }
        });
        console.log("Vehículo mas caro:", masCaro);
      }

      function masBarato(data) {
        var barato = 0;
        data.map((item, index) => {
          if (barato == 0 || item.precio < barato) {
            barato = item.precio;
            masBarato = item.marca + " " + item.modelo;
          }
        });
        console.log("Vehículo mas barato:", masBarato);
      }

      function contieneY(data) {
        data.map((item, index) => {
          item.modelo.includes("Y") &&
            console.log(
              'Vehículo que contiene en el modelo la letra "Y":',
              `${item.marca} ${item.modelo} $${item.precio}`
            );
        });
      }

      function ordenar(data) {

        const array = [];

        data.map((item) => {
          const obj = {
            marca: item.marca,
            modelo: item.modelo,
            precio: item.precio
          };
          array.push(obj);

          array.sort((a, b) => {
            return b.precio - a.precio;
          });
        });
        
        const ordenado = array;

        ordenado.map((item) => {
          console.log(item.marca + " " + item.modelo + " " + "$" + item.precio);
        });
      }

      function resultadoFinal(myData) {
        printAll(myData);
        console.log("============================");
        masCaro(myData);
        masBarato(myData);
        contieneY(myData);
        console.log("============================");
        console.log("Vehiculos ordenados por precio de mayor a menor");
        ordenar(myData);
      }

      resultadoFinal(data);
   