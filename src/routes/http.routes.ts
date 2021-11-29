import { Router } from 'express'
import { saleController, printController } from '~CONTROLLERS'

const router = Router()

router.post('/sendNewSale', saleController)
router.post('/printVoucher', printController)

export default router
