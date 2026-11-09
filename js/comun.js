/**
 * ============================================================================
 * PLATAFORMA DIGITAL OFICIAL · INGENIERÍA ELÉCTRICA
 * UNIVERSIDAD NACIONAL DE COLOMBIA · FACULTAD DE MINAS (SEDE MEDELLÍN)
 * ============================================================================
 *
 * Arquitectura, diseño de interfaz y desarrollo de software realizado por:
 * SANTIAGO ESCOBAR ARIAS
 * Representante Estudiantil de Ingeniería de Sistemas
 * Contacto institucional: saescobara@unal.edu.co
 * Perfil oficial: https://www.instagram.com/s_escobar__/
 *
 * En colaboración con:
 * Kevin David Aristizabal Giraldo · Ingeniería Eléctrica
 * Contacto: Karistizabalg@unal.edu.co | TikTok: @swamp9951
 *
 * © 2026 Santiago Escobar Arias. Todos los derechos reservados.
 *
 * Protección Legal:
 * Obra protegida por la Ley 23 de 1982 de la República de Colombia, la Decisión
 * 351 de la Comisión del Acuerdo de Cartagena y el Convenio de Berna. Queda
 * prohibida la reproducción no autorizada, clonación, plagio o remoción de
 * firmas digitales, marcas de autoría y componentes técnicos sin autorización.
 * ============================================================================
 */

/* ---------- Firma Digital de Autoría en Consola (DevTools) ---------- */
function imprimirFirmaDigital() {
  if (window.__FIRMA_DIGITAL_IMPRESA__) return;
  window.__FIRMA_DIGITAL_IMPRESA__ = true;

  const estiloTitulo = [
    'background: #1C1817',
    'color: #FFBB02',
    'font-family: monospace',
    'font-size: 13px',
    'font-weight: bold',
    'padding: 10px 16px',
    'border: 2px solid #27AFC9',
    'border-radius: 8px',
    'text-shadow: 0 0 10px rgba(39, 175, 201, 0.6)'
  ].join(';');

  const estiloAutor = [
    'background: #2A2322',
    'color: #ffffff',
    'font-family: sans-serif',
    'font-size: 12px',
    'padding: 8px 14px',
    'border-left: 4px solid #FFBB02',
    'margin-top: 4px'
  ].join(';');

  const estiloLegal = [
    'color: #B0A6A5',
    'font-family: sans-serif',
    'font-size: 11px',
    'font-style: italic',
    'padding: 4px 14px'
  ].join(';');

  const estiloBadge = [
    'background: #E58E00',
    'color: #ffffff',
    'font-family: monospace',
    'font-size: 11px',
    'font-weight: bold',
    'padding: 3px 8px',
    'border-radius: 4px'
  ].join(';');

  const ascii = `
  ███████╗ █████╗ ███╗   ██╗████████╗██╗ █████╗  ██████╗  ██████╗ 
  ██╔════╝██╔══██╗████╗  ██║╚══██╔══╝██║██╔══██╗██╔════╝ ██╔═══██╗
  ███████╗███████║██╔██╗ ██║   ██║   ██║███████║██║  ███╗██║   ██║
  ╚════██║██╔══██║██║╚██╗██║   ██║   ██║██╔══██║██║   ██║██║   ██║
  ███████║██║  ██║██║ ╚████║   ██║   ██║██║  ██║╚██████╔╝╚██████╔╝
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ `;

  console.log(`%c${ascii}\n  ARQUITECTURA & DESARROLLO DE SOFTWARE · SANTIAGO ESCOBAR ARIAS`, estiloTitulo);

  console.log(
    `%cFIRMA DIGITAL DE AUTORÍA Y PROPIEDAD INTELECTUAL\n` +
    `------------------------------------------------------------------\n` +
    `Creador & Arquitecto de Software: Santiago Escobar Arias\n` +
    `Cargo: Representante Estudiantil de Ingeniería de Sistemas\n` +
    `Representante Estudiantil de Carrera: Luis Fernando Carrillo Méndez (Ing. Eléctrica)\n` +
    `Colaborador del Programa: Kevin David Aristizabal Giraldo (Ing. Eléctrica)\n` +
    `Institución: Facultad de Minas · Universidad Nacional de Colombia (Sede Medellín)\n` +
    `Correo Oficial Autor: saescobara@unal.edu.co\n` +
    `Instagram Autor: @s_escobar__ (https://www.instagram.com/s_escobar__/)\n` +
    `Año de Registro: 2026 · Versión: 2.0 Oficial · Ingeniería Eléctrica\n` +
    `Hash de Verificación: e8b94f6c91a72d3e05bc418a994ef08d31a57e937d2f4ca87b649512c019d08e\n` +
    `------------------------------------------------------------------`,
    estiloAutor
  );

  console.log(
    `%cAVISO LEGAL: Esta obra, su interfaz visual, simuladores de potencia y circuitos, gemelo digital y algoritmos interactivos están protegidos por la Ley 23 de 1982 sobre Derechos de Autor (Colombia) y la Decisión 351 de la Comunidad Andina. Queda prohibida la reproducción, plagio o remoción de créditos de autoría sin consentimiento expreso por escrito de Santiago Escobar Arias.`,
    estiloLegal
  );

  console.log(`%c[AUTENTICACIÓN VERIFICADA: OBRA ORIGINAL REGISTRADA]`, estiloBadge);

  try {
    Object.defineProperty(window, '__AUTOR_PLATAFORMA__', {
      value: Object.freeze({
        autor: 'Santiago Escobar Arias',
        rol: 'Representante Estudiantil de Ingeniería de Sistemas',
        colaborador: 'Kevin David Aristizabal Giraldo',
        carrera: 'Ingeniería Eléctrica',
        institucion: 'Universidad Nacional de Colombia · Facultad de Minas (Sede Medellín)',
        contacto: 'saescobara@unal.edu.co',
        instagram: 'https://www.instagram.com/s_escobar__/',
        licencia: 'Propiedad Intelectual Protegida · Ley 23 de 1982 · Todos los derechos reservados',
        anio: 2026,
        verificado: true
      }),
      writable: false,
      configurable: false
    });
  } catch (_) {}
}

imprimirFirmaDigital();

/* =============================================
   FUNCIONES COMUNES A TODOS LOS MÓDULOS
   - Carga de datos (cada módulo pide solo los JSON que necesita)
   - Barra superior y pie, iguales en todas las páginas
   ============================================= */

const $ = (selector, raiz = document) => raiz.querySelector(selector);
const $$ = (selector, raiz = document) => [...raiz.querySelectorAll(selector)];

// Escapa texto antes de meterlo en HTML
const esc = (texto) => String(texto ?? '').replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);


/* ---------- Carga de datos ---------- */

const memoriaDatos = new Map();

function cargarDatos(ruta) {
  if (!memoriaDatos.has(ruta)) {
    const peticion = fetch(`data/${ruta}.json`).then((respuesta) => {
      if (!respuesta.ok) throw new Error(`No se pudo cargar data/${ruta}.json (${respuesta.status})`);
      return respuesta.json();
    });
    memoriaDatos.set(ruta, peticion);
  }
  return memoriaDatos.get(ruta);
}

function mostrarErrorDeCarga(contenedor, error) {
  console.error(error);
  contenedor.innerHTML = `
    <div class="aviso">
      <p><strong>No se pudo cargar la información.</strong></p>
      <p>Si abriste el archivo con doble clic, sírvelo con un servidor local:
        <code>python -m http.server</code> y entra a <code>http://localhost:8000</code>.</p>
    </div>`;
}


/* ---------- Escudo oficial / Logo de Ingeniería Eléctrica ---------- */

function dibujarEscudo() {
  return `<img src="img/logo-electrica.png" alt="Logo de Ingeniería Eléctrica · Facultad de Minas" class="barra__escudo-img">`;
}


/* ---------- Barra superior y navegación ---------- */

const PAGINAS = [
  { id: 'inicio', texto: 'Inicio', url: 'index.html', tag: '01' },
  { id: 'avance', texto: 'Mi Avance', url: 'avance.html', tag: '02' },
  { id: 'malla', texto: 'Malla', url: 'malla.html', tag: '03' },
  { id: 'intercampus', texto: 'Intercampus', url: 'intercampus.html', tag: '04' },
  { id: 'convenios', texto: 'Convenios', url: 'convenios.html', tag: '05' },
  { id: 'info', texto: 'Información', url: 'info.html', tag: '06' },
];

function pintarBarra() {
  const actual = document.body.dataset.pagina;
  $('#barra').outerHTML = `
    <header class="barra" id="encabezado-barra">
      <div class="contenedor barra__contenido">
        <!-- MARCA OFICIAL CON LOGO ENERGÉTICO Y AURA ELECTROMAGNÉTICA -->
        <a class="barra__marca" href="index.html" aria-label="Ingeniería Eléctrica, inicio">
          <div class="barra__escudo">
            <img src="img/logo-electrica.png" alt="Logo oficial de Ingeniería Eléctrica" class="barra__escudo-img">
            <span class="barra__escudo-halo" aria-hidden="true"></span>
          </div>
          <div class="barra__texto">
            <span class="barra__carrera-nombre">Ingeniería Eléctrica</span>
            <span class="barra__carrera-facultad">UNAL · Facultad de Minas · Sede Medellín</span>
          </div>
        </a>

        <!-- BOTÓN MENÚ MÓVIL CON ESTILO DISYUNTOR -->
        <button class="barra__boton-menu" id="btn-menu" type="button" aria-expanded="false" aria-controls="menu-navegacion" aria-label="Abrir menú de navegación">
          <span class="barra__icono barra__icono--abrir" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
          </span>
          <span class="barra__icono barra__icono--cerrar" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </span>
          <span class="barra__boton-texto">Circuito</span>
        </button>

        <!-- RIEL DE NAVEGACIÓN DE ALTA POTENCIA (CIRCUITO CON ARCO DE PLASMA) -->
        <nav class="nav-circuito" id="menu-navegacion" aria-label="Módulos del portal">
          <!-- Lienzo dinámico de rayo de plasma viajero entre pestañas -->
          <canvas class="nav-circuito__rayo-canvas" id="canvas-rayo-nav"></canvas>

          <!-- Pista conductora con slider de arco voltaico -->
          <div class="nav-circuito__pista" id="nav-pista" aria-hidden="true">
            <div class="nav-circuito__slider" id="nav-circuito-slider">
              <span class="circuito-slider__arco"></span>
              <span class="circuito-slider__spark"></span>
            </div>
          </div>

          <!-- Nodos terminales de navegación -->
          <div class="nav-circuito__nodos" id="nav-nodos">
            ${PAGINAS.map((p, idx) => {
              const esActiva = p.id === actual;
              return `
                <a href="${p.url}" 
                   class="nav-nodo ${esActiva ? 'is-activa' : ''}" 
                   data-pagina-id="${p.id}"
                   data-indice="${idx}"
                   ${esActiva ? 'aria-current="page"' : ''}>
                  <span class="nav-nodo__tag">${p.tag}</span>
                  <span class="nav-nodo__nombre">${p.texto}</span>
                  <span class="nav-nodo__pin" aria-hidden="true"></span>
                </a>
              `;
            }).join('')}
          </div>
        </nav>
      </div>
    </header>`;

  configurarMenuMovil();
  iniciarCircuitoNav();
}

function iniciarCircuitoNav() {
  const circuito = $('.nav-circuito');
  const slider = $('#nav-circuito-slider');
  const canvasRayo = $('#canvas-rayo-nav');
  const nodos = $$('.nav-nodo', circuito);
  if (!circuito || !slider || !nodos.length) return;

  const actualNodo = $('.nav-nodo.is-activa', circuito);
  if (!actualNodo) return;

  // Configuración del lienzo para el rayo viajero
  let ctxRayo = null;
  let dpr = window.devicePixelRatio || 1;
  let animacionRayoId = null;

  function redimensionarCanvas() {
    if (!canvasRayo || !circuito) return;
    const w = circuito.clientWidth;
    const h = circuito.clientHeight;
    canvasRayo.width = Math.floor(w * dpr);
    canvasRayo.height = Math.floor(h * dpr);
    canvasRayo.style.width = w + 'px';
    canvasRayo.style.height = h + 'px';
    ctxRayo = canvasRayo.getContext('2d');
    ctxRayo.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  redimensionarCanvas();
  window.addEventListener('resize', redimensionarCanvas);

  // Generador fractal de arco voltaico
  function trazarRayoFractal(x0, y0, x1, y1, pasos, rugosidad) {
    const pts = [{ x: x0, y: y0 }];
    const dx = x1 - x0;
    const dy = y1 - y0;
    const dist = Math.hypot(dx, dy);

    for (let i = 1; i < pasos; i++) {
      const frac = i / pasos;
      const bx = x0 + dx * frac;
      const by = y0 + dy * frac;
      const perpX = -dy / (dist || 1);
      const perpY = dx / (dist || 1);
      const jitter = (Math.random() - 0.5) * rugosidad;
      pts.push({ x: bx + perpX * jitter, y: by + perpY * jitter });
    }
    pts.push({ x: x1, y: y1 });
    return pts;
  }

  // Animación del rayo de alta tensión viajando de nodo A a nodo B
  function dispararRayoNav(origen, destino, alTerminar) {
    if (!ctxRayo || !canvasRayo || !origen || !destino) {
      alTerminar?.();
      return;
    }

    if (animacionRayoId) cancelAnimationFrame(animacionRayoId);

    const x0 = origen.offsetLeft + origen.offsetWidth * 0.5;
    const x1 = destino.offsetLeft + destino.offsetWidth * 0.5;
    const y0 = origen.offsetTop + origen.offsetHeight * 0.5;
    const y1 = destino.offsetTop + destino.offsetHeight * 0.5;

    const duracion = Math.max(160, Math.min(260, Math.abs(x1 - x0) * 0.65));
    const tInicio = performance.now();
    const chispasImpacto = [];

    function frame(tAhora) {
      const transcurrido = tAhora - tInicio;
      const progreso = Math.min(1, transcurrido / duracion);
      const curX = x0 + (x1 - x0) * progreso;
      const curY = y0 + (y1 - y0) * progreso;

      const w = canvasRayo.width / dpr;
      const h = canvasRayo.height / dpr;
      ctxRayo.clearRect(0, 0, w, h);

      // Si aún está en vuelo el rayo principal
      if (progreso < 1) {
        const pasos = Math.max(5, Math.floor(Math.abs(curX - x0) / 14));
        const pts = trazarRayoFractal(x0, y0, curX, curY, pasos, 7);

        // 1. Halo electromagnético exterior (Cian)
        ctxRayo.strokeStyle = 'rgba(39, 175, 201, 0.75)';
        ctxRayo.lineWidth = 5.5;
        ctxRayo.lineCap = 'round';
        ctxRayo.lineJoin = 'round';
        ctxRayo.beginPath();
        ctxRayo.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) ctxRayo.lineTo(pts[i].x, pts[i].y);
        ctxRayo.stroke();

        // 2. Arco plasmático intermedio (Volt Amarillo / Oro)
        ctxRayo.strokeStyle = '#FFBB02';
        ctxRayo.lineWidth = 2.4;
        ctxRayo.stroke();

        // 3. Filamento central ultra-caliente (Blanco Puro)
        ctxRayo.strokeStyle = '#FFFFFF';
        ctxRayo.lineWidth = 1.2;
        ctxRayo.stroke();

        // Cabeza del arco (plasma ionizado)
        ctxRayo.fillStyle = '#FFFFFF';
        ctxRayo.shadowColor = '#FFBB02';
        ctxRayo.shadowBlur = 12;
        ctxRayo.beginPath();
        ctxRayo.arc(curX, curY, 3.5, 0, Math.PI * 2);
        ctxRayo.fill();
        ctxRayo.shadowBlur = 0;

        animacionRayoId = requestAnimationFrame(frame);
      } else {
        // Al impactar el nodo destino: descarga de chispas
        if (chispasImpacto.length === 0) {
          for (let k = 0; k < 6; k++) {
            const ang = (Math.PI * 2 * k) / 6 + (Math.random() - 0.5);
            const vel = 1.5 + Math.random() * 2.5;
            chispasImpacto.push({
              x: x1,
              y: y1,
              vx: Math.cos(ang) * vel,
              vy: Math.sin(ang) * vel,
              vida: 1
            });
          }
        }

        let vivas = 0;
        chispasImpacto.forEach((c) => {
          c.x += c.vx;
          c.y += c.vy;
          c.vida -= 0.12;
          if (c.vida > 0) {
            vivas++;
            ctxRayo.fillStyle = c.vida > 0.5 ? '#FFFFFF' : '#FFBB02';
            ctxRayo.beginPath();
            ctxRayo.arc(c.x, c.y, 2 * c.vida, 0, Math.PI * 2);
            ctxRayo.fill();
          }
        });

        if (vivas > 0) {
          animacionRayoId = requestAnimationFrame(frame);
        } else {
          ctxRayo.clearRect(0, 0, w, h);
          animacionRayoId = null;
          alTerminar?.();
        }
      }
    }

    animacionRayoId = requestAnimationFrame(frame);
  }

  function posicionarArco(el, animado = true) {
    if (!el) return;
    const ancho = el.offsetWidth;
    const izquierda = el.offsetLeft;

    if (!animado) {
      slider.style.transition = 'none';
    } else {
      slider.style.transition = 'left 0.34s cubic-bezier(0.2, 0.9, 0.3, 1.2), width 0.34s cubic-bezier(0.2, 0.9, 0.3, 1.2), transform 0.34s ease';
    }

    slider.style.left = `${izquierda}px`;
    slider.style.width = `${ancho}px`;

    if (!animado) {
      slider.offsetHeight; // Forzar reflujo
      slider.style.transition = '';
    }
  }

  // Verificar si venimos de otra pestaña para animar el rayo viajando desde la pestaña de origen
  const origenIdx = sessionStorage.getItem('electrica_nav_origen_idx');
  sessionStorage.removeItem('electrica_nav_origen_idx');

  if (origenIdx !== null && nodos[origenIdx] && nodos[origenIdx] !== actualNodo) {
    const nodoOrigen = nodos[origenIdx];
    posicionarArco(nodoOrigen, false);
    slider.classList.add('is-descargando');

    requestAnimationFrame(() => {
      posicionarArco(actualNodo, true);
      dispararRayoNav(nodoOrigen, actualNodo, () => {
        slider.classList.remove('is-descargando');
      });
    });
  } else {
    posicionarArco(actualNodo, false);
  }

  // Interceptar clic para activar el rayo viajero antes de navegar
  nodos.forEach((nodo) => {
    nodo.addEventListener('click', (e) => {
      if (nodo === actualNodo) return;

      const urlDestino = nodo.getAttribute('href');
      if (!urlDestino || urlDestino.startsWith('#') || urlDestino.startsWith('http')) return;

      e.preventDefault();

      const idxActual = actualNodo.dataset.indice || '0';
      sessionStorage.setItem('electrica_nav_origen_idx', idxActual);

      slider.classList.add('is-descargando');
      posicionarArco(nodo, true);

      dispararRayoNav(actualNodo, nodo, () => {
        window.location.href = urlDestino;
      });
    });

    // Vista previa y arco eléctrico al pasar el ratón (hover)
    nodo.addEventListener('mouseenter', () => {
      if (window.innerWidth <= 980) return;
      posicionarArco(nodo, true);
      if (nodo !== actualNodo) {
        dispararRayoNav(actualNodo, nodo, null);
      }
    });
  });

  circuito.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 980) return;
    posicionarArco(actualNodo, true);
  });

  window.addEventListener('resize', () => {
    posicionarArco(actualNodo, false);
  });
}

function configurarMenuMovil() {
  const barra = $('#encabezado-barra');
  const btn = $('#btn-menu');
  const nav = $('#menu-navegacion');
  if (!barra || !btn || !nav) return;

  function toggleMenu(abrir) {
    const estaAbierto = abrir !== undefined ? abrir : !barra.classList.contains('is-menu-abierto');
    barra.classList.toggle('is-menu-abierto', estaAbierto);
    btn.setAttribute('aria-expanded', String(estaAbierto));
    btn.setAttribute('aria-label', estaAbierto ? 'Cerrar menú' : 'Abrir menú');
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      toggleMenu(false);
    }
  });

  document.addEventListener('click', (e) => {
    if (barra.classList.contains('is-menu-abierto') && !barra.contains(e.target)) {
      toggleMenu(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && barra.classList.contains('is-menu-abierto')) {
      toggleMenu(false);
      btn.focus();
    }
  });
}

function pintarPie() {
  $('#pie').outerHTML = `
    <footer class="pie">
      <div class="pie__marca-central">
        <div class="pie__escudo">
          <img src="img/logo-electrica.png" alt="Logo de Ingeniería Eléctrica" class="pie__escudo-img">
        </div>

        <div class="pie__pildoras-carrera">
          <a class="pie__pildora pie__pildora--ig" href="https://www.instagram.com/ingelectrica_med?rpxt=MXJvZXZ6b2w0NDJxYw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" title="Instagram oficial de Ingeniería Eléctrica (@ingelectrica_med)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>@ingelectrica_med</span>
          </a>
          <a class="pie__pildora pie__pildora--wpp" href="https://chat.whatsapp.com/KLyM40QAcm9Gbp0Lu8xwYI?s=cl&p=i&mlu=4&ilr=4&iam=2" target="_blank" rel="noopener noreferrer" title="Comunidad oficial de WhatsApp de Ingeniería Eléctrica">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.07 7.71C8.89 7.71 8.6 7.78 8.36 8.04C8.11 8.3 7.41 8.96 7.41 10.3C7.41 11.63 8.38 12.92 8.52 13.1C8.66 13.29 10.42 16 13.12 17.17C15.36 18.14 15.82 17.95 16.31 17.9C16.8 17.86 17.88 17.26 18.11 16.63C18.33 16 18.33 15.46 18.26 15.35C18.2 15.24 18.01 15.18 17.73 15.04C17.45 14.9 16.08 14.23 15.83 14.13C15.57 14.04 15.39 13.99 15.2 14.27C15.02 14.55 14.49 15.18 14.33 15.36C14.17 15.55 14.01 15.57 13.73 15.43C13.45 15.29 12.27 14.9 10.87 13.65C9.78 12.68 9.05 11.48 8.84 11.12C8.63 10.76 8.82 10.56 8.96 10.42C9.09 10.29 9.25 10.08 9.39 9.92C9.53 9.76 9.58 9.64 9.67 9.46C9.76 9.27 9.72 9.11 9.65 8.97C9.58 8.83 9.07 7.58 8.86 7.07C8.66 6.58 8.45 6.64 8.3 6.63C8.15 6.63 7.97 6.63 7.78 6.63"/></svg>
            <span>Comunidad WhatsApp</span>
          </a>
          <a class="pie__pildora pie__pildora--drive" href="https://drive.google.com/drive/u/4/folders/1N2g1Db6bL1YUdycsTLm0p7Zhqoiruc4s" target="_blank" rel="noopener noreferrer" title="Carpeta oficial de Recursos de Ingeniería Eléctrica">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            <span>Recursos Drive</span>
          </a>
        </div>

        <p class="pie__titulo-carrera"><strong>Ingeniería Eléctrica</strong> · Facultad de Minas · Universidad Nacional de Colombia, Sede Medellín</p>
      </div>

      <!-- DOS TARJETICAS (REPRESENTACIÓN / COLABORACIÓN Y DESARROLLO) -->
      <div class="pie__tarjetas-grid">
        <!-- TARJETA 1: REPRESENTACIÓN & COLABORADOR -->
        <div class="pie__tarjeta pie__tarjeta--representacion">
          <!-- BLOQUE 1: REPRESENTANTE ESTUDIANTIL -->
          <div class="pie__bloque-persona">
            <span class="pie__tarjeta-sub">REPRESENTANTE ESTUDIANTIL</span>
            <p class="pie__tarjeta-nombre"><strong>Luis Fernando Carrillo Méndez</strong></p>
            <div class="pie__tarjeta-enlaces">
              <a class="pie__enlace-contacto pie__enlace-contacto--wpp" href="https://wa.me/573118467650" target="_blank" rel="noopener noreferrer" title="WhatsApp Luis Fernando Carrillo (Repre)">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.07 7.71C8.89 7.71 8.6 7.78 8.36 8.04C8.11 8.3 7.41 8.96 7.41 10.3C7.41 11.63 8.38 12.92 8.52 13.1C8.66 13.29 10.42 16 13.12 17.17C15.36 18.14 15.82 17.95 16.31 17.9C16.8 17.86 17.88 17.26 18.11 16.63C18.33 16 18.33 15.46 18.26 15.35C18.2 15.24 18.01 15.18 17.73 15.04C17.45 14.9 16.08 14.23 15.83 14.13C15.57 14.04 15.39 13.99 15.2 14.27C15.02 14.55 14.49 15.18 14.33 15.36C14.17 15.55 14.01 15.57 13.73 15.43C13.45 15.29 12.27 14.9 10.87 13.65C9.78 12.68 9.05 11.48 8.84 11.12C8.63 10.76 8.82 10.56 8.96 10.42C9.09 10.29 9.25 10.08 9.39 9.92C9.53 9.76 9.58 9.64 9.67 9.46C9.76 9.27 9.72 9.11 9.65 8.97C9.58 8.83 9.07 7.58 8.86 7.07C8.66 6.58 8.45 6.64 8.3 6.63C8.15 6.63 7.97 6.63 7.78 6.63"/></svg>
                <span>311 846 7650</span>
              </a>
              <a class="pie__enlace-contacto pie__enlace-contacto--correo" href="mailto:Lcarrillom@unal.edu.co" title="Correo Luis Fernando Carrillo (Repre)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>Lcarrillom@unal.edu.co</span>
              </a>
              <a class="pie__enlace-contacto pie__enlace-contacto--ig" href="https://www.instagram.com/carrilo_3003/" target="_blank" rel="noopener noreferrer" title="Instagram Luis Fernando Carrillo (@carrilo_3003)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span>@carrilo_3003</span>
              </a>
            </div>
          </div>

          <!-- SEPARADOR DISCRETO -->
          <div class="pie__tarjeta-divisor" aria-hidden="true"></div>

          <!-- BLOQUE 2: COLABORADOR DE CARRERA -->
          <div class="pie__bloque-persona">
            <span class="pie__tarjeta-sub pie__tarjeta-sub--colaborador">COLABORADOR DE CARRERA</span>
            <p class="pie__tarjeta-nombre"><strong>Kevin David Aristizabal Giraldo</strong></p>
            <div class="pie__tarjeta-enlaces">
              <a class="pie__enlace-contacto pie__enlace-contacto--wpp" href="https://wa.me/573114174322" target="_blank" rel="noopener noreferrer" title="WhatsApp Kevin Aristizabal (Colaborador)">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.07 7.71C8.89 7.71 8.6 7.78 8.36 8.04C8.11 8.3 7.41 8.96 7.41 10.3C7.41 11.63 8.38 12.92 8.52 13.1C8.66 13.29 10.42 16 13.12 17.17C15.36 18.14 15.82 17.95 16.31 17.9C16.8 17.86 17.88 17.26 18.11 16.63C18.33 16 18.33 15.46 18.26 15.35C18.2 15.24 18.01 15.18 17.73 15.04C17.45 14.9 16.08 14.23 15.83 14.13C15.57 14.04 15.39 13.99 15.2 14.27C15.02 14.55 14.49 15.18 14.33 15.36C14.17 15.55 14.01 15.57 13.73 15.43C13.45 15.29 12.27 14.9 10.87 13.65C9.78 12.68 9.05 11.48 8.84 11.12C8.63 10.76 8.82 10.56 8.96 10.42C9.09 10.29 9.25 10.08 9.39 9.92C9.53 9.76 9.58 9.64 9.67 9.46C9.76 9.27 9.72 9.11 9.65 8.97C9.58 8.83 9.07 7.58 8.86 7.07C8.66 6.58 8.45 6.64 8.3 6.63C8.15 6.63 7.97 6.63 7.78 6.63"/></svg>
                <span>311 417 4322</span>
              </a>
              <a class="pie__enlace-contacto pie__enlace-contacto--correo" href="mailto:Karistizabalg@unal.edu.co" title="Correo Kevin Aristizabal (Colaborador)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>Karistizabalg@unal.edu.co</span>
              </a>
              <a class="pie__enlace-contacto pie__enlace-contacto--tiktok" href="https://www.tiktok.com/@swamp9951?_r=1&_t=ZS-9BFHHyyIFHy" target="_blank" rel="noopener noreferrer" title="TikTok Kevin Aristizabal (@swamp9951)">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                <span>TikTok @swamp9951</span>
              </a>
            </div>
          </div>
        </div>

        <!-- TARJETA 2: CREACIÓN Y DESARROLLO WEB -->
        <div class="pie__tarjeta pie__tarjeta--desarrollo">
          <span class="pie__tarjeta-sub">CREACIÓN Y DESARROLLO WEB</span>
          <p class="pie__tarjeta-nombre">Iniciativa y plataforma desarrollada por <strong>Santiago Escobar Arias</strong> · Representante de Sistemas</p>
          <div class="pie__tarjeta-enlaces pie__tarjeta-enlaces--iconos">
            <a class="pie__enlace-contacto pie__enlace-contacto--icono pie__enlace-contacto--ig" href="https://www.instagram.com/s_escobar__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Santiago Escobar (@s_escobar__)" title="Instagram (@s_escobar__)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a class="pie__enlace-contacto pie__enlace-contacto--icono pie__enlace-contacto--correo" href="mailto:saescobara@unal.edu.co" aria-label="Correo de Santiago Escobar (saescobara@unal.edu.co)" title="Correo (saescobara@unal.edu.co)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="pie__legal">
        <p class="pie__legal-texto">Proyecto estudiantil sin ánimo de lucro · Iniciativa académica e informativa para la comunidad universitaria de la Universidad Nacional de Colombia — Sede Medellín.</p>
        <p class="pie__legal-aviso"><strong>Aviso de Propiedad Intelectual y Seguridad:</strong> El diseño, arquitectura de software, código fuente, experiencia de usuario (UX/UI), simuladores dinámicos de potencia, circuitos interactivos e identidad visual están protegidos por la Ley 23 de 1982, Decisión Andina 351 y Arts. 270 y 271 del Código Penal Colombiano. Queda prohibida la reproducción parcial o total, plagio o ingeniería inversa sin autorización previa y por escrito del autor. Los logotipos institucionales corresponden a la Universidad Nacional de Colombia y las representaciones estudiantiles respectivas. Cualquier vulneración informática será sancionada conforme a la Ley 1273 de 2009.</p>
        <p class="pie__copyright">© 2026 · Todos los derechos reservados · Santiago Escobar Arias.</p>
      </div>
    </footer>`;
}


/* ---------- Mensaje de bienvenida / Creador de la Web ---------- */

function mostrarMensajeAutor() {
  if (sessionStorage.getItem('mensaje_autor_cerrado') === '1') return;

  const toast = document.createElement('aside');
  toast.className = 'toast-autor';
  toast.id = 'toast-autor';
  toast.setAttribute('aria-label', 'Mensaje del creador del portal');
  toast.innerHTML = `
    <div class="toast-autor__tarjeta">
      <button class="toast-autor__cerrar" id="toast-autor-cerrar" type="button" aria-label="Cerrar mensaje">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div class="toast-autor__cabecera">
        <div class="toast-autor__avatar" aria-hidden="true">
          <img src="img/logo-electrica.png" alt="Logo de Ingeniería Eléctrica" class="toast-autor__avatar-img">
        </div>
        <div class="toast-autor__titulos">
          <span class="toast-autor__nombre">Santiago Escobar Arias</span>
          <span class="toast-autor__cargo">REPRESENTANTE DE SISTEMAS · CREADOR DE LA WEB</span>
        </div>
      </div>

      <p class="toast-autor__mensaje">
        ¡Hola! Desarrollé este portal con el propósito de apoyar, guiar y potenciar la vida universitaria de todos los estudiantes de <strong>Ingeniería Eléctrica</strong>. Cuentan con mi total respaldo desde la representación estudiantil de Sistemas para seguir construyendo herramientas digitales que fortalezcan nuestra vida académica en la Facultad de Minas.
      </p>

      <div class="toast-autor__acciones">
        <div class="toast-autor__iconos" aria-label="Contacto del desarrollador">
          <a class="toast-autor__icono toast-autor__icono--ig" href="https://www.instagram.com/s_escobar__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Santiago Escobar (@s_escobar__)" title="Instagram (@s_escobar__)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a class="toast-autor__icono toast-autor__icono--correo" href="mailto:saescobara@unal.edu.co" aria-label="Correo de Santiago Escobar (saescobara@unal.edu.co)" title="Correo (saescobara@unal.edu.co)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="16" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
        <button class="toast-autor__btn-ok" id="toast-autor-ok" type="button">¡ENTENDIDO!</button>
      </div>
    </div>`;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('is-visible');
  }, 800);

  function cerrarToast() {
    toast.classList.remove('is-visible');
    toast.classList.add('is-hiding');
    sessionStorage.setItem('mensaje_autor_cerrado', '1');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }

  $('#toast-autor-cerrar')?.addEventListener('click', cerrarToast);
  $('#toast-autor-ok')?.addEventListener('click', cerrarToast);
}

pintarBarra();
pintarPie();
mostrarMensajeAutor();
