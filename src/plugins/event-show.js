import Vue from 'vue'

const show = new Vue()

export default function install(Vue) {
	Object.defineProperties(Vue.prototype, {
    $show: {
      get() {
        return show
      }
    }
  })
}