# vue-reactive
用最简短的方式完成符合Vue源码结构的响应式流程。

## 预览地址
https://sl1673495.github.io/vue-reactive/.
请在控制台打印出data后尽情玩耍。

## 用法
```js
import { reactive, computed, watch, Watcher } from '../src'

const data = reactive({
  msg: 'Hello World',
  number: 1
})

const numberPlusOne = computed(() => data.number + 1)

new Watcher(() => {
  document.getElementById('app').innerHTML = `
    <p>请在控制台输入data，分别改变data.msg、data.number尝试效果</p>
    <p>data.msg被watch了，可以打印出新旧值的变化</p>
    msg is ${data.msg} <br>
    number is ${data.number} <br>
    computed: 1 + number 是 ${numberPlusOne.value}
  `
})

watch(
  () => data.msg,
  (old, newVal) => {
    console.log('old: ', old)
    console.log('newVal: ', newVal)
  }
)

window.data = data
```
