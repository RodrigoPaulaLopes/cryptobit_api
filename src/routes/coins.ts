import { Router } from 'express'

import coinsgecko_controller from '../controller/coinsgecko_controller'
const router = Router()

router.get('/coins/list', coinsgecko_controller.getCoinsList)

export default router
