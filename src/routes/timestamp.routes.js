const {
    homePage,
    dateNow,
    hello,
    timestamp,
} = require('../controllers/timestamp.controller');
const router = require('express').Router();

// http://expressjs.com/en/starter/basic-routing.html
router.get('/', homePage);
router.get('/api', dateNow);
router.get('/api/hello', hello);
router.get('/api/:date_string', timestamp);

module.exports = router;
