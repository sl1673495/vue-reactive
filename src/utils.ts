export function isObject(val: any): val is object {
  return val !== null && typeof val === 'object'
}
