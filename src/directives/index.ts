import type { App } from "vue"
import tooltipDirective from "./tooltip"

export default {
  install: (app: App) => {
    app.directive('tooltip', tooltipDirective)
  }
}