const fetch = require('cross-fetch');
const { Router } = require('express');


module.exports = Router ()
  .get('/:sign', async (req, res) => {
    const filteredHoro = await getHoroscope(req.params.sign);
    return res.json(filteredHoro);
  });


async function getHoroscope(sign) {
  try {
    const res = await fetch(`https://ohmanda.com/api/horoscope/${sign}`);
      
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
      
    return await res.json();
    

  } catch (err) {
    console.error(err);
  }
}
