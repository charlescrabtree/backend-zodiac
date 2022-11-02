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

  it('/zodiacs/:id should return zodiac details', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });
});

describe('horoscope routes', () => {
  it('/horoscopes should return a horoscope for corresponding zodiac signs', async () => {
    const res = await request(app).get('/horoscopes/aquarius');
    const horoscope = {
      sign: 'aquarius',
      date: expect.any(String),
      horoscope: expect.any(String),     
    };
    expect(res.body).toEqual(horoscope); 
  });
});