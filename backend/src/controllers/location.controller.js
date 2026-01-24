// src/controllers/location.controller.js

const prisma = require('../prisma/client.js')
const { CreateLocationSchema, UpdateLocationSchema, FilterLocationSchema } = require('../schemas/location.schema.js')

async function createLocation(req, res) {
  try {
    const data = CreateLocationSchema.parse(req.body)
    
    const location = await prisma.location.create({
      data,
      include: { parent: true, children: true }
    })
    
    res.status(201).json(location)
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: 'Datos inválidos', details: error.errors })
    }
    res.status(500).json({ error: 'Error al crear location', message: error.message })
  }
}

async function listLocations(req, res) {
  try {
    const filters = FilterLocationSchema.parse(req.query)
    
    const where = {}
    if (filters.kind) where.kind = filters.kind
    if (filters.parentId) where.parentId = filters.parentId
    
    // Si se proporciona parentCode, buscar el parent primero
    if (filters.parentCode) {
      const parentLocation = await prisma.location.findUnique({
        where: { code: filters.parentCode }
      })
      if (parentLocation) {
        where.parentId = parentLocation.id
      } else {
        return res.json({ data: [], pagination: { total: 0, limit: filters.limit, offset: 0, hasMore: false } })
      }
    }
    
    // Construir includes dinámicamente
    const include = {}
    if (filters.includeChildren) include.children = true
    if (filters.includeReserves) {
      include.reserves = {
        where: { status: 'ACTIVE' },
        include: {
          item: true,
          container: {
            include: {
              type: true
            }
          }
        }
      }
    }
    
    const [locations, total] = await Promise.all([
      prisma.location.findMany({
        where,
        include,
        take: filters.limit,
        skip: filters.offset,
        orderBy: { sortIndex: 'asc' }
      }),
      prisma.location.count({ where })
    ])
    
    res.json({
      data: locations,
      pagination: {
        total,
        limit: filters.limit,
        offset: filters.offset,
        hasMore: filters.offset + filters.limit < total
      }
    })
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: 'Filtros inválidos', details: error.errors })
    }
    res.status(500).json({ error: 'Error al listar locations', message: error.message })
  }
}

async function getLocation(req, res) {
  try {
    const { id } = req.params
    
    const location = await prisma.location.findUnique({
      where: { id },
      include: {
        parent: true,
        children: true,
        reserves: true,
        containers: true
      }
    })
    
    if (!location) {
      return res.status(404).json({ error: 'Location no encontrada' })
    }
    
    res.json(location)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener location', message: error.message })
  }
}

async function updateLocation(req, res) {
  try {
    const { id } = req.params
    const data = UpdateLocationSchema.parse(req.body)
    
    const location = await prisma.location.update({
      where: { id },
      data,
      include: { parent: true, children: true }
    })
    
    res.json(location)
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Location no encontrada' })
    }
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: 'Datos inválidos', details: error.errors })
    }
    res.status(500).json({ error: 'Error al actualizar location', message: error.message })
  }
}

async function deleteLocation(req, res) {
  try {
    const { id } = req.params
    
    await prisma.location.delete({ where: { id } })
    
    res.status(204).send()
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Location no encontrada' })
    }
    res.status(500).json({ error: 'Error al eliminar location', message: error.message })
  }
}

module.exports = {
  createLocation,
  listLocations,
  getLocation,
  updateLocation,
  deleteLocation,
}
