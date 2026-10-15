# 🧬 Skill de Gemini: Aprendizaje Interactivo de Genética Veterinaria (Meiosis y Gametogénesis)

[![HTML5](https://img.shields.io/badge/HTML5-Sem%C3%A1ntico-orange.svg)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern%20Glassmorphism-blue.svg)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B%20Interactivo-yellow.svg)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![AI Engine](https://img.shields.io/badge/AI%20Engine-Google%20Gemini-8A2BE2.svg)](https://deepmind.google/technologies/gemini/)
[![Enfoque](https://img.shields.io/badge/Área-Medicina%20Veterinaria%20y%20Zootecnia-10b981.svg)](#)

Landing page moderna, interactiva y de alto impacto visual desarrollada para presentar y demostrar las capacidades de la **Skill de Gemini especializada en Medicina Veterinaria**, con foco temático en **Genética Celular, Meiosis y Gametogénesis Animal** en especies domésticas clave (*bovinos, caninos y equinos*).

---
#enlacelanding:https://davidaristimunoz17-lab.github.io/skill-gemini-veterinaria-meiosis/
## 📋 Tabla de Contenidos

1. [Visión General del Proyecto](#-visión-general-del-proyecto)
2. [El Desafío Pedagógico Veterinario](#-el-desafío-pedagógico-veterinario)
3. [Estructura y Secciones de la Landing Page](#-estructura-y-secciones-de-la-landing-page)
   - [Sección de Infografía Oficial](#1-sección-de-infografía-oficial-infografiajpg)
   - [Sección de Video Explicativo](#2-sección-de-video-explicativo-videomp4)
   - [Tarjetas Explicativas y Laboratorio en Vivo](#3-tarjetas-explicativas-y-laboratorio-en-vivo)
   - [Simulador de Prompts de Gemini](#4-simulador-de-prompts-de-gemini)
4. [Estructura de Archivos del Proyecto](#-estructura-de-archivos-del-proyecto)
5. [Instrucciones de Instalación y Ejecución](#-instrucciones-de-instalación-y-ejecución)
6. [Decisiones Técnicas y de Diseño (Design System)](#-decisiones-técnicas-y-de-diseño-design-system)
7. [Guía de Integración con la Skill de Gemini](#-guía-de-integración-con-la-skill-de-gemini)
8. [Impacto en la Formación Médico-Veterinaria](#-impacto-en-la-formación-médico-veterinaria)

---

## 🎯 Visión General del Proyecto

En las facultades de Medicina Veterinaria y Zootecnia, la enseñanza de la genética reproductiva suele enfrentarse a una brecha entre la teoría microscópica abstracta y su correlato en la clínica o la producción de campo. 

Esta solución web combina diseño web de última generación con la potencia pedagógica de los Modelos de Lenguaje Grande (**Google Gemini**), proporcionando una plataforma centralizada que expone:
- Recursos visuales de alta resolución (`infografia.jpg`).
- Demostración audiovisual guiada (`video.mp4`).
- Dinámicas de aprendizaje activo: **Flashcards 3D**, **Trivias diagnósticas** y **Resúmenes estructurados**.
- Un entorno de prueba simulado para formular preguntas meióticas a la IA.

---

## 🔬 El Desafío Pedagógico Veterinario

Conforme a los fundamentos teóricos del proyecto:
- **Complejidad Teórica:** La meiosis abarca subfases críticas en la Profase I (*Leptoteno, Cigoteno, Paquiteno, Diploteno y Diacinesis*), mecanismos de *crossing-over*, y diferencias radicales entre machos (espermatogénesis continua) y hembras (ovogénesis con arrestos meióticos prolongados).
- **Peculiaridades por Especie:** 
  - En **caninos**, la ovulación sucede en un estado inmaduro (*ovocito primario en Profase I*), requiriendo 48-72 horas en el oviducto para expulsar el primer glóbulo polar.
  - En **bovinos**, alteraciones meióticas como la **Translocación Robertsoniana 1/29 (rob 1/29)** originan subfertilidad del 5-10% por embriones aneuploides no viables.
  - En **equinos**, las disgenesias meióticas como el Síndrome de Turner (*63,XO*) condicionan hipoplasia gonadal en yeguas.
- **La Solución Gemini:** Transformar la memorización pasiva en resolución de casos clínicos aplicados, evaluación formativa inmediata y generación adaptativa de materiales.

---

## 🌐 Estructura y Secciones de la Landing Page

### 1. Sección de Infografía Oficial (`infografia.jpg`)
- **Archivo vinculado:** Exactamente `infografia.jpg` ubicado en el directorio raíz del proyecto.
- **Interactividad integrada:**
  - Tarjeta de previsualización con efecto *hover*, zoom suave y capa traslúcida que invita a la exploración.
  - **Lightbox Modal en pantalla completa**: Al hacer clic, se abre un visor oscuro con controles de zoom progresivo (`+` / `-`), restablecimiento de tamaño (`100%`), cierre con tecla `Escape` o clic exterior, y botón de descarga directa del archivo en formato JPG.
  - Desglose textual accesible de los tres bloques medulares de la infografía: *El Desafío Académico*, *Cómo Funciona la Skill* y *Beneficios para el Estudiante*.

### 2. Sección de Video Explicativo (`video.mp4`)
- **Archivo vinculado:** Exactamente `video.mp4` insertado en un reproductor de video nativo HTML5.
- **Características técnicas:**
  - Relación de aspecto panorámica 16:9 con contenedor estilo *cinema glow* y borde de neón cian.
  - Atributos estándar de control (`controls`, `playsinline`, `preload="metadata"`).
  - Marcadores de tiempo interactivos (*Jump Buttons*): Permiten saltar con un clic a momentos clave del metraje (Inicio `00:00`, Conceptos `00:15`, Demostración `00:30`) informando al usuario mediante notificaciones *Toast*.

### 3. Tarjetas Explicativas y Laboratorio en Vivo
Presenta los tres pilares didácticos de la Skill:

| Módulo | Formato Didáctico | Función en la Landing Page |
| :--- | :--- | :--- |
| **Flashcards Clínicas** | Tarjetas mnemotécnicas bilaterales | Componente 3D que gira `180deg` sobre su eje Y al hacer clic, con controles de navegación (Anterior / Siguiente / Voltear) y notas de impacto clínico veterinario (ej. Paquiteno, Espermatogénesis bovina, Dictioteno equino, Citogenética rob 1/29). |
| **Trivias Interactivas** | Quizzes diagnósticos basados en casos | Motor interactivo con opciones múltiples (`A`, `B`, `C`, `D`), detección automática de acierto/error en verde esmeralda o rojo carmesí, retroalimentación médica inmediata y acumulador dinámico de puntaje. |
| **Resúmenes Estructurados** | Tablas y esquemas sinópticos | Navegación por pestañas de especies (*Bovinos, Equinos, Caninos*) con datos de cariotipo (número 2n), fisiología gamética, puntos clave para examen y botón de copiado con retroalimentación *Toast*. |

### 4. Simulador de Prompts de Gemini
- Interfaz inspirada en una consola interactiva / playground de IA.
- Permite hacer clic en *chips* de preguntas frecuentes o ingresar consultas libres para ver la respuesta médica generada por el motor de la Skill con formato profesional y terminología precisa.

---

## 📁 Estructura de Archivos del Proyecto

```
d:/NO BORRAR/Desktop/SKILL SEGUIMIENTO/
│
├── index.html            # Estructura semántica HTML5, metadatos SEO y Open Graph
├── styles.css            # Hoja de estilos Vanilla CSS con Design System biomédico
├── app.js                # Lógica interactiva (3D Flip, Trivia, Pestañas, Lightbox, Simulator)
├── infografia.jpg        # Archivo gráfico original de la infografía
├── video.mp4             # Archivo multimedia de la demostración en video
└── README.md             # Documentación exhaustiva del proyecto (este archivo)
```

---

## 🚀 Instrucciones de Instalación y Ejecución

El proyecto fue construido utilizando **estándares web puros (HTML5, Vanilla CSS3 y ES6+ JavaScript)**, por lo que **no requiere ningún paso de compilación, transpilación ni instalación de paquetes con npm**.

### Opción A: Ejecución Directa (Sin Servidor)
1. Dirígete a la carpeta del proyecto: `d:\NO BORRAR\Desktop\SKILL SEGUIMIENTO\`.
2. Haz doble clic sobre el archivo `index.html`.
3. Se abrirá inmediatamente en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari u Opera).

### Opción B: Ejecución con Servidor Local (Recomendado para desarrollo)
Si prefieres servir la aplicación con un servidor HTTP local para verificar streaming de video óptimo y caché de fuentes:

- **Con Python:**
  ```powershell
  cd "d:\NO BORRAR\Desktop\SKILL SEGUIMIENTO"
  python -m http.server 8000
  ```
  *Abre tu navegador en `http://localhost:8000`.*

- **Con Node.js (npx serve / http-server):**
  ```powershell
  cd "d:\NO BORRAR\Desktop\SKILL SEGUIMIENTO"
  npx serve .
  ```

- **Con VS Code / Antigravity IDE:**
  Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

---

## 🎨 Decisiones Técnicas y de Diseño (Design System)

- **Estética Biomédica de Vanguardia:** Se implementó una paleta oscura basada en tonos *Deep Navy* (`#070b13`, `#0e1626`) combinada con acentos de neón cian (`#00e5ff`), índigo violeta (`#6366f1`) y verde esmeralda clínico (`#10b981`), generando una atmósfera de laboratorio de alta tecnología.
- **Glassmorphism y Efectos Ópticos:** Uso de `backdrop-filter: blur(14px)`, bordes sutiles con gradientes luminosos y sombras difusas (`box-shadow: 0 8px 32px rgba(0,0,0,0.45)`).
- **Tipografía Moderna:** 
  - Títulos y encabezados: `Outfit` (sans-serif geométrica con gran peso y presencia visual).
  - Texto de lectura: `Plus Jakarta Sans` (diseñada para legibilidad técnica y confort visual prolongado).
  - Elementos de código y metadatos: `JetBrains Mono`.
- **Rendimiento:** Cero dependencias externas pesadas, iconos vectoriales SVG limpios e integrados en línea para evitar retrasos de red y asegurar operatividad tanto online como offline.
- **Responsive Design:** Totalmente fluido y adaptable a pantallas de escritorio, portátiles, tabletas y teléfonos móviles mediante CSS Grid y Flexbox.

---

## 💡 Guía de Integración con la Skill de Gemini

Para replicar o expandir la Skill en el ecosistema de **Google Gemini** (vía Gemini Advanced, System Instructions o Google AI Studio), se utiliza el siguiente esquema de prompt de sistema:

```markdown
Eres una Skill especializada en Medicina Veterinaria, Genética Celular y Biología Reproductiva Animal.
Tu objetivo es asistir a estudiantes y médicos veterinarios en el dominio de la Meiosis y Gametogénesis en mamíferos domésticos.

Formato de Respuesta Requerido:
1. Precisión Científica: Utiliza la nomenclatura anatómica y citogenética oficial (ej. leptoteno, paquiteno, aneuploidía, cariotipo 2n).
2. Conexión Clínica-Zootécnica: Cada concepto celular debe vincularse obligatoriamente con fertilidad de rebaño, andrología, ginecología o biotecnología reproductiva (OPU, FIV, ICSI).
3. Salidas Estructuradas: Cuando se te solicite, responde en formato de Flashcard mnemotécnica, Trivia diagnóstica con justificación, o Resumen tabulado por especie.
```

---

## 🎓 Impacto en la Formación Médico-Veterinaria

1. **Comprensión Visual y Dinámica:** Sustituye los diagramas estáticos por visualizadores interactivos e infografías estructuradas.
2. **Autoevaluación Formativa:** Los estudiantes pueden diagnosticar sus lagunas de conocimiento de forma lúdica y sin estrés de examen mediante las trivias.
3. **Agilidad en el Repaso Pre-Examen:** Las flashcards con notas clínicas permiten repasar el 100% de los puntos evaluables en menos de 10 minutos.

---

## 📄 Créditos y Licencia

- **Diseño y Desarrollo:** Equipo de Desarrollo de Experiencias Educativas Veterinarias.
- **Recursos Multimedia:** Infografía oficial (`infografia.jpg`) y video explicativo (`video.mp4`) provistos para la Skill de Gemini.
- **Licencia:** Material educativo de libre distribución para fines académicos e investigativos en ciencias veterinarias.
