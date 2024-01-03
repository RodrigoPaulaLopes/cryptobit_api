import { Router, type Request, type Response } from 'express'

const router = Router()

router.get('/coins/list', (req: Request, res: Response) => {
  res.status(200).json({ data: 'test' })
})

export default router
