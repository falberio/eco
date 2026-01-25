# 📡 API Reference - ECO Platform

> Documentación completa de endpoints del backend

**Base URL (Producción):** `https://alacena-backend.fly.dev`  
**Base URL (Desarrollo):** `http://localhost:4000`  
**Última actualización:** 2026-01-25

---

## 🔐 Autenticación

### POST /api/auth/login

Autenticar usuario y obtener JWT token.

**Request:**
```json
{
  "email": "admin@alacena.com",
  "password": "admin123"
}
```

**Response (200):**
```json
{
  "user": {
    "id": 1,
    "email": "admin@alacena.com",
    "name": "Admin User"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Errores:**
- `401` - Credenciales inválidas
- `400` - Email o password faltantes

---

### POST /api/auth/register

Registrar nuevo usuario.

**Request:**
```json
{
  "email": "nuevo@ejemplo.com",
  "password": "password123",
  "name": "Nombre Usuario"
}
```

**Response (201):**
```json
{
  "user": {
    "id": 2,
    "email": "nuevo@ejemplo.com",
    "name": "Nombre Usuario"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Errores:**
- `409` - Email ya existe
- `400` - Datos inválidos (email mal formado, password < 6 caracteres)

---

### GET /api/auth/me

Obtener información del usuario autenticado.

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "id": 1,
  "email": "admin@alacena.com",
  "name": "Admin User"
}
```

**Errores:**
- `401` - Token inválido o expirado
- `401` - Token faltante

---

## 🧺 Módulo Alacena

### Items

#### GET /api/alacena/items

Listar items con paginación.

**Query Params:**
- `skip` (number, default: 0) - Offset para paginación
- `take` (number, default: 100) - Cantidad de items por página
- `search` (string, optional) - Buscar por nombre o código

**Example:**
```
GET /api/alacena/items?skip=0&take=50
```

**Response (200):**
```json
{
  "data": [
    {
      "id": 1,
      "code": "ARR-001",
      "name": "Arroz Integral",
      "unit": "kg",
      "minStock": 2,
      "maxStock": 10,
      "currentStock": 5.5,
      "createdAt": "2026-01-15T10:30:00.000Z",
      "updatedAt": "2026-01-20T14:22:00.000Z"
    }
  ],
  "pagination": {
    "total": 129,
    "limit": 50,
    "offset": 0,
    "hasNext": true,
    "hasPrevious": false
  }
}
```

---

#### GET /api/alacena/items/:id

Obtener item específico por ID.

**Response (200):**
```json
{
  "id": 1,
  "code": "ARR-001",
  "name": "Arroz Integral",
  "unit": "kg",
  "minStock": 2,
  "maxStock": 10,
  "currentStock": 5.5,
  "batches": [
    {
      "id": 10,
      "expiryDate": "2026-06-30",
      "quantity": 2.5
    }
  ],
  "reserves": [
    {
      "id": 5,
      "quantity": 1.0,
      "reason": "Comida del sábado"
    }
  ]
}
```

**Errores:**
- `404` - Item no encontrado

---

#### POST /api/alacena/items

Crear nuevo item.

**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request:**
```json
{
  "code": "LEN-001",
  "name": "Lentejas",
  "unit": "kg",
  "minStock": 1,
  "maxStock": 5
}
```

**Response (201):**
```json
{
  "id": 130,
  "code": "LEN-001",
  "name": "Lentejas",
  "unit": "kg",
  "minStock": 1,
  "maxStock": 5,
  "currentStock": 0,
  "createdAt": "2026-01-25T12:00:00.000Z",
  "updatedAt": "2026-01-25T12:00:00.000Z"
}
```

**Errores:**
- `401` - No autenticado
- `409` - Código ya existe
- `400` - Datos inválidos (validación Zod)

---

#### PUT /api/alacena/items/:id

Actualizar item existente.

**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request:**
```json
{
  "name": "Lentejas Rojas",
  "minStock": 2,
  "maxStock": 8
}
```

**Response (200):**
```json
{
  "id": 130,
  "code": "LEN-001",
  "name": "Lentejas Rojas",
  "unit": "kg",
  "minStock": 2,
  "maxStock": 8,
  "currentStock": 0,
  "updatedAt": "2026-01-25T12:05:00.000Z"
}
```

**Errores:**
- `401` - No autenticado
- `404` - Item no encontrado
- `400` - Datos inválidos

---

#### DELETE /api/alacena/items/:id

Eliminar item (soft delete).

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "message": "Item eliminado",
  "id": 130
}
```

**Errores:**
- `401` - No autenticado
- `404` - Item no encontrado
- `409` - No se puede eliminar (tiene batches/reservas activas)

---

### Locations (Ubicaciones)

#### GET /api/alacena/locations

Listar ubicaciones con paginación.

**Query Params:**
- `skip` (number, default: 0)
- `take` (number, default: 50)

**Response (200):**
```json
{
  "data": [
    {
      "id": 1,
      "code": "JAR-001",
      "name": "Frasco Grande 1",
      "type": "JAR",
      "capacity": 2.0,
      "currentCapacity": 1.5,
      "shelfCode": "EST-A-1",
      "qrCode": "https://api.qrserver.com/v1/create-qr-code/?data=JAR-001&size=200x200"
    }
  ],
  "pagination": {
    "total": 45,
    "limit": 50,
    "offset": 0
  }
}
```

---

#### POST /api/alacena/locations

Crear nueva ubicación.

**Request:**
```json
{
  "code": "JAR-015",
  "name": "Frasco Mediano 5",
  "type": "JAR",
  "capacity": 1.5,
  "shelfCode": "EST-B-2"
}
```

**Response (201):**
```json
{
  "id": 46,
  "code": "JAR-015",
  "name": "Frasco Mediano 5",
  "type": "JAR",
  "capacity": 1.5,
  "currentCapacity": 0,
  "shelfCode": "EST-B-2",
  "qrCode": "https://api.qrserver.com/v1/create-qr-code/?data=JAR-015&size=200x200"
}
```

---

### Batches (Lotes)

#### POST /api/alacena/batches

Crear nuevo lote (entrada de stock).

**Request:**
```json
{
  "itemId": 1,
  "locationId": 5,
  "quantity": 2.5,
  "expiryDate": "2026-12-31",
  "grossWeight": 2.7,
  "tare": 0.2
}
```

**Response (201):**
```json
{
  "id": 150,
  "itemId": 1,
  "locationId": 5,
  "quantity": 2.5,
  "netWeight": 2.5,
  "grossWeight": 2.7,
  "tare": 0.2,
  "expiryDate": "2026-12-31T00:00:00.000Z",
  "createdAt": "2026-01-25T12:30:00.000Z"
}
```

---

### Reserves (Reservas)

#### GET /api/alacena/reserves

Listar reservas activas.

**Response (200):**
```json
{
  "data": [
    {
      "id": 1,
      "itemId": 3,
      "item": {
        "code": "ARR-001",
        "name": "Arroz Integral"
      },
      "quantity": 1.5,
      "reason": "Paella del viernes",
      "status": "ACTIVE",
      "createdAt": "2026-01-24T10:00:00.000Z"
    }
  ],
  "pagination": {
    "total": 12,
    "limit": 50,
    "offset": 0
  }
}
```

---

#### POST /api/alacena/reserves

Crear reserva de ingrediente.

**Request:**
```json
{
  "itemId": 3,
  "quantity": 1.5,
  "reason": "Paella del viernes"
}
```

**Response (201):**
```json
{
  "id": 13,
  "itemId": 3,
  "quantity": 1.5,
  "reason": "Paella del viernes",
  "status": "ACTIVE",
  "createdAt": "2026-01-25T13:00:00.000Z"
}
```

**Errores:**
- `400` - Stock insuficiente
- `404` - Item no encontrado

---

#### PUT /api/alacena/reserves/:id/complete

Completar reserva (descontar del stock).

**Response (200):**
```json
{
  "id": 13,
  "status": "COMPLETED",
  "completedAt": "2026-01-25T18:00:00.000Z"
}
```

---

#### DELETE /api/alacena/reserves/:id

Cancelar reserva.

**Response (200):**
```json
{
  "id": 13,
  "status": "CANCELLED"
}
```

---

### Menu

#### GET /api/alacena/menu

Listar items del menú.

**Query Params:**
- `skip` (number, default: 0)
- `take` (number, default: 50)
- `category` (string, optional) - Filtrar por categoría

**Response (200):**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Ensalada de Quinoa",
      "category": "VIANDA",
      "description": "Quinoa con verduras frescas",
      "ingredients": [
        {
          "itemId": 5,
          "item": { "code": "QUI-001", "name": "Quinoa" },
          "quantity": 0.3
        }
      ]
    }
  ],
  "pagination": {
    "total": 25,
    "limit": 50,
    "offset": 0
  }
}
```

---

## 🔧 Shared Endpoints

### GET /api/shared/qr/:code

Generar código QR para ubicación.

**Example:**
```
GET /api/shared/qr/JAR-001
```

**Response (200):**
```json
{
  "code": "JAR-001",
  "qrUrl": "https://api.qrserver.com/v1/create-qr-code/?data=JAR-001&size=200x200"
}
```

---

### GET /health

Health check del servidor.

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2026-01-25T14:00:00.000Z",
  "uptime": 123456
}
```

---

## 📊 Convenciones Generales

### Paginación

Todos los endpoints de listado soportan:
- `skip` - Offset (default: 0)
- `take` - Limit (default varía por recurso)

Respuesta:
```json
{
  "data": [...],
  "pagination": {
    "total": number,
    "limit": number,
    "offset": number,
    "hasNext": boolean,
    "hasPrevious": boolean
  }
}
```

### Autenticación

Endpoints protegidos requieren:
```
Authorization: Bearer {JWT_TOKEN}
```

### Códigos de Estado

- `200` - OK
- `201` - Creado
- `400` - Bad Request (datos inválidos)
- `401` - No autenticado
- `403` - No autorizado
- `404` - No encontrado
- `409` - Conflicto (duplicado)
- `500` - Error del servidor

### Formato de Errores

```json
{
  "error": "Mensaje descriptivo del error",
  "code": "ERROR_CODE",
  "details": { ... }
}
```

---

## 🧪 Testing con cURL

### Login
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@alacena.com","password":"admin123"}'
```

### Listar Items
```bash
curl http://localhost:4000/api/alacena/items?take=10 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Crear Item
```bash
curl -X POST http://localhost:4000/api/alacena/items \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"code":"TEST-001","name":"Item de Prueba","unit":"kg","minStock":1,"maxStock":5}'
```

---

## 📝 Próximas APIs (Mantia)

### POST /api/mantia/accounts
Crear cuenta financiera.

### GET /api/mantia/transactions
Listar transacciones con filtros.

### POST /api/mantia/budgets
Crear presupuesto mensual.

*Documentación completa cuando Mantia esté implementado.*

---

*API Reference creada: 2026-01-25*
