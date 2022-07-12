/* import type { DefineComponent } from "vue"

//alerts
import { default as PAlert } from "./alerts/PAlert.vue"

//avatars
import { default as PAvatar } from "./avatars/PAvatar.vue"

// buttons
import { default as PButton } from "./buttons/PButton.vue"

// modals
// import { default as PModal } from "./modals/PModal.vue";

// navs
import { default as PNav } from "./navs/PNav.vue"

interface Components {
  [key: string]: DefineComponent<{}, {}, any>
}

export const components: any = {
  PButton,
  PNav,
  PAlert,
  PAvatar,
}
 */

//alerts
export { default as PAlert } from "./alerts/PAlert.vue"

//avatars
export { default as PAvatar } from "./avatars/PAvatar.vue"

// cards
export { default as PCard } from "./cards/PCard.vue"

//breadcrumbs
export { default as PBreadcrumb} from "./breadcrumbs/PBreadcrumb.vue"

// buttons
export { default as PButton } from "./buttons/PButton.vue"

// navs
export { default as PNav } from "./navs/PNav.vue"

// ratings
export { default as PStars } from "./ratings/PStars.vue"

// tags
export { default as PTag } from "./tags/Tag.vue"