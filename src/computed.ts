import Watcher from './watcher'

type computedRef = {
  value?: any
}
export default function computed(getter: Function): computedRef {
  let def = {}
  const computedWatcher = new Watcher(getter, { computed: true })
  Object.defineProperty(def, 'value', {
    get() {
      computedWatcher.depend()
      return computedWatcher.get()
    }
  })
  return def
}
