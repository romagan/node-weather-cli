export const getArgs = (args) => {
  // const res = args.slice(2)
  const [_executer, _file, ...rest] = args
  const res = {}

  rest.forEach((item, i, arr) => {
    if (item.charAt(0) === `-`) {

      const nextItem = arr[i + 1]
      const curItem = item.substring(1)

      if (i === arr.length - 1) {
        res[curItem] = true
      } else if (nextItem.charAt(0) !== `-`) {
        res[curItem] = nextItem
      } else {
        res[curItem] = true
      }
    }
  })

  return res
}
