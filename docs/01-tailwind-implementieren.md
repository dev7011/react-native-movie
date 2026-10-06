# tailwind installieren
  npm install nativewind
  npm install --save-dev tailwindcss
  npx tailwindcss init

# configuration
 👉 global.css
`    @tailwind base;
     @tailwind components;
     @tailwind utilities;`

 👉touch metro.config.js
    const { getDefaultConfig } = require("expo/metro-config");
    const { withNativeWind } = require("nativewind/metro");
    
    const config = getDefaultConfig(__dirname);
    
    module.exports = withNativeWind(config, {
      input: "./global.css",  ♦️ TO_CHANGE
    });

  👉 babel.config.js
    npx expo customize babel.config.js

♦️install
  npm i
  npx expo start -c