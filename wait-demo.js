'use strict'

let wait = time => new Promise((resolve, reject) => {
  setTimeout(resolve, time)
})
async function series () {
  let start = new Date().valueOf()
  await wait(500)
  await wait(500)
  let end = new Date().valueOf()
  console.log(`series: ${end - start}`)
}
async function parallel () {
  let start = new Date().valueOf()
  const wait1 = wait(500)
  const wait2 = wait(500)
  await wait1
  await wait2
  let end = new Date().valueOf()
  console.log(`parallel: ${end - start}`)
}

series()
parallel()

// => parallel: 500
// => series: 1000
