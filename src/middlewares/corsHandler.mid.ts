import { Handler } from 'express'
import cors from 'cors'

export function corsHandler(): Handler {
  const whitelist: string[] = global.config.whiteList
  let origin: string = ''

  const handler = cors({
    origin: (_origin, callback) => {
      origin = _origin || ''

      if (whitelist.indexOf(origin) !== -1) callback(null, true)
      else callback(new Error('Not allowed by CORS'))
    }
  })

  return handler
}
