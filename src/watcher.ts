import Dep, { pushTarget, popTarget } from './dep'
import { watchCallback } from './watch'

interface WatcherOptions {
  computed?: boolean
  watch?: boolean
  callback?: watchCallback
}

export default class Watcher {
  getter: Function
  computed: boolean
  value: any
  watch?: boolean
  callback?: watchCallback
  dep?: Dep

  constructor(getter: Function, options: WatcherOptions = {}) {
    const { 
      computed = false, 
      watch = false, 
      callback 
    } = options
    
    this.getter = getter
    this.computed = computed
    this.watch = watch
    this.callback = callback
    this.value = undefined

    if (computed) {
      this.dep = new Dep()
    } else {
      this.get()
    }
  }

  get() {
    pushTarget(this)
    this.value = this.getter()
    popTarget()
    return this.value
  }

  // 仅为computed使用
  depend() {
    this.dep!.depend()
  }

  update() {
    if (this.computed) {
      this.get()
      this.dep!.notify()
    } else if (this.watch) {
      const oldValue = this.value
      this.get()
      if (this.callback) {
        this.callback(this.value, oldValue)
      }
    } else {
      this.get()
    }
  }
}
