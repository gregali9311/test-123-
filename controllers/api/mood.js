const router = require('express').Router();
const { Mood } = require('../../models/Mood');

router.post('/', async (req, res) => {
    try {

      const moodData = await Mood.create({
        ...req.body});

    } catch (err) {

      res.status(400).json(err);

    }
  });

  module.exports = router;