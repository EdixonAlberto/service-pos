type TConfig = {
  portServer: number
  portPos: string | null
  modeDev: boolean
}

type TEnv = 'production' | 'development'

/* DECLARATIONS ______________________________________________________________________________________________________*/

declare var config: TConfig
