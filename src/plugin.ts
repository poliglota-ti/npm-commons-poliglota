import type { App, DefineComponent } from "vue";
import { components } from "./components";

// composables
import { useVModel } from "./composables";

interface PluginOptions {
  logoImg?:string | null
}

export default {
  install: (
    app: App,
    options: PluginOptions = {
      logoImg: null,
    }
  ) => {
    Object.keys(components).forEach((key) => {
      const component = components[key]
      app.component(key,component)
    })
    
    // options provided by plugin installation
    app.provide("logoImg", options.logoImg)
  },
};

// exportamos composables
export { useVModel };

// exportamos componentes uno por uno
export const { PButton } = components