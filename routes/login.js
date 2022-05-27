var express = require('express');
var router = express.Router();
var loginController = require("../controllers/loginController")

router.get('/', loginController.login);
router.post('/',loginController.loginProcess);

module.exports = router;