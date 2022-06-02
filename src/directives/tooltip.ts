import type { TooltipDirectiveBinding } from "@/interfaces/Tooltip"

const placements = ['top', 'bottom', 'left', 'right']

const tooltipDirective = (el: HTMLElement, binding: TooltipDirectiveBinding): void => {
  const modifiers = Object.keys(binding.modifiers)
  const placement = modifiers.length > 0 && placements.includes(modifiers[0]) ? modifiers[0] : 'bottom'
  const text = binding.value ?? ""

  el.setAttribute("data-bs-toggle", "tooltip")
  el.setAttribute("data-bs-placement", placement)
  el.setAttribute("data-bs-original-title", text)
}

export default tooltipDirective