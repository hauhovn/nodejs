const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/', siteController.home);
router.use('/login', siteController.login);


module.exports = router;