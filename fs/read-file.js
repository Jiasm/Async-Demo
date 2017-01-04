const fs = require('fs')

const readFile = fileName => new Promise((resolve, reject) => {
  fs.readFile(fileName, (err, data) => {
    err ? reject(err) : resolve(data)
  })
})

async function getText () {
  let text = await readFile('./hello.md')
  console.log(text.toString())
}

getText()
