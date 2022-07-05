import type { App, DefineComponent } from "vue";
// import { components } from "./components";
import { PButton, PAlert, PAvatar, PNav, PCard, PStars, PTag } from "./components";

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
    // Object.keys(components).forEach((key) => {
    //   const component = components[key]
    //   app.component(key,component)
    // })
    // install components
    app.component("PButton", PButton);
    app.component("PAlert", PAlert);
    app.component("PAvatar", PAvatar);
    app.component("PNav", PNav);
    app.component("PCard", PCard);
    app.component("PStars", PStars);
    app.component("PTag",PTag);

    // options provided by plugin installation
    app.provide("logoImg", options.logoImg)
  },
};

// exportamos composables
export { useVModel };

// exportamos componentes uno por uno
export { PButton, PAlert, PAvatar, PNav, PCard, PStars, PTag };
// export const { PButton } = components