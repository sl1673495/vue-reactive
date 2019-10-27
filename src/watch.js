import Watcher from './watcher'

export default function watch(getter, callback) {
  new Watcher(getter, { watch: true, callback })
}
