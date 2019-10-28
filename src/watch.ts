import Watcher from './watcher'

export interface watchCallback {
  (newValue: any, oldValue: any): any
}

export default function watch(getter: Function, callback: watchCallback) {
  new Watcher(getter, { watch: true, callback })
}
