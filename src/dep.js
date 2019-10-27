export default class Dep {
  constructor(key) {
    this.key = key
    this.deps = new Set()
  }

  depend() {
    if (Dep.target) {
      this.deps.add(Dep.target)
    }
  }

  notify() {
    this.deps.forEach(watcher => watcher.update())
  }
}

Dep.target = null
const targetStack = []

export function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

export function popTarget() {
  Dep.target = targetStack.pop()
}
