import { computed, getCurrentInstance } from "vue";

import type { WritableComputedRef } from "vue";

/**
 * composable que sirve para crear variables que permitan jugar con v-model
 * @param props variable "props" que resulta de usar defineProps
 * @param valueName el nombre de la propiedad que se usará par ael v-model, por  defecto es modelValue
 * @returns {WritableComputedRef<any>}
 */
const useVModel = <T>(valueName = "modelValue") => {
  const currentInstance = getCurrentInstance();
  const emit = currentInstance?.emit ?? (() => {});
  const props = currentInstance?.props ?? {}

  const value = computed<T>({
    get() {
      return <T>props[valueName]
    },
    set(value) {
      const emitName = `update:${valueName}`
      emit(emitName, value)
    },
  });
  return value
};

export default useVModel
