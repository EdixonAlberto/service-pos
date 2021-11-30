type TConfig = {
  modeDev: boolean
  portHTTP: number
  portWS: number
  portPOS: string | null
  whiteList: string[]
}

type TEnv = 'production' | 'development'

/* DECLARATIONS ______________________________________________________________________________________________________*/

declare var config: TConfig
