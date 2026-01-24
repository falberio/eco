#!/bin/bash

# Script para cargar todos los datos a producción en Fly.io

echo "📦 CARGANDO DATOS A PRODUCCIÓN (Fly.io)"
echo ""

# 1. Frascos
echo "1️⃣  Cargando 33 frascos..."
fly ssh console -C "cd /app && node prisma/seed-jars.js"

# 2. Viandas
echo "2️⃣  Cargando viandas..."
fly ssh console -C "cd /app && node prisma/seed-viandas.js"

# 3. Ingredientes nuevos
echo "3️⃣  Cargando ingredientes nuevos..."
fly ssh console -C "cd /app && node prisma/seed-nuevos-ingredientes.js"

# 4. Menú replanteado
echo "4️⃣  Cargando menú..."
fly ssh console -C "cd /app && node prisma/seed-menu-replanteado.js"

# 5. Completar menú
echo "5️⃣  Completando menú..."
fly ssh console -C "cd /app && node prisma/seed-menu-completar.js"

# 6. Items faltantes
echo "6️⃣  Agregando items faltantes..."
fly ssh console -C "cd /app && node prisma/add-missing-menu-items.js"

# 7. Arreglar items
echo "7️⃣  Arreglando items..."
fly ssh console -C "cd /app && node prisma/fix-missing-items.js"

echo ""
echo "✅ ¡DATOS CARGADOS A PRODUCCIÓN!"
