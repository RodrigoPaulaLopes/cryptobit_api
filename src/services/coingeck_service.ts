import { type AxiosResponse } from 'axios'
import { API } from '../utils/Api'

class Coingecko {
  async getCoinsList (): Promise<any> {
    try {
      const response = await API.get('/coins/list')
      const { data, status } = response
      return { data, status }
    } catch (error: any) {
      throw new Error(`error: ${error}`)
    }
  }
}

export default new Coingecko()
