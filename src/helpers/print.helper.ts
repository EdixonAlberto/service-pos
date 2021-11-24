import { exec } from 'child_process'

async function print() {
  const COMMNAD =
    'mkdir folder-test && touch folder-test/note.txt && echo este es un texto de prueba >> folder-test/note.txt'

  return new Promise((resolve, reject) => {
    exec(COMMNAD, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        reject(error)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }

      console.log(`stdout: ${stdout}`)

      resolve(stderr)
    })
  })
}

export = { print }
