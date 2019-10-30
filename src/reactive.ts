import Dep from './dep'
import { isObject } from './utils'

// 将对象定义为响应式
export default function reactive<T extends object>(data: T): T{
  if (isObject(data)) {
    Object.keys(data).forEach(key => {
      defineReactive(data, key as keyof T)
    })
  }
  return data
}

function defineReactive<T extends object, K extends keyof T>(data: T, key: K): void {
  let val = data[key]
  const dep = new Dep()

  Object.defineProperty(data, key, {
    get() {
      dep.depend()
      return val
    },
    set(newVal) {
      val = newVal
      dep.notify()
    }
  })

  if (isObject(val)) {
    reactive(val)
  }
}
