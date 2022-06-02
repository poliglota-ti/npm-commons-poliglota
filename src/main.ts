import { createApp } from "vue"
import App from "./App.vue"

import "bootstrap"
import "./assets/scss/app.scss" // Main Bootstrap Override CSS

import router from "./router"
import fontawesome from "@/plugins/fontawesome"
import directives from "./directives"

const app = createApp(App)

app.use(router)
app.use(fontawesome)
app.use(directives)

app.mount("#app")
