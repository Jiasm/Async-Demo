'use strict'

const fs = require('fs')

const writeFile = (fileName, data) => new Promise((resolve, reject) => {
  fs.writeFile(fileName, data, (err, data) => err ? reject(err) : resolve(data))
})

async function writeTextToFile (text) {
  try {
    await writeFile('./test.md', {})
  } catch (e) {
    console.error(e)
  }
}

writeTextToFile('Hello Niko')
