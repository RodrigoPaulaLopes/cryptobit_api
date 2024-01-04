import { type Request, type Response } from 'express'
import coingeck_service from '../services/coingeck_service'
import { type AxiosResponse } from 'axios'

class CoinsgeckoController {
  async getCoinsList (req: Request, res: Response) {
    try {
      const response = await coingeck_service.getCoinsList()
      const { data, status } = response

      res.status(Number(status)).json({ status_code: status, data })
    } catch (error: any) {
      throw new Error(`error: ${error}`)
    }
  }
}

export default new CoinsgeckoController()
