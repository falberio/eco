// src/shared/auth/auth.routes.js

const express = require('express')
const { register, login, getProfile } = require('./auth.controller.js')

const router = express.Router()

// Rutas públicas
router.post('/register', register)
router.post('/login', login)

// Rutas protegidas (después agregar middleware de verificación JWT)
router.get('/profile', getProfile)

module.exports = router
