require("dotenv").config();

const config = {
  MAPBOX: {
    URI:
      process.env.MAPBOX_URI ||
      "https://api.mapbox.com/geocoding/v5/mapbox.places",
    TOKEN: process.env.MAPBOX_TOKEN || "pk.token",
    LIMIT: process.env.MAPBOX_LIMIT || "5",
    LANGUAGE: process.env.MAPBOX_LANGUAGE || "es",
  },
  OPEN_WEATHER: {
    API_KEY: process.env.OPEN_WEATHER_API_KEY || "2dfo.api",
    URI:
      process.env.OPEN_WEATHER_URI ||
      "https://api.openweathermap.org/data/2.5/weather",
    UNITS: process.env.OPEN_WEATHER_UNITS || "metric",
    LANGUAGE: process.env.OPEN_WEATHER_LANGUAGE || "es",
  },
};

module.exports = config;
