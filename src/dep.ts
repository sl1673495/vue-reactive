import Watcher from './watcher'

export default class Dep {
  static target: Watcher | null | undefined

  deps: Set<Watcher>

  constructor() {
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

const targetStack: Watcher[] = []

export function pushTarget(currentTarget: Watcher) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = currentTarget
}

export function popTarget() {
  Dep.target = targetStack.pop()
}
