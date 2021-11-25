import { Router } from 'express'
import { saleController } from '~CONTROLLERS'

const router = Router()

router.post('/sendNewSale', saleController)

export default router
