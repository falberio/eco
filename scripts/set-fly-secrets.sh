#!/bin/bash
# Script to set Fly.io secrets for Alacena backend
# Nota: Requiere tener 'flyctl' instalado y estar autenticado

# Set environment variables
export FLYCTL_API_TOKEN="$1"  # Token from command line

# Secrets to set
declare -A SECRETS=(
    ["DATABASE_URL"]="postgresql://postgres:DjDK6YNUopieqRGW@[2600:1f18:2e13:9d1c:faba:208:6f00:de21]:5432/postgres?schema=public&sslmode=disable"
    ["JWT_SECRET"]="your-super-secret-jwt-key-change-in-production"
)

# Set each secret
for key in "${!SECRETS[@]}"; do
    echo "Setting secret: $key"
    flyctl secrets set "$key=${SECRETS[$key]}" -a alacena-backend
done

echo "All secrets have been set!"
