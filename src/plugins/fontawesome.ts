import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import type { App } from "vue"


export default {
  install: (app: App) => {
    app.component("Fa", FontAwesomeIcon);
  }
}