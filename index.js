'use strict'

const getName = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Niko Bellic')
  }, 4000)
})

async function main () {
  let name = await getName()
  console.log(name)
}

main() // => console `name` after 4 seconds
