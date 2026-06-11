---
tags:
  - youtube
  - produccion
  - equipo
  - edicion
tipo: guia
plataforma: youtube
estado: completo
---

# Produccion de Videos para YouTube

## Equipo minimo recomendado

| Elemento | Opcion economica | Opcion recomendada | Por que |
|----------|-----------------|--------------------|---------|
| **Camara** | Webcam 1080p | Smartphone (camara trasera) | Calidad mas que suficiente |
| **Microfono** | Blue Yeti / Fifine | Rode NT-USB o Shure MV7 | El audio importa mas que el video |
| **Iluminacion** | Ventana con luz natural | Softbox de 2 luces | Iluminacion consistente |
| **Captura pantalla** | OBS Studio (gratis) | OBS Studio (gratis) | Estandar de la industria |
| **Editor** | DaVinci Resolve (gratis) | DaVinci Resolve (gratis) | Nivel profesional sin costo |

## Setup de grabacion

### Para video tutorial (codigo)
```
Camara: Posicion sobre el monitor o a 45 grados
Captura: OBS con source de IDE + webcam
Resolucion: 1080p 60fps (o 4K si el PC lo soporta)
Layout: Codigo 80%, camara 20% (esquina)
```

### Para video cara (building, reflexiones)
```
Camara: Frente al rostro, ligeramente por encima de ojos
Fondo: Escritorio o fondo limpio (no necesariamente liso)
Iluminacion: 45 grados a cada lado, evitando sombras
```

## Flujo de produccion

### Pre-produccion (2-3h antes de grabar)
```
1. Escribir guion/esquema
2. Preparar terminal/editor (tabs, colores, fuente grande)
3. Cerrar apps no necesarias
4. Silenciar notificaciones
5. Configurar OBS (escenas pre-hechas)
```

### Produccion (el dia)
```
1. Grabar en orden, sin presion
2. Si te equivocas, respira y retoma desde la frase anterior
3. Grabar B-roll despues (si aplica)
4. Respaldar archivos raw
```

### Post-produccion (2-4h por video)
```
1. Corte de silencios y pausas largas
2. Añadir capturas de pantalla donde falte claridad
3. Musica de fondo (baja, <10% volumen)
4. Textos en pantalla para enfatizar
5. Correccion de color (LUT basico)
6. Thumbnail
```

## Edicion de video

### Herramientas

| Herramienta | Uso | Costo |
|-------------|-----|-------|
| **DaVinci Resolve** | Edicion principal | Gratis |
| **CapCut** | Edicion rapida / Reels | Gratis |
| **OBS Studio** | Grabacion pantalla | Gratis |
| **Canva** | Thumbnails | Gratis/Pro |
| **Audacity** | Limpieza de audio | Gratis |

### Atajos de edicion que ahorran tiempo

| Atajo (DaVinci) | Funcion |
|-----------------|---------|
| Ctrl+B | Cortar clip |
| Shift+Del | Ripple delete |
| Alt+scroll | Zoom timeline |
| B | Blade tool |
| T | Trim tool |

## Thumbnails

### Formula de thumbnail efectiva
```
Fondo: Color vibrante o frame interesante del video
Rostro: Expresion exagerada (sorpresa, curiosidad, emoción)
Texto: Maximo 4 palabras, legible en movil
Contraste: Colores complementarios, sombras marcadas
```

### Herramientas para thumbnails
- Canva (plantillas pre-hechas)
- Photoshop / GIMP
- Photopea (gratis online)

## Gestion de archivos

```
📁 YouTube/
  📁 Raw/ (grabaciones originales)
  📁 Proyectos/ (archivos de edicion)
  📁 Exportados/ (videos finales)
  📁 Thumbnails/
  📁 Musica/
```

---

## Conexiones con el vault

- [[YouTube/guiones-videos]] — Plantillas de guion
- [[YouTube/estrategia-canal]] — Estrategia general
- [[YouTube/crecimiento]] — Estrategia de crecimiento
- [[Recursos/ideas-publicaciones]] — Ideas adaptables a video
