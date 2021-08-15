require("dotenv").config();

const config = {
  MAPBOX: {
    URI: process.env.MAPBOX_URI || "MAPBOX URL",
    TOKEN: process.env.MAPBOX_TOKEN || "MAPBOX TOKEN",
    LIMIT: process.env.MAPBOX_LIMIT || "MAPBOX LIMIT",
    LANGUAGE: process.env.MAPBOX_LANGUAGE || "MAPBOX LANGUAGE",
  },
};

module.exports = config;
