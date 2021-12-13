import { Router } from 'express'
import { statusController, saleController, printController } from '~CONTROLLERS'

const router = Router()

router.get('/', statusController)
router.post('/newSale', saleController)
router.post('/printVoucher', printController)

export default router
