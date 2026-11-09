/**
 * PLATAFORMA DIGITAL · INGENIERÍA ELÉCTRICA (UNAL MEDELLÍN)
 * Desarrollado por: Santiago Escobar Arias · Representante de Sistemas
 * Colaborador: Kevin David Aristizabal Giraldo · Karistizabalg@unal.edu.co
 * © 2026 Santiago Escobar Arias. Todos los derechos reservados.
 * Obra protegida por la Ley 23 de 1982 y Decisión 351 (CAN).
 */
/* =============================================
   MÓDULO INICIO · INGENIERÍA ELÉCTRICA
   - Carga programa.json al inicio
   - Carga perfil.json y grupos.json por intersección
   - Laboratorio de Alta Tensión & Bobina de Tesla Interactiva
   - Simulador Dinámico de Flujo de Potencia & Redes Inteligentes
   ============================================= */

const ICONOS_PERFIL = {
  potencia: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  maquinas: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v5M12 16v5M3 12h5M16 12h5"/>',
  protecciones: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M13 8l-3 4h4l-2 4"/>',
  transicion: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
  control: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 15V9l4 6V9"/><path d="M17 9v6"/>',
  renovables: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M12 6a6 6 0 0 1 6 6"/>',
  ciencia: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/>',
};

const ICONOS_RUTAS = {
  potencia: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  maquinas: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/>',
  protecciones: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  renovables: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  control: '<path d="M3 12h4l3-9 4 18 3-9h4"/>',
};

const icono = (nombre) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONOS_PERFIL[nombre] || ICONOS_PERFIL.potencia}</svg>`;
const iconoRuta = (nombre) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONOS_RUTAS[nombre] || ICONOS_RUTAS.potencia}</svg>`;

const ICONO_SELLO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/><path d="m9.5 9 1.8 1.8L15 7.2"/></svg>';


/* ---------- 1. Programa ---------- */

function pintarPrograma(p) {
  // Renderizado en la barra conductora curricular
  $('#portada-cifras').innerHTML = p.cifras
    .map((c) => `
      <li class="hero-tesla__cifra-nodo">
        <span class="hero-tesla__cifra-val">${esc(c.valor)}</span>
        <span class="hero-tesla__cifra-txt">${esc(c.texto)}</span>
      </li>`)
    .join('');

  const acreditacion = p.acreditacion;
  $('#programa-contenido').innerHTML = `
    <div class="seccion-titulo">
      <p class="seccion-titulo__antetitulo">${esc(p.facultad)} · ${esc(p.sede)}</p>
      <h2 id="programa-titulo">Definición y Misión del Pregrado</h2>
      <p class="seccion-titulo__intro">Ingeniería Eléctrica · Rigor científico, soberanía energética y liderazgo en la transición sostenible</p>
    </div>

    <div class="programa__rejilla">
      <div class="programa__texto">
        <span class="programa__lema">Lema de la Facultad: ${esc(p.lema)}</span>
        <div class="programa__parrafos">
          ${p.descripcion.map((parrafo) => `<p>${esc(parrafo)}</p>`).join('')}
        </div>
      </div>
      <ul class="ficha">
        ${p.ficha.map((f) => `
          <li><span class="ficha__etiqueta">${esc(f.etiqueta)}</span><span class="ficha__valor">${esc(f.valor)}</span></li>`).join('')}
      </ul>
    </div>

    <!-- RUTAS CURRICULARES / CAMPOS DE APLICACIÓN -->
    <div class="rutas-curriculares" id="rutas-curriculares">
      <div class="seccion-titulo seccion-titulo--rutas">
        <p class="seccion-titulo__antetitulo">Campos de profundización y aplicación</p>
        <h3 class="rutas__titulo">Ejes Curriculares Estratégicos</h3>
        <p class="seccion-titulo__intro">El plan curricular articula cinco grandes áreas tecnológicas que preparan al ingeniero electricista para liderar el sector energético global:</p>
      </div>

      <div class="rutas__grid">
        ${(p.rutas || []).map((ruta, idx) => `
          <article class="ruta-card" style="--color-ruta: ${ruta.color}">
            <div class="ruta-card__encabezado">
              <span class="ruta-card__numero">EJE 0${idx + 1}</span>
              <span class="ruta-card__icono">${iconoRuta(ruta.icono)}</span>
            </div>
            <h4 class="ruta-card__nombre">${esc(ruta.nombre)}</h4>
            <p class="ruta-card__descripcion">${esc(ruta.descripcion)}</p>
            <div class="ruta-card__pie">
              <a href="malla.html" class="ruta-card__enlace" title="Ver materias de ${esc(ruta.nombre)} en la malla">
                <span>Ver en la malla</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </article>`).join('')}
      </div>
    </div>

    <!-- ACREDITACIÓN DE CALIDAD -->
    <div class="acreditacion">
      <div class="acreditacion__cabecera">
        <span class="acreditacion__sello-icono">${ICONO_SELLO}</span>
        <div>
          <span class="acreditacion__antetitulo">Calidad Académica Certificada</span>
          <h3 class="acreditacion__estado">${esc(acreditacion.estado)}</h3>
        </div>
      </div>
      <div class="acreditacion__rejilla">
        ${acreditacion.hitos.map((h, i) => `
          <div class="acreditacion__tarjeta ${i === 0 ? 'acreditacion__tarjeta--renovacion' : ''}">
            <div class="acreditacion__tarjeta-encabezado">
              <span class="acreditacion__anio-badge">${esc(h.anio)}</span>
              <span class="acreditacion__hito-tipo">${i === 0 ? 'Trayectoria Histórica' : 'Certificación y Excelencia'}</span>
            </div>
            <p class="acreditacion__texto">${esc(h.texto)}</p>
          </div>`).join('')}
      </div>
      <div class="acreditacion__pie">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="acreditacion__info-icono" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <p class="acreditacion__nota">${esc(acreditacion.nota)}</p>
      </div>
    </div>

    <p class="fuentes">Fuentes oficiales:
      ${p.fuentes.map((f) => `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.titulo)}</a>`).join(' · ')}
    </p>`;
}


/* ---------- 2. Perfil del egresado ---------- */

function pintarPerfil(perfil) {
  $('#perfil-contenido').innerHTML = `
    <div class="seccion-titulo">
      <p class="seccion-titulo__antetitulo">Competencias y Proyección</p>
      <h2 id="perfil-titulo">${esc(perfil.titulo)}</h2>
      <p class="seccion-titulo__intro">${esc(perfil.intro)}</p>
    </div>
    <ul class="perfil__tarjetas">
      ${perfil.rasgos.map((r) => `
        <li class="rasgo">
          <span class="rasgo__icono">${icono(r.icono)}</span>
          <h3>${esc(r.titulo)}</h3>
          <p>${esc(r.texto)}</p>
        </li>`).join('')}
    </ul>
    <p class="perfil__fuente">${esc(perfil.fuente)}</p>`;
}


/* ---------- 3. Capítulos Estudiantiles con Diseño Bombilla Bacano ---------- */

function pintarGrupos(grupos) {
  const bombillas = grupos.map((grupo) => {
    const destino = grupo.enlace ? `href="${esc(grupo.enlace)}" target="_blank" rel="noopener noreferrer"` : '';
    
    return `
      <li class="tarjeta-bombilla" style="--color-capitulo: ${esc(grupo.color)}; --color-capitulo-acento: ${esc(grupo.colorAcento || '#FFBB02')};">
        <div class="bombilla-socket-wrap">
          <div class="bombilla-lampara">
            <!-- Halo de resplandor electromagnético -->
            <div class="bombilla-glow" aria-hidden="true"></div>
            
            <!-- Filamento de incandescencia interior -->
            <div class="bombilla-filamento" aria-hidden="true">
              <svg viewBox="0 0 100 100" class="bombilla-filamento-svg">
                <path d="M38 72 L38 46 Q38 32 46 32 Q50 32 50 28 Q50 32 54 32 Q62 32 62 46 L62 72" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
                <circle cx="50" cy="28" r="3" fill="currentColor"/>
              </svg>
            </div>

            <!-- Globo de cristal con emblema oficial del capítulo -->
            <a class="bombilla-globo" ${destino} aria-label="Visitar Instagram de ${esc(grupo.nombre)}" title="Clic para visitar ${esc(grupo.nombre)}">
              <div class="bombilla-emblema">
                <img src="${esc(grupo.logo)}" alt="Logo de ${esc(grupo.nombre)}" class="bombilla-emblema-img" loading="lazy">
              </div>
              <div class="bombilla-reflejo" aria-hidden="true"></div>
              <div class="bombilla-badge-ig">
                <span>${esc(grupo.usuarioIg || 'Instagram')}</span>
              </div>
            </a>

            <!-- Rosca metálica Edison (E27) -->
            <div class="bombilla-rosca" aria-hidden="true">
              <span class="rosca-aro"></span>
              <span class="rosca-aro"></span>
              <span class="rosca-aro"></span>
              <span class="rosca-pie"></span>
            </div>
          </div>
        </div>

        <div class="tarjeta-bombilla__info">
          <span class="tarjeta-bombilla__tipo">${esc(grupo.tipo)}</span>
          <h3 class="tarjeta-bombilla__nombre">${esc(grupo.nombre)}</h3>
          ${grupo.subtitulo ? `<p class="tarjeta-bombilla__subtitulo">${esc(grupo.subtitulo)}</p>` : ''}
          <p class="tarjeta-bombilla__desc">${esc(grupo.descripcion)}</p>

          <div class="tarjeta-bombilla__pie">
            <a class="tarjeta-bombilla__btn" ${destino}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>Conectar en Instagram</span>
            </a>
          </div>
        </div>
      </li>`;
  }).join('');

  $('#grupos-contenido').innerHTML = `
    <div class="seccion-titulo">
      <p class="seccion-titulo__antetitulo">Comunidad & Liderazgo Tecnológico</p>
      <h2 id="grupos-titulo">Capítulos y Grupos Estudiantiles</h2>
      <p class="seccion-titulo__intro">Nuestra carrera cuenta con capítulos de la prestigiosa sociedad global IEEE y colectivos técnicos que iluminan el conocimiento en potencia, aplicaciones industriales y robótica. Explora y únete a sus iniciativas.</p>
    </div>
    <ul class="grupos__grid-bombillas">${bombillas}</ul>`;
}


/* ---------- 4. Simulador Interactivo de Flujo de Potencia & Redes Inteligentes ---------- */

const DATOS_MODOS_SIMULADOR = {
  'generacion': {
    badge: 'RÉGIMEN OPERATIVO 01 · DESPACHO ECONÓMICO',
    titulo: 'Generación y Despacho Energético',
    desc: 'Las centrales hidroeléctricas, térmicas y los parques solares y eólicos entregan potencia activa y reactiva al Sistema Interconectado Nacional. El control automático de generación (AGC) y los gobernadores de velocidad mantienen la frecuencia exactamente en 60.00 Hz.',
    tension: '13.8 kV a 230 kV',
    frec: '60.00 Hz',
    potencia: '1,280 MW',
    tiempo: '< 40 ms (Inercia)',
    claseVisual: 'modo-generacion',
    materias: [
      'Sistemas de Generación de Energía',
      'Máquinas Eléctricas I y II',
      'Termodinámica General'
    ]
  },
  'transmision': {
    badge: 'RÉGIMEN OPERATIVO 02 · EXTRA ALTA TENSIÓN (500 kV)',
    titulo: 'Transmisión Troncal & Líneas 500 kV',
    desc: 'Transporte masivo de energía eléctrica a largas distancias mediante líneas de extra alta tensión (EAT) de 230 kV y 500 kV. Se aplican modelos de parámetros distribuidos (modelo Π), compensación reactiva serie/paralelo y análisis de estabilidad angular para evitar el colapso de voltaje.',
    tension: '500.0 kV',
    frec: '60.01 Hz',
    potencia: '3,450 MVA',
    tiempo: 'Criterio N-1 Seguro',
    claseVisual: 'modo-transmision',
    materias: [
      'Modelado de Líneas de Transmisión',
      'Análisis de Sistemas de Potencia',
      'Diseño de Redes de Transmisión y Distribución'
    ]
  },
  'smartgrid': {
    badge: 'RÉGIMEN OPERATIVO 03 · REDES INTELIGENTES & FNCER',
    titulo: 'Smart Grids & Generación Distribuida',
    desc: 'Integración bidireccional de parques fotovoltaicos, generación eólica, sistemas de baterías BESS y medidores inteligentes (AMI). La red se autorrecupera (self-healing), gestiona la demanda dinámica y abastece microrredes aisladas e interconectadas.',
    tension: '13.2 kV / 220V',
    frec: '60.00 Hz',
    potencia: '450 MW Renovable',
    tiempo: 'Respuesta Inmediata',
    claseVisual: 'modo-smartgrid',
    materias: [
      'Instalaciones Eléctricas Industriales',
      'Automatización de Sistemas Eléctricos',
      'Modelado de Sistemas Fotovoltaicos'
    ]
  },
  'protecciones': {
    badge: 'RÉGIMEN OPERATIVO 04 · PROTECCIONES & SUBESTACIÓN DIGITAL',
    titulo: 'Protecciones Eléctricas & Subestación Digital',
    desc: 'Supervisión en tiempo real con relés numéricos multifunción (distancia ANSI 21, diferencial ANSI 87, sobrecorriente ANSI 50/51) bajo la norma IEC 61850 (mensajería GOOSE). Detecta y despeja fallas trifásicas en menos de 35 milisegundos salvaguardando equipos y líneas.',
    tension: '230 kV / 115 kV',
    frec: '60.00 Hz',
    potencia: 'Selectividad 100%',
    tiempo: 'Despeje en 32 ms',
    claseVisual: 'modo-protecciones',
    materias: [
      'Sistemas de Protecciones Eléctricas',
      'Automatización de Sistemas Eléctricos',
      'Alta Tensión'
    ]
  }
};

function configurarSimuladorPotencia() {
  const tabs = $$('.simulador-tab');
  const visualBox = $('#simulador-visual');
  if (!tabs.length || !visualBox) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const modo = tab.dataset.modo;
      if (!modo || !DATOS_MODOS_SIMULADOR[modo]) return;

      tabs.forEach((t) => {
        t.classList.remove('is-activa');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-activa');
      tab.setAttribute('aria-selected', 'true');

      actualizarSimulador(modo);
    });
  });
}

function actualizarSimulador(modo) {
  const datos = DATOS_MODOS_SIMULADOR[modo];
  if (!datos) return;

  const visualBox = $('#simulador-visual');
  if (visualBox) {
    visualBox.className = `simulador-visual ${datos.claseVisual}`;
  }

  const badge = $('#sim-badge');
  const titulo = $('#sim-titulo');
  const desc = $('#sim-desc');
  const tension = $('#sim-tension');
  const frec = $('#sim-frec');
  const potencia = $('#sim-potencia');
  const tiempo = $('#sim-tiempo');
  const materias = $('#sim-materias');

  if (badge) badge.textContent = datos.badge;
  if (titulo) titulo.textContent = datos.titulo;
  if (desc) desc.textContent = datos.desc;
  if (tension) tension.textContent = datos.tension;
  if (frec) frec.textContent = datos.frec;
  if (potencia) potencia.textContent = datos.potencia;
  if (tiempo) tiempo.textContent = datos.tiempo;

  if (materias) {
    materias.innerHTML = datos.materias
      .map((m) => `<a href="malla.html" class="materia-chip">${esc(m)}</a>`)
      .join('');
  }
}


/* ---------- 5. Carga de datos diferida ---------- */

const SECCIONES = {
  perfil: () => cargarDatos('perfil').then(pintarPerfil),
  grupos: () => cargarDatos('grupos').then(pintarGrupos),
};

function cargarSeccion(seccion) {
  const cargar = SECCIONES[seccion.dataset.carga];
  if (cargar) {
    cargar().catch((error) => mostrarErrorDeCarga(seccion.querySelector('.contenedor'), error));
  }
}

// Carga inicial
cargarDatos('programa')
  .then(pintarPrograma)
  .catch((error) => mostrarErrorDeCarga($('#programa-contenido'), error));

configurarSimuladorPotencia();
iniciarLogoTesla();

const porCargar = $$('[data-carga]');
if ('IntersectionObserver' in window) {
  const vigilante = new IntersectionObserver((entradas) => {
    entradas.filter((e) => e.isIntersecting).forEach((e) => {
      vigilante.unobserve(e.target);
      cargarSeccion(e.target);
    });
  }, { rootMargin: '400px 0px' });
  porCargar.forEach((seccion) => vigilante.observe(seccion));
} else {
  porCargar.forEach(cargarSeccion);
}


/* =========================================================
   6. LOGO TESLA RESONANTE — EFECTO BOBINA & RAYOS INTERACTIVOS
   - El logo oficial actúa como una bobina de Tesla / esfera de plasma
   - Emite un halo continuo de arcos voltaicos y micro-descargas
   - Atrae los rayos directamente hacia el cursor o dedo al interactuar
   ========================================================= */

function iniciarLogoTesla() {
  const canvas = $('#canvas-logo-tesla');
  const escenario = $('#logo-escenario-tesla');
  const logo = $('#logo-electrica-emisor');
  const heroSection = $('#hero-tesla');
  if (!canvas || !escenario || !logo) return;

  const ctx = canvas.getContext('2d');
  let dpr = window.devicePixelRatio || 1;
  let W = 0;
  let H = 0;
  let cx = 0;
  let cy = 0;
  let R_logo = 60;

  function redimensionar() {
    W = escenario.clientWidth || 380;
    H = escenario.clientHeight || 380;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    cx = W * 0.5;
    cy = H * 0.5;
    R_logo = (logo.offsetWidth * 0.5) || (W * 0.17);
  }

  redimensionar();
  window.addEventListener('resize', redimensionar);

  let mouseX = -1000;
  let mouseY = -1000;
  let mouseActivo = false;
  let pulsoImpacto = 0;

  function actualizarCursor(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    mouseX = clientX - rect.left;
    mouseY = clientY - rect.top;
    mouseActivo = true;
  }

  function desactivarCursor() {
    mouseActivo = false;
    mouseX = -1000;
    mouseY = -1000;
  }

  // Interacción en el escenario del logo
  escenario.addEventListener('mousemove', (e) => actualizarCursor(e.clientX, e.clientY));
  escenario.addEventListener('mouseleave', desactivarCursor);
  escenario.addEventListener('click', (e) => {
    actualizarCursor(e.clientX, e.clientY);
    pulsoImpacto = 18;
  });

  // Eventos táctiles para móviles y tablets (dedo del usuario)
  escenario.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      actualizarCursor(e.touches[0].clientX, e.touches[0].clientY);
      pulsoImpacto = 18;
    }
  }, { passive: true });

  escenario.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      actualizarCursor(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  escenario.addEventListener('touchend', desactivarCursor);

  // También responder si el cursor está en el Hero cerca del logo
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const lx = e.clientX - rect.left;
      const ly = e.clientY - rect.top;
      const dist = Math.hypot(lx - cx, ly - cy);
      if (dist < W * 0.72) {
        mouseX = lx;
        mouseY = ly;
        mouseActivo = true;
      }
    });
  }

  // Algoritmo fractal de descarga de plasma
  function generarRayo(x0, y0, x1, y1, pasos, rugosidad, probRama) {
    const ramas = [];
    const puntos = [{ x: x0, y: y0 }];

    const dx = x1 - x0;
    const dy = y1 - y0;
    const distTotal = Math.hypot(dx, dy);

    for (let i = 1; i < pasos; i++) {
      const fraccion = i / pasos;
      const baseX = x0 + dx * fraccion;
      const baseY = y0 + dy * fraccion;

      const perpX = -dy / distTotal;
      const perpY = dx / distTotal;
      const jitter = (Math.random() - 0.5) * rugosidad * (1 - fraccion * 0.35);

      const px = baseX + perpX * jitter;
      const py = baseY + perpY * jitter;
      puntos.push({ x: px, y: py });

      if (probRama > 0 && Math.random() < probRama && i < pasos - 2) {
        const anguloBase = Math.atan2(dy, dx);
        const anguloRama = anguloBase + (Math.random() > 0.5 ? 1 : -1) * (0.35 + Math.random() * 0.5);
        const longRama = (distTotal * (1 - fraccion)) * (0.3 + Math.random() * 0.45);
        const subX1 = px + Math.cos(anguloRama) * longRama;
        const subY1 = py + Math.sin(anguloRama) * longRama;

        ramas.push(...generarRayo(px, py, subX1, subY1, Math.max(3, Math.floor(pasos * 0.5)), rugosidad * 0.6, 0));
      }
    }

    puntos.push({ x: x1, y: y1 });
    return [{ puntos }, ...ramas];
  }

  let frameTick = 0;

  function render() {
    ctx.clearRect(0, 0, W, H);
    frameTick++;

    if (pulsoImpacto > 0) pulsoImpacto--;

    // 1. Halo electromagnético continuo alrededor del logo
    const haloMin = R_logo + 4;
    const haloMax = R_logo + 46 + Math.sin(frameTick * 0.1) * 8 + (pulsoImpacto > 0 ? 22 : 0);
    const gradCorona = ctx.createRadialGradient(cx, cy, haloMin, cx, cy, haloMax);
    gradCorona.addColorStop(0, 'rgba(0, 229, 255, 0.45)');
    gradCorona.addColorStop(0.35, 'rgba(255, 208, 0, 0.22)');
    gradCorona.addColorStop(0.7, 'rgba(39, 175, 201, 0.1)');
    gradCorona.addColorStop(1, 'transparent');

    ctx.fillStyle = gradCorona;
    ctx.beginPath();
    ctx.arc(cx, cy, haloMax, 0, Math.PI * 2);
    ctx.fill();

    // 2. Anillo ionizado perimetral en el contorno del logo
    ctx.strokeStyle = (frameTick % 6 < 3) ? 'rgba(0, 229, 255, 0.7)' : 'rgba(255, 208, 0, 0.7)';
    ctx.lineWidth = 1.6;
    ctx.shadowColor = '#00E5FF';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(cx, cy, R_logo + 2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;

    const todosLosRayos = [];

    // 3. Rayos de plasma en halo que irradian en 360 grados
    const numRayosHalo = 7 + (pulsoImpacto > 0 ? 5 : 0);
    for (let r = 0; r < numRayosHalo; r++) {
      const baseAngle = (r / numRayosHalo) * Math.PI * 2 + (frameTick * 0.015);
      const jitterAngle = baseAngle + (Math.random() - 0.5) * 0.35;
      const x0 = cx + Math.cos(jitterAngle) * (R_logo + 2);
      const y0 = cy + Math.sin(jitterAngle) * (R_logo + 2);

      const lenRay = 22 + Math.random() * 32 + (pulsoImpacto > 0 ? 25 : 0);
      const x1 = cx + Math.cos(jitterAngle) * (R_logo + lenRay);
      const y1 = cy + Math.sin(jitterAngle) * (R_logo + lenRay);

      const colorHalo = (r % 2 === 0) ? 'rgba(0, 229, 255, 0.65)' : 'rgba(255, 208, 0, 0.6)';
      const colorCuerpo = (r % 2 === 0) ? '#00E5FF' : '#FFD000';

      todosLosRayos.push({
        ramas: generarRayo(x0, y0, x1, y1, 5, 14, 0.25),
        colorHalo,
        colorCuerpo,
        colorCore: '#FFFFFF'
      });
    }

    // 4. Rayo concentrado hacia el cursor / dedo del usuario
    const distMouse = Math.hypot(mouseX - cx, mouseY - cy);
    const cursorCerca = mouseActivo && distMouse > (R_logo + 5) && distMouse < (W * 0.68);

    if (cursorCerca) {
      // Origen del rayo: en el punto del contorno del logo más cercano al dedo/cursor
      const anguloCursor = Math.atan2(mouseY - cy, mouseX - cx);
      const origenX = cx + Math.cos(anguloCursor) * (R_logo + 2);
      const origenY = cy + Math.sin(anguloCursor) * (R_logo + 2);

      const pasosRay = Math.max(6, Math.min(22, Math.floor(distMouse / 14)));
      const rugRay = Math.min(34, distMouse * 0.18);

      // Rayo principal de alta tensión hacia el dedo
      todosLosRayos.push({
        ramas: generarRayo(origenX, origenY, mouseX, mouseY, pasosRay, rugRay, 0.5),
        colorHalo: 'rgba(0, 229, 255, 0.85)',
        colorCuerpo: '#00E5FF',
        colorCore: '#FFFFFF'
      });

      // Rayo armónico secundario en amarillo volt
      if (Math.random() > 0.3) {
        const anguloDesfase = anguloCursor + (Math.random() - 0.5) * 0.2;
        const subOx = cx + Math.cos(anguloDesfase) * (R_logo + 2);
        const subOy = cy + Math.sin(anguloDesfase) * (R_logo + 2);
        todosLosRayos.push({
          ramas: generarRayo(subOx, subOy, mouseX, mouseY, Math.max(4, pasosRay - 2), rugRay * 0.8, 0.3),
          colorHalo: 'rgba(255, 208, 0, 0.75)',
          colorCuerpo: '#FFD000',
          colorCore: '#FFFFFF'
        });
      }

      // Chispa terminal en tu dedo / cursor
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#00E5FF';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 4 + Math.random() * 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Chispa en el punto de emisión del logo
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#FFD000';
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(origenX, origenY, 3 + Math.random() * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // 5. Dibujar todos los rayos (Pase 1: Halo de plasma, Pase 2: Trazador cromático, Pase 3: Core blanco)
    todosLosRayos.forEach(({ ramas, colorHalo, colorCuerpo, colorCore }) => {
      ramas.forEach(({ puntos }) => {
        if (puntos.length < 2) return;

        // Pase 1: Halo de plasma
        ctx.strokeStyle = colorHalo;
        ctx.lineWidth = 5.2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(puntos[0].x, puntos[0].y);
        for (let p = 1; p < puntos.length; p++) ctx.lineTo(puntos[p].x, puntos[p].y);
        ctx.stroke();

        // Pase 2: Trazador iónico cromático
        ctx.strokeStyle = colorCuerpo;
        ctx.lineWidth = 2.4;
        ctx.stroke();

        // Pase 3: Filamento blanco de arco
        ctx.strokeStyle = colorCore;
        ctx.lineWidth = 1.1;
        ctx.stroke();
      });
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
