import Dep from './dep'
import { isObject } from './utils'

// 将对象定义为响应式
export default function reactive<T extends object>(data: T): T{
  if (isObject(data)) {
    Object.keys(data).forEach(key => {
      defineReactive(data, key)
    })
  }
  return data
}

function defineReactive(data: object, key: string): void {
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

  reactive(val)
}
