// src/routes/reserves.routes.js
// Rutas REST para Reserves

const express = require('express')
const {
  createReserve,
  listReserves,
  getReserve,
  updateReserve,
  deleteReserve,
  consumeReserve,
  moveReserve,
} = require('../controllers/reserve.controller.js')

const router = express.Router()

/**
 * POST /api/reserves
 * Crear una nueva reserva
 */
router.post('/', createReserve)

/**
 * GET /api/reserves
 * Listar todas las reservas (con filtros opcionales)
 * Query params: status, itemId, locationId, limit, offset
 */
router.get('/', listReserves)

/**
 * GET /api/reserves/:id
 * Obtener una reserva específica
 */
router.get('/:id', getReserve)

/**
 * PUT /api/reserves/:id
 * Actualizar una reserva
 */
router.put('/:id', updateReserve)

/**
 * DELETE /api/reserves/:id
 * Eliminar una reserva
 */
router.delete('/:id', deleteReserve)

/**
 * PATCH /api/reserves/:id/consume
 * Marcar una reserva como consumida (shortcut útil)
 */
router.patch('/:id/consume', consumeReserve)

/**
 * PATCH /api/reserves/:id/move
 * Mover una reserva a una nueva ubicación (drag & drop)
 */
router.patch('/:id/move', moveReserve)

module.exports = router
