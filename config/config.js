require("dotenv").config();

const config = {
  MAPBOX: {
    URI: process.env.MAPBOX_URI || "MAPBOX URI",
    TOKEN: process.env.MAPBOX_TOKEN || "MAPBOX TOKEN",
    LIMIT: process.env.MAPBOX_LIMIT || "MAPBOX LIMIT",
    LANGUAGE: process.env.MAPBOX_LANGUAGE || "MAPBOX LANGUAGE",
  },
  OPEN_WEATHER: {
    API_KEY: process.env.OPEN_WEATHER_API_KEY || "OPEN_WEATHER API_KEY",
    URI: process.env.OPEN_WEATHER_URI || "OPEN_WEATHER URI",
    UNITS: process.env.OPEN_WEATHER_UNITS || "OPEN_WEATHER UNITS",
    LANGUAGE: process.env.OPEN_WEATHER_LANGUAGE || "OPEN_WEATHER LANGUAGE",
  },
};

module.exports = config;
