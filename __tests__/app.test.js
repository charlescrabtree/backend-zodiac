const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../lib/zodiac-data');

describe('zodiac routes', () => {
  it('/zodiacs should return a list of zodiac signs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });
});

