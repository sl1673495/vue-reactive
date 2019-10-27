import Watcher from './watcher'

export default function computed(getter) {
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
