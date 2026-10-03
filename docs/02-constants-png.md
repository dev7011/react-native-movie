♦️ configuration, damit require nicht mehr nötig
  👉 types
      |-- images.d.ts
          declare module "*.png" {
            const value: number;
            export default value;
          }
  👉 constants
       icons.ts
       images.ts   

♦️use
  import icons from "@/src/constants/icons"
  <Image source = {icons.home}  
