const router = require('express').Router();


router.get('/', (req, res) => {
    res.json({ api: "main router" });
  });
  
  module.exports = router;
  