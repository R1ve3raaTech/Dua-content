# Proyecto: Dúa | Creación de Contenido

## Qué es
Landing de una sola página para Dúa, agencia de creación de contenido (reels, marcas, bodas, eventos) en Costa Rica, fundada por dos hermanas.

## Stack
- Next.js 14 + TypeScript
- Tailwind CSS + shadcn/ui
- Deploy en Vercel

## Alcance (importante, no salirse de esto)
- *Multi-página*: cada ítem del navbar es su propia ruta (decidido el 2026-08-10; reemplaza el alcance one-page original). El header es compartido vía `app/layout.tsx` y cada ruta monta su componente de sección de `components/sections/`.
- Mobile-first: la mayoría de visitantes va a entrar desde Instagram en el celular.

## Estructura de páginas (en orden del navbar)
1. `/` — *Quiénes somos* — presentación de Dúa + una parte dedicada a las dos fundadoras (Stay y Titi)
2. `/paquetes-marcas` — *Paquetes para marcas*
3. `/paquetes-eventos` — *Paquetes para eventos*
4. `/clientes` — *Clientes / trabajos / recomendaciones* — usar placeholders, las fotos reales de clientas las envían después

Además hay un *footer global* (`components/Footer.tsx`, montado en el layout, visible en todas las páginas) con: redes sociales (Instagram, WhatsApp) y métodos de pago. El formulario de contacto (nombre/email/mensaje) se eliminó el 2026-08-10 — el contacto va por redes/WhatsApp desde el footer.

## Identidad de marca (del Brand Book oficial — seguir esto, no inventar)

### Colores
- Negro: #1C1C1C
- Café Dúa: #8A5A2B
- Crema: #F3E7D0
- Blanco: #FFFFFF
- Cobre: #C58A58 (color de acento — usarlo en detalles, íconos, líneas decorativas)

### Tipografía
- Títulos / destacados: *Playfair Display* (serif)
- Cuerpo de texto: *Montserrat* (sans-serif)

### Tono de marca
Cercana, creativa, auténtica, femenina, empática, profesional. Copy que suene a personas reales, no corporativo.

### Elementos gráficos
Líneas orgánicas y curvas simples como detalle decorativo sutil (inspirado en el isotipo del logo). No usar como elemento animado pesado.

## Servicios de Dúa (para la sección de paquetes/servicios)
- Creación de contenido para marcas
- Reels y contenido para redes sociales
- Edición profesional
- Estrategia de contenido
- Cobertura de eventos y momentos especiales

## Notas de contenido
- Las fotos de clientas para la sección 4 llegan después — dejar esa sección con placeholders fáciles de reemplazar (array de objetos, no hardcodeado).
- El sitio no se considera listo para lanzar/compartir públicamente hasta que lleguen esas fotos reales.
