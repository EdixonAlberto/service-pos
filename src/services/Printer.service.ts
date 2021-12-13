import { exec } from 'child_process'

class PrinterService {
  constructor(private printer: string = '') {}

  public async connect(printerName: string): Promise<string | Error> {
    try {
      const result = await this.runCommand("lpstat -a | awk '{print $1}'")
      console.log(result)
      const printers = result.split('\n')

      const printer = printerName ? printers.find((printer) => printer === printerName) : printers[0]

      if (!printer) return new Error('Printer not found')
      else {
        this.printer = printer
        return printer
      }
    } catch (error) {
      return error as string | Error
    }
  }

  public async status(): Promise<any> {
    const result = await this.runCommand(`lpq -P ${this.printer}`)
    console.log(result)
    const status = result.split('\n')

    return {
      printer: status[0],
      queue: status[1]
    }
  }

  public async print(options: TPrintingOptions): Promise<any> {
    let sentence = `lp -d "${this.printer}"`
    sentence += options.quantity ? ` -n ${options.quantity}` : ''
    sentence += options.orientation ? ` -o ${options.orientation}` : ' -o portrait'
    sentence += options.paperSize ? ` -o media=${options.paperSize}` : ''
    sentence += options.sides ? ` -o sides=${options.sides}` : ''
    sentence += ` ${options.document}`

    console.log(sentence)

    // const result = await this.runCommand(sentence)
    // console.log(result)

    return true
  }

  private async runCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) return reject(error)

        if (stderr) reject(stderr)

        resolve(stdout)
      })
    })
  }
}

export { PrinterService }
