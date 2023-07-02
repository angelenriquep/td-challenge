import request from 'supertest'
import { Server } from '../../../src/app/shop/server'
import { loadConfig } from '../../../src/app/shop/dependency-injection'
import { expect } from 'chai'

const SERVER_PORT = '5000'

describe('Create a customer from API', () => {
  let server: Server

  before(async () => {
    await loadConfig()
    server = new Server(SERVER_PORT)
    await server.listen()
  })

  after(async () => {
    await server.stop()
  })

  it('should create, save and return a customer', async () => {
    const testData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      credit: 100
    }

    const response = await request(server.getHTTPServer())
      .post('/v1/customer')
      .send(testData)
      .expect(200)

    expect(response.body.name).to.equal(testData.name)
    expect(response.body.email).to.equal(testData.email)
    expect(response.body.credit).to.equal(testData.credit)
  })

  it('should return error is missing field', async () => {
    const testData = {
      name: 'John Doe'
    }

    const response = await request(server.getHTTPServer())
      .post('/v1/customer')
      .send(testData)
      .expect(500)

    expect(response.text).to.equal('The Customer email <undefined> is not a valid e-mail')
  })
})
