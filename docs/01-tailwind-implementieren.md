# tailwind installieren
  npm install nativewind
  npm install --save-dev tailwindcss
  npx tailwindcss init

# configuration

 👉touch metro.config.js

    const { getDefaultConfig } = require("expo/metro-config");
    const { withNativeWind } = require("nativewind/metro");
    
    const config = getDefaultConfig(__dirname);
    
    module.exports = withNativeWind(config, {
      input: "./global.css",
    });

  👉 babel.config.js
    npx expo customize babel.config.js
    
    


♦️install
  npm i