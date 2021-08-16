const axios = require("axios");
const config = require("../config/config");
class Busquedas {
  /* historial = ["Tegucigalpa", "Madrid"]; */
  constructor() {}
  async ciudad(lugar = "") {
    try {
      // Configurar axios
      const instance = axios.create({
        baseURL: `${config.MAPBOX.URI}/${lugar}.json`,
        params: {
          access_token: config.MAPBOX.TOKEN,
          limit: config.MAPBOX.LIMIT,
          language: config.MAPBOX.LANGUAGE,
        },
      });
      // Petición http
      const res = await instance.get();
      return res.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }));
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async climaLugar(lat, lon) {
    try {
      // Configurar axios
      const instance = axios.create({
        baseURL: `${config.OPEN_WEATHER.URI}`,
        params: {
          lat,
          lon,
          appid: config.OPEN_WEATHER.API_KEY,
          units: config.OPEN_WEATHER.UNITS,
          lang: config.OPEN_WEATHER.LANGUAGE,
        },
      });
      // Petición http
      const res = await instance.get();
      const { weather, main } = res.data;
      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
module.exports = Busquedas;
