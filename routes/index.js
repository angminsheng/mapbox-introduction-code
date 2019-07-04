const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {

  res.render('index', { accessToken: process.env.mapboxKey });
});

router.post('/add-wonder', async (req, res, next) => {
  try {
    const { name, imageUrl, latitude, longitude } = req.body

    await Place.create({
      name, imageUrl, location: {
        type: "Point",
        coordinate: [latitude, longitude]
      }
    })

    res.redirect('/')

  } catch (e) {
    console.log(e)
  }
})

module.exports = router;
