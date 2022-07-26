export interface BindingObject {
  text: string,
  show: boolean,
}
export interface TooltipDirectiveBinding {
  value: string | BindingObject

  modifiers: {
    [key: string]: boolean
  }
}