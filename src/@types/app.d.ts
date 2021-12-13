type TConfig = {
  modeDev: boolean
  portHTTP: number
  portWS: number
  portPOS: string | null
  whiteList: string[]
}

type TEnv = 'production' | 'development'

type TErrorResponse = {
  status?: import('http-status-codes').StatusCodes
  name: string
  message: string
}

type TPrintingOptions = {
  document: string
  quantity?: number
  orientation?: 'portrait' | 'landscape'
  paperSize?: 'leeter' | string
  sides?: 'two-sided-long-edge' | string
}

/* DECLARATIONS ______________________________________________________________________________________________________*/

declare var config: TConfig
