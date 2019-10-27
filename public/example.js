import { reactive, computed, watch, Watcher } from '../src'

const data = reactive({
  msg: 'Hello World',
  number: 1
})

const numberPlusOne = computed(() => data.number + 1)

new Watcher(() => {
  document.getElementById('app').innerHTML = `
    <p>请在控制台输入data，分别改变data.msg尝试效果</p>
    <p>data.msg被watch了，可以打印出新旧值的变化</p>
    msg is ${data.msg} <br>
  `
})

new Watcher(() => {
  document.getElementById('app2').innerHTML = `
  <p>请在控制台改变data.number尝试computed效果</p>
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
