const request = require('supertest')
const app = require('../app')
describe('Get Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/user')
            .send({
                "name": "Andre",
                "address": "Gross Strase, Berlin, Germany",
            })
            .expect(201)
    })
})