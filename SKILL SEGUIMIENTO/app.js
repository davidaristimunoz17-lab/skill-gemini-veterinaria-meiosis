/**
 * VETGENETICS GEMINI SKILL - INTERACTIVE ENGINE
 * Logic for Flashcards 3D, Interactive Trivia, Summary Tabs,
 * Lightbox Modal, and Gemini Prompt Simulator.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDemoTabs();
  initFlashcards();
  initTrivia();
  initSummaries();
  initLightbox();
  initSimulator();
  initVideoControls();
});

/* ===================================================================
   DEMO TABS SWITCHER
   =================================================================== */
function initDemoTabs() {
  const tabBtns = document.querySelectorAll('.demo-tab-btn');
  const panes = document.querySelectorAll('.demo-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

/* ===================================================================
   1. NAVBAR & NAVIGATION
   =================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
      });
    });
  }
}

/* ===================================================================
   2. FLASHCARDS 3D FLIP & CAROUSEL
   =================================================================== */
const flashcardsData = [
  {
    category: "Profase I · Paquiteno",
    species: "Genética Celular Veterinaria",
    question: "¿Qué evento crucial ocurre durante el Paquiteno de la Profase I y por qué es determinante en la variabilidad genética animal?",
    answer: "Ocurre el entrecruzamiento o <strong>crossing-over</strong> entre cromátidas no hermanas de cromosomas homólogos mediante los complejos sinaptonémicos.",
    clinicalNote: "Impacto Clínico: Fallos en el crossing-over provocan aneuploidías, arresto meiótico y muerte embrionaria precoz en programas de transferencia embrionaria en bovinos."
  },
  {
    category: "Gametogénesis · Macho",
    species: "Espermatogénesis Bovina (Bos taurus)",
    question: "¿Cuántas espermátidas funcionales resultan de un espermatocito primario tras completar la Meiosis I y II?",
    answer: "Se obtienen <strong>4 espermátidas haploides (n) funcionales</strong>, que luego sufrirán espermiogénesis para convertirse en espermatozoides maduros con motilidad progresiva.",
    clinicalNote: "Dato Zootécnico: En toros reproductores, el ciclo dura aproximadamente 61 días. El estrés térmico en Meiosis I degrada la integridad del ADN espermático."
  },
  {
    category: "Gametogénesis · Hembra",
    species: "Ovogénesis Equina y Canina",
    question: "¿En qué etapa meiótica se detiene el ovocito primario antes de la pubertad y cuándo reanuda su división?",
    answer: "Permanece detenido en <strong>Profase I (específicamente en Diploteno / Dictioteno)</strong>. Se reanuda con el pico preovulatorio de hormona luteinizante (LH).",
    clinicalNote: "Peculiaridad Canina: En perras, la ovulación ocurre en ovocito primario inmaduro (Profase I) y completa la Meiosis en el tercio distal del oviducto."
  },
  {
    category: "Citogenética Clínica",
    species: "Anomalías Cromosómicas",
    question: "¿Qué es la Translocación Robertsoniana 1/29 en bovinos y cómo afecta el rendimiento reproductivo del rebaño?",
    answer: "Es la fusión de los cromosomas acrocéntricos 1 y 29 (cariotipo 2n=59 en lugar de 2n=60). Provoca desequilibrio segregacional en Anafase I.",
    clinicalNote: "Impacto Veterinario: Disminuye la fertilidad entre 5% y 10% por degeneración de cigotos monosómicos o trisómicos. Crucial cribar toros de inseminación artificial."
  }
];

let currentCardIndex = 0;

function initFlashcards() {
  const cardWrapper = document.getElementById('flashcardWrapper');
  const prevBtn = document.getElementById('fcPrevBtn');
  const nextBtn = document.getElementById('fcNextBtn');
  const flipBtn = document.getElementById('fcFlipBtn');
  const counterEl = document.getElementById('fcCounter');

  if (!cardWrapper) return;

  function renderCard(index) {
    const data = flashcardsData[index];
    cardWrapper.classList.remove('flipped');

    document.getElementById('fcCategory').textContent = data.category;
    document.getElementById('fcSpecies').textContent = data.species;
    document.getElementById('fcQuestion').innerHTML = data.question;
    document.getElementById('fcAnswer').innerHTML = data.answer;
    document.getElementById('fcClinicalNote').innerHTML = data.clinicalNote;

    if (counterEl) {
      counterEl.textContent = `${index + 1} / ${flashcardsData.length}`;
    }
  }

  cardWrapper.addEventListener('click', () => {
    cardWrapper.classList.toggle('flipped');
  });

  if (flipBtn) {
    flipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cardWrapper.classList.toggle('flipped');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
      renderCard(currentCardIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
      renderCard(currentCardIndex);
    });
  }

  renderCard(0);
}

/* ===================================================================
   3. TRIVIAS INTERACTIVAS CON FEEDBACK CLÍNICO INMEDIATO
   =================================================================== */
const triviaQuestions = [
  {
    topic: "Genética Bovina & Meiosis I",
    question: "Durante un examen reproductivo en un toro semental de alto valor, detectas oligospermia severa. El análisis citogenético revela fallos durante la formación del complejo sinaptonémico. ¿En qué subfase de la Profase I ocurrió el defecto primario?",
    options: [
      "Leptoteno (condensación cromatínica)",
      "Cigoteno (sinapsis de cromosomas homólogos)",
      "Diacinesis (separación terminal de quiasmas)",
      "Telofase II (reconstrucción nuclear)"
    ],
    correct: 1,
    explanation: "¡Correcto! En el <strong>Cigoteno</strong> los cromosomas homólogos se alinean y forman el complejo sinaptonémico (bivalentes o tétradas). Si falla la sinapsis, los gametos se bloquean o segregan de forma aberrante."
  },
  {
    topic: "Ovogénesis en Caninos",
    question: "A diferencia de la mayoría de mamíferos domésticos que ovulan en Metafase II, ¿en qué estado de división nuclear ovula normalmente la hembra canina (Canis lupus familiaris)?",
    options: [
      "Ovocito maduro en Anafase II",
      "Ovocito secundario con un glóbulo polar liberado",
      "Ovocito primario inmaduro (detenido en Profase I)",
      "Óvulo haploide fertilizado"
    ],
    correct: 2,
    explanation: "¡Excelente! La perra ovula un <strong>ovocito primario en Profase I</strong>. Este requiere de 48 a 72 horas adicionales en el oviducto para expulsar el primer cuerpo polar y alcanzar Metafase II, momento ideal para la monta o inseminación."
  },
  {
    topic: "Citogenética & Aneuploidías",
    question: "¿Qué consecuencia meiótica produce la no disyunción de un par de cromosomas homólogos durante la Anafase I?",
    options: [
      "El 100% de los gametos resultantes serán viables y euploides",
      "El 50% de los gametos serán (n+1) y el otro 50% serán (n-1)",
      "Todos los gametos se vuelven tetraploides (4n)",
      "Solo el 25% de los gametos sufrirá mutación"
    ],
    correct: 1,
    explanation: "¡Exacto! La no disyunción en Meiosis I genera que <strong>todos los gametos resultantes sean aneuploides</strong>: la mitad portará un cromosoma extra (n+1) y la otra mitad carecerá de él (n-1), originando embriones trisómicos o monosómicos no viables."
  }
];

let currentTriviaIndex = 0;
let triviaScore = 0;

function initTrivia() {
  const qText = document.getElementById('triviaQuestion');
  const optionsContainer = document.getElementById('triviaOptions');
  const feedbackBox = document.getElementById('triviaFeedback');
  const scoreBadge = document.getElementById('triviaScoreBadge');
  const topicEl = document.getElementById('triviaTopic');
  const nextTriviaBtn = document.getElementById('nextTriviaBtn');

  if (!qText || !optionsContainer) return;

  function loadTriviaQuestion(index) {
    const currentQ = triviaQuestions[index];
    topicEl.innerHTML = `🧬 <span>${currentQ.topic}</span>`;
    qText.textContent = currentQ.question;
    optionsContainer.innerHTML = '';
    feedbackBox.className = 'trivia-feedback';
    feedbackBox.innerHTML = '';
    nextTriviaBtn.style.display = 'none';

    const letters = ['A', 'B', 'C', 'D'];

    currentQ.options.forEach((optText, i) => {
      const optBtn = document.createElement('button');
      optBtn.type = 'button';
      optBtn.className = 'trivia-option';
      optBtn.innerHTML = `<span class="opt-letter">${letters[i]}</span> <span>${optText}</span>`;
      
      optBtn.addEventListener('click', () => handleOptionClick(i, currentQ.correct, currentQ.explanation));
      optionsContainer.appendChild(optBtn);
    });
  }

  function handleOptionClick(selectedIndex, correctIndex, explanation) {
    const allOptions = optionsContainer.querySelectorAll('.trivia-option');
    allOptions.forEach(btn => btn.classList.add('disabled'));

    if (selectedIndex === correctIndex) {
      allOptions[selectedIndex].classList.add('correct');
      triviaScore += 100;
      feedbackBox.className = 'trivia-feedback visible success';
      feedbackBox.innerHTML = `
        <div class="feedback-title">✓ ¡Respuesta Correcta! (+100 pts)</div>
        <div class="feedback-text">${explanation}</div>
      `;
    } else {
      allOptions[selectedIndex].classList.add('incorrect');
      allOptions[correctIndex].classList.add('correct');
      feedbackBox.className = 'trivia-feedback visible error';
      feedbackBox.innerHTML = `
        <div class="feedback-title">✗ Diagnóstico Incorrecto</div>
        <div class="feedback-text">${explanation}</div>
      `;
    }

    if (scoreBadge) {
      scoreBadge.textContent = `Puntaje: ${triviaScore} pts`;
    }

    nextTriviaBtn.style.display = 'inline-flex';
    nextTriviaBtn.textContent = (currentTriviaIndex + 1 < triviaQuestions.length) 
      ? 'Siguiente Caso Clínico →' 
      : 'Reiniciar Desafío ↻';
  }

  nextTriviaBtn.addEventListener('click', () => {
    if (currentTriviaIndex + 1 < triviaQuestions.length) {
      currentTriviaIndex++;
      loadTriviaQuestion(currentTriviaIndex);
    } else {
      currentTriviaIndex = 0;
      triviaScore = 0;
      scoreBadge.textContent = `Puntaje: 0 pts`;
      loadTriviaQuestion(0);
    }
  });

  loadTriviaQuestion(0);
}

/* ===================================================================
   4. RESÚMENES ESTRUCTURADOS (PESTAÑAS & COPIADO)
   =================================================================== */
const summariesData = {
  bovinos: {
    title: "Genética y Meiosis en Bovinos (Bos taurus / indicus)",
    cariotipo: "2n = 60 cromosomas (29 pares acrocéntricos + par sexual X/Y submetacéntrico)",
    gametogenesis: "Espermatogénesis continua con ciclo de 61 días. Ovulación espontánea 10-14 h post-estro en Metafase II.",
    puntosClave: [
      "Translocación Robertsoniana 1/29: Causa más frecuente de subfertilidad cromosómica congénita.",
      "Entrecruzamiento en Paquiteno: Clave para la selección genómica de rasgos lecheros y cárnicos.",
      "Susceptibilidad al estrés calórico: Induce apoptosis en espermatocitos en paquiteno y ovocitos en dictioteno.",
      "Biotecnología Reproductiva: OPU (Ovum Pick-Up) y Maduración In Vitro (MIV) hasta Metafase II."
    ]
  },
  equinos: {
    title: "Genética y Meiosis en Equinos (Equus caballus)",
    cariotipo: "2n = 64 cromosomas (13 pares metacéntricos/submetacéntricos + 18 acrocéntricos)",
    gametogenesis: "Espermatogénesis estacional fotoperiodo-dependiente (~57 días). Fosa de ovulación exclusiva.",
    puntosClave: [
      "Síndrome de Turner Equino (63,XO): Frecuente causa de disgenesia gonadal y esterilidad en yeguas.",
      "Ovulación exclusiva en la fosa de ovulación del ovario invertido equino.",
      "Meiosis ovocitaria regulada por gonadotropinas estacionales (LH/FSH).",
      "ICSI (Inyección Intracitoplasmática): Técnica estándar en équidos debido a la dureza de la zona pelúcida."
    ]
  },
  caninos: {
    title: "Genética y Meiosis en Caninos (Canis lupus familiaris)",
    cariotipo: "2n = 78 cromosomas (todos los autosomas acrocéntricos de tamaño decreciente)",
    gametogenesis: "Monoéstrica no estacional o biéstrica. Ovulación en estado inmaduro de Profase I.",
    puntosClave: [
      "Ovulación en Profase I (vesícula germinal): Caso único en mamíferos domésticos junto al zorro.",
      "Maduración post-ovulatoria: Requiere 48-72h intraluminal en oviducto para alcanzar Metafase II.",
      "Determinación de progesterona sérica: Imprescindible para estimar el momento meiótico y ovulatorio.",
      "Alta tasa de aneuploidías espontáneas asociadas a la consanguinidad en razas braquicefálicas."
    ]
  }
};

function initSummaries() {
  const speciesBtns = document.querySelectorAll('.species-btn');
  const titleEl = document.getElementById('summaryTitle');
  const bodyEl = document.getElementById('summaryBody');
  const copyBtn = document.getElementById('copySummaryBtn');

  if (!speciesBtns.length || !titleEl) return;

  function renderSummary(speciesKey) {
    const data = summariesData[speciesKey];
    if (!data) return;

    titleEl.textContent = data.title;
    bodyEl.innerHTML = `
      <p style="margin-bottom: 0.8rem;"><strong>Cariotipo:</strong> ${data.cariotipo}</p>
      <p style="margin-bottom: 1.2rem;"><strong>Fisiología Gamética:</strong> ${data.gametogenesis}</p>
      <h5 style="color: var(--primary); margin-bottom: 0.6rem; font-size: 0.95rem;">Puntos Clínicos Clave para Examen:</h5>
      <ul class="summary-keypoints">
        ${data.puntosClave.map(pt => `<li>${pt}</li>`).join('')}
      </ul>
    `;
  }

  speciesBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      speciesBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSummary(btn.dataset.species);
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const activeBtn = document.querySelector('.species-btn.active');
      const speciesKey = activeBtn ? activeBtn.dataset.species : 'bovinos';
      const data = summariesData[speciesKey];

      const textToCopy = `=== ${data.title} ===\nCariotipo: ${data.cariotipo}\nGametogénesis: ${data.gametogenesis}\n\nPuntos Clave:\n${data.puntosClave.map(p => `• ${p}`).join('\n')}\n\nFuente: Skill de Gemini en Medicina Veterinaria (Genética y Meiosis)`;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('✓ Resumen clínico copiado al portapapeles');
      }).catch(() => {
        showToast('Resumen seleccionado');
      });
    });
  }

  renderSummary('bovinos');
}

/* ===================================================================
   5. LIGHTBOX MODAL PARA INFOGRAFÍA
   =================================================================== */
function initLightbox() {
  const preview = document.getElementById('infographicPreview');
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const zoomResetBtn = document.getElementById('zoomResetBtn');
  const modalImg = document.getElementById('lightboxImg');

  if (!modal || !preview) return;

  let zoomLevel = 1;

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    zoomLevel = 1;
    updateZoom();
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateZoom() {
    if (modalImg) {
      modalImg.style.transform = `scale(${zoomLevel})`;
      modalImg.style.transition = 'transform 0.25s ease';
    }
  }

  preview.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (zoomLevel < 2.5) {
        zoomLevel += 0.25;
        updateZoom();
      }
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (zoomLevel > 0.75) {
        zoomLevel -= 0.25;
        updateZoom();
      }
    });
  }

  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      zoomLevel = 1;
      updateZoom();
    });
  }
}

/* ===================================================================
   6. SIMULADOR DE PROMPTS GEMINI (INTERACTIVE PLAYGROUND)
   =================================================================== */
const simulatorKnowledge = {
  "paquiteno bovino": {
    prompt: "Explica el Paquiteno en Meiosis I bovina y su relación con anomalías zootécnicas",
    response: `<strong>[GEMINI VET-SKILL / ANÁLISIS MEIÓTICO BOVINO]</strong><br><br>
1. <strong>Definición Citológica:</strong> El paquiteno es la tercera subfase de la Profase I. Se completa la sinapsis mediante el complejo sinaptonémico y ocurre el <em>crossing-over</em> entre cromosomas homólogos (2n=60 en ganado vacuno).<br><br>
2. <strong>Peculiaridad en Ganadería:</strong> Una recombinación no equilibrada en toros reproductores porta el riesgo de translocaciones (ej. Robertsoniana rob 1/29).<br><br>
3. <strong>Diagnóstico Aplicado:</strong> Si el toro presenta más del 15% de espermatozoides con gotas citoplasmáticas o anomalías de cabeza nuclear, se recomienda cariotipificación antes de congelar dosis de pajillas seminales.`
  },
  "trivia ovogenesis": {
    prompt: "Genera una trivia rápida de ovogénesis canina",
    response: `<strong>[GEMINI VET-SKILL / TRIVIA GENERADA]</strong><br><br>
🎯 <strong>Pregunta:</strong> ¿Por qué un óvulo canino recién ovulado NO puede ser fecundado inmediatamente por un espermatozoide?<br><br>
A) La zona pelúcida está calcificada temporalmente.<br>
B) Es ovulado como ovocito primario inmaduro en Profase I y necesita 48-72h para expulsar el 1er cuerpo polar.<br>
C) El pH vaginal destruye el ovocito si no hay progesterona superior a 25 ng/mL.<br><br>
💡 <em>Respuesta Correcta: B. La meiosis canina madura exclusivamente en el oviducto post-ovulación.</em>`
  },
  "resumen no disyuncion": {
    prompt: "Resume el impacto de la no disyunción meiótica en biotecnología reproductiva",
    response: `<strong>[GEMINI VET-SKILL / SÍNTESIS EJECUTIVA]</strong><br><br>
• <strong>Concepto:</strong> Fallo en la separación de homólogos (Meiosis I) o cromátidas hermanas (Meiosis II).<br>
• <strong>Efecto en FIV Bovina:</strong> Origina embriones aneuploides que se detienen antes del estadio de blastocisto (día 7-8).<br>
• <strong>Detección:</strong> Cribado preimplantacional (PGD) mediante biopsia de trofoectodermo en programas de transferencia genética élite.`
  }
};

function initSimulator() {
  const inputEl = document.getElementById('simInput');
  const sendBtn = document.getElementById('simSendBtn');
  const responseArea = document.getElementById('simResponseArea');
  const chips = document.querySelectorAll('.prompt-chip');

  if (!inputEl || !sendBtn || !responseArea) return;

  function executePrompt(text) {
    inputEl.value = text;
    responseArea.innerHTML = `
      <div class="ai-header">
        <span class="pulse-dot"></span> Procesando caso clínico con Gemini Vet-Skill...
      </div>
      <p style="color: var(--text-dim); font-style: italic;">Sintetizando bases genéticas y terminología zootécnica...</p>
    `;

    setTimeout(() => {
      let foundKey = Object.keys(simulatorKnowledge).find(k => text.toLowerCase().includes(k.split(' ')[0]));
      let result = simulatorKnowledge[foundKey] || {
        response: `<strong>[GEMINI VET-SKILL / RESPUESTA GENERADA]</strong><br><br>
Analizando consulta: <em>"${text}"</em>.<br><br>
En medicina veterinaria, la meiosis y gametogénesis animal se estructuran en dos divisiones consecutivas que reducen el cariotipo diploide (2n) a haploide (n). La Skill correlaciona este proceso celular con la patología reproductiva, evaluación andrológica y selección zootécnica en rumiantes, équidos y carnívoros domésticos.`
      };

      responseArea.innerHTML = `
        <div class="ai-header">
          <span style="color: var(--primary);">✦</span> Gemini VetGenetics Engine
        </div>
        <div>${result.response}</div>
      `;
    }, 600);
  }

  sendBtn.addEventListener('click', () => {
    if (inputEl.value.trim()) {
      executePrompt(inputEl.value.trim());
    }
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputEl.value.trim()) {
      executePrompt(inputEl.value.trim());
    }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const promptQuery = chip.dataset.query;
      executePrompt(promptQuery);
    });
  });
}

/* ===================================================================
   7. VIDEO PLAYER TIME JUMPERS & HELPERS
   =================================================================== */
function initVideoControls() {
  const video = document.getElementById('vetVideoPlayer');
  const jumpButtons = document.querySelectorAll('.video-jump-btn');

  if (!video || !jumpButtons.length) return;

  jumpButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const seconds = parseFloat(btn.dataset.time || '0');
      video.currentTime = seconds;
      video.play().catch(() => {});
      showToast(`Saltando al minuto ${btn.textContent.trim()}`);
    });
  });
}

/* ===================================================================
   8. TOAST NOTIFICATION UTILITY
   =================================================================== */
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}
