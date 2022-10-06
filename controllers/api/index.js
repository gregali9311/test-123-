const router = require('express').Router();
const Mood = require('./mood');


router.use("/mood", Mood)



module.exports = router;
