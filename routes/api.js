const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

router.get('/api/places', async (req, res, next) => {
  let placeFound = await Place.find({})
  res.json(placeFound)
})

module.exports = router;
