const {
  leerInput,
  inquirerMenu,
  pause,
  listarLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
const main = async () => {
  let opt;
  const busquedas = new Busquedas();
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1: {
        // Mostrar mensaje
        const termino = await leerInput("Ciudad: ");
        // Buscar lugares
        const lugares = await busquedas.ciudad(termino);
        // Seleccionar lugar
        const id = await listarLugares(lugares);
        const lugarSel = lugares.find((l) => l.id === id);
        // Clima

        // Mostrar información
        console.log("\nInformación de la ciudad".green);
        console.log("Ciudad:", lugarSel.nombre);
        console.log("Lat:", lugarSel.lat);
        console.log("Lng:", lugarSel.lng);
        console.log("Temperatura:", lugarSel.lat);
        console.log("Mínima:", lugarSel.lat);
        console.log("Máxima:", lugarSel.lat);
        break;
      }
      default:
        break;
    }
    if (opt !== 0) await pause();
  } while (opt !== 0);
};

main();
