const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/authControl')
const middleware = require('../middlewere/protect')
const homeControllers = require('../controllers/userORadmin')



router.route('/register').post(register)
router.route('/login').post(login)
router.route('/admin').get(middleware.authenticateToken, middleware.checkRole('admin'), homeControllers.welcomeAdmin)
router.route('/user').get(middleware.authenticateToken, middleware.checkRole('user'), homeControllers.welcomeUser);





module.exports = router;