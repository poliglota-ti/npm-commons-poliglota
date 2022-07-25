import type { App, DefineComponent } from "vue";
import type { DashboardRoutesName } from "@/interfaces/IPlugin"
// import { components } from "./components";
import { PButton, PAlert, PAvatar, PNav, PCard, PStars, PTag, PBreadcrumb, PCheckbox } from "./components";

// composables
import { useVModel } from "./composables";

interface PluginOptions {
  logoImg?:string | null
  dashboardRoutesName?: DashboardRoutesName
}

export default {
  install: (
    app: App,
    options: PluginOptions = {
      logoImg: null
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
    app.component("PBreadcrumb",PBreadcrumb);

    // options provided by plugin installation
    app.provide("logoImg", options.logoImg)
    app.provide("dashboardRoutesName",options.dashboardRoutesName)
  },
};

// exportamos composables
export { useVModel };

// exportamos componentes uno por uno
export { PButton, PAlert, PAvatar, PNav, PCard, PStars, PTag, PBreadcrumb, PCheckbox };
// export const { PButton } = components