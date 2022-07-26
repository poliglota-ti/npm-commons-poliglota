import type { TooltipDirectiveBinding } from "@/interfaces/ITooltip"

const placements = ['top', 'bottom', 'left', 'right']
const removeTooltip = (el: HTMLElement) => {
  el.removeAttribute("data-bs-toggle")
  el.removeAttribute("data-bs-placement")
  el.removeAttribute("data-bs-original-title")
}
const setTooltip = (el: HTMLElement, placement: string, text: string) => {
  el.setAttribute("data-bs-toggle", "tooltip")
  el.setAttribute("data-bs-placement", placement)
  el.setAttribute("data-bs-original-title", text)
}

const tooltipDirective = (el: HTMLElement, binding: TooltipDirectiveBinding): void => {
  const modifiers = Object.keys(binding.modifiers)
  const placement = modifiers.length > 0 && placements.includes(modifiers[0]) ? modifiers[0] : 'bottom'
  
  if(typeof binding.value === 'object' && !binding.value?.show){
    removeTooltip(el)
  } else {
    const text = typeof binding.value === 'string' ? binding.value : binding.value.text
    setTooltip(el, placement, text)
  }
}

export default tooltipDirective