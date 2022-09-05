import { describe,it, expect } from "vitest"
import { shallowMount, config } from "@vue/test-utils"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import PButton from "@/components/buttons/PButton.vue"
// const PButton = defineComponent(()=> import("../../components/buttons/PButton.vue"))

const createComponent = (data: any = {}) => shallowMount(PButton, data)

config.global.components = {
  PButton,
  Fa: FontAwesomeIcon,
}
// config.global.plugins = [ i18n ]

describe("PoliButton",()=>{
  
  it("should render primary button",() => {
    const wrapper = createComponent({
      props: {
        type: "primary"
      }
    })
    expect(wrapper.classes()).toContain("btn-primary")
  })
})