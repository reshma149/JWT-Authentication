const { registerUser , loginUser , logoutUser} = require('../controller/authController')

const authRoute = require('express').Router()

//register route
authRoute.post(`./register`,registerUser)

//login user
authRoute.post(`/login`,loginUser)

//logout user
authRoute.get(`/logout`,logoutUser)

module.exports = authRoute