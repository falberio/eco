# Guía de Imágenes del Menú

## Estructura de Carpetas

```
public/images/menu/
├── desayunos/
├── carnes/
├── hamburguesas/
├── pastas/
├── salsas/
├── tartas/
├── cafeteria/
├── bar/
├── bebidas/
└── vinos/
```

## Formato de Archivos

- **Formato:** WebP (`.webp`)
- **Tamaño recomendado:** 800x600px (4:3) o 1200x900px
- **Optimización:** Calidad 80-85%

## Convención de Nombres

Usar nombres en minúsculas, sin espacios, con guiones. Ejemplos:

### Desayunos
- `tostadas-mermelada.webp`
- `bowl-yogurt-avena.webp`
- `bowl-yogurt-banana-crumble.webp`
- `huevos-revueltos.webp`
- `medialunas.webp`

### Carnes
- `bife-chorizo.webp`
- `milanesa-napolitana.webp`
- `suprema-pollo.webp`
- `asado.webp`
- `costillas.webp`

### Hamburguesas
- `hamburguesa-clasica.webp`
- `hamburguesa-mediterranea.webp`
- `hamburguesa-provenzal.webp`
- `hamburguesa-bosque.webp`

### Pastas
- `fetuccini.webp`
- `spaguetti.webp`
- `lasagna.webp`
- `noquis.webp`

### Salsas
- `bolognesa.webp`
- `salsa-blanca.webp`
- `salsa-rosa.webp`
- `pesto-albahaca.webp`
- `pesto-tomates-secos.webp`

### Tartas
- `tarta-verdura.webp`
- `tarta-zapallo.webp`

### Cafetería
- `cafe-expresso.webp`
- `cafe-con-leche.webp`
- `capuchino.webp`
- `cortado.webp`
- `te.webp`
- `submarino.webp`

### Bar
- `gin-tonic.webp`
- `negroni.webp`
- `caipiroska.webp`
- `fernet.webp`
- `campari.webp`
- `pisco-sour.webp`
- `vermu.webp`

### Bebidas (medidas)
- `vodka.webp`
- `gin.webp`
- `whisky.webp`
- `pisco.webp`

### Vinos
- `vino-tinto.webp`
- `vino-blanco.webp`
- `vino-rosado.webp`
- `champagne.webp`

## Conversión a WebP

Si tenés imágenes en otro formato (JPG, PNG), podés convertirlas con:

### Opción 1: Online
- https://squoosh.app/ (recomendado)
- https://convertio.co/es/jpg-webp/

### Opción 2: Herramienta CLI (si tenés instalado)
```bash
# Convertir una imagen
cwebp imagen.jpg -q 85 -o imagen.webp

# Convertir todas las JPG de una carpeta
for file in *.jpg; do cwebp "$file" -q 85 -o "${file%.jpg}.webp"; done
```

### Opción 3: PowerShell (Windows)
```powershell
# Instalar ImageMagick primero desde: https://imagemagick.org/script/download.php
# Luego ejecutar:
Get-ChildItem -Filter *.jpg | ForEach-Object {
    magick convert $_.Name -quality 85 ($_.BaseName + ".webp")
}
```

## Próximos Pasos

1. **Organizá tus fotos** por categoría en las carpetas correspondientes
2. **Renombrálas** según la convención de nombres de arriba
3. **Convertílas a WebP** usando una de las opciones de arriba
4. **Subílas** a las carpetas correspondientes

Una vez que tengas las imágenes listas, actualizaré el código del menú para mostrarlas.
