type TConfig = {
  port: number
  modeDev: boolean
}

type TEnv = 'production' | 'development'

/* DECLARATIONS ______________________________________________________________________________________________________*/

declare namespace NodeJS {
  interface Global {
    config: TConfig
  }
}
