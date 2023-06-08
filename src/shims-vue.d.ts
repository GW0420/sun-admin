import { ComponentCustomProperties } from "@/vue"
import { Store } from "vuex"

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    orbital
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module "vue" {
//   interface ComponentCustomProperties {
//     $store: any
//   }
// }

// declare let $store: any
