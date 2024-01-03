import request from 'supertest'
import { app } from '../../src/app'
describe('Teste All Methods from Coins Router', () => {
  it('GET /coins/list should return status code 200', async () => {
    const res = (await request(app).get('/api/coins/list'))

    expect(res.statusCode).toBe(200)
  })
})
