import { exec } from 'child_process'

export async function print(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        reject(error)
        return
      }

      if (stderr) {
        console.log(`stderr: ${stderr}`)
        reject(stderr)
      }

      resolve(stdout)
    })
  })
}
