import { Router } from 'express'
import { saleController, printController } from '~CONTROLLERS'

const router = Router()

router.post('/newSale', saleController)
router.post('/printVoucher', printController)

export default router
