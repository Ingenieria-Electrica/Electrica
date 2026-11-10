/* ==============================================================================
   PORTAL WEB OFICIAL · INGENIERÍA ELÉCTRICA · UNAL SEDE MEDELLÍN
   Arquitectura de software, maquetación y desarrollo integral por:
   Santiago Escobar Arias · Representante Estudiantil de Ingeniería de Sistemas e Informática
   Canales Oficiales e Información de Ingeniería Eléctrica:
   Luis Fernando Carrillo Méndez · Representante Estudiantil
   Kevin David Aristizabal Giraldo · Colaborador de Carrera
   Facultad de Minas — Universidad Nacional de Colombia, Sede Medellín
   ============================================================================== */

(function () {
  'use strict';

  // ==========================================================================
  // 1. CONFIGURACIÓN Y CONSTANTES OFICIALES DE INGENIERÍA ELÉCTRICA
  // ==========================================================================

  const SOFIA_CFG = {
    nombre: 'sofIA',
    programa: 'Ingeniería Eléctrica',
    facultad: 'Facultad de Minas',
    sede: 'Sede Medellín',
    campus: 'Campus Robledo',
    creditosTotales: 170,
    duracionSemestres: 10,
    planAcuerdo: 'Acuerdo del Consejo Académico · Plan Vigente 3535',
    codigoSIA: '3535',
    codigoSNIES: '120',
    lema: 'Trabajo y Rectitud',
    añoCreacion: '1967 (Más de 5 décadas formando líderes en potencia y energía)',

    // Creador y Desarrollador Web
    creadorNombre: 'Santiago Escobar Arias',
    creadorRol: 'Representante Estudiantil de Ingeniería de Sistemas e Informática · Arquitecto y Creador del Portal Web',
    creadorWhatsApp: 'https://wa.me/573123772091',
    creadorTelefono: '(+57) 312 377 2091',
    creadorCorreo: 'saescobara@unal.edu.co',
    creadorInstagram: 'https://www.instagram.com/s_escobar__/',
    creadorInstagramUsuario: '@s_escobar__',

    // Representación Estudiantil Oficial de Ingeniería Eléctrica
    repreNombre: 'Luis Fernando Carrillo Méndez',
    repreCargo: 'Representante Estudiantil de Ingeniería Eléctrica',
    repreWhatsApp: 'https://wa.me/573118467650',
    repreTelefono: '(+57) 311 846 7650',
    repreCorreo: 'Lcarrillom@unal.edu.co',
    repreInstagramPersonal: 'https://www.instagram.com/carrilo_3003/',
    repreInstagramUsuario: '@carrilo_3003',

    colaboradorNombre: 'Kevin David Aristizabal Giraldo',
    colaboradorCargo: 'Colaborador de Carrera · Ingeniería Eléctrica',
    colaboradorWhatsApp: 'https://wa.me/573114174322',
    colaboradorTelefono: '(+57) 311 417 4322',
    colaboradorCorreo: 'Karistizabalg@unal.edu.co',
    colaboradorTikTok: 'https://www.tiktok.com/@swamp9951?_r=1&_t=ZS-9BFHHyyIFHy',

    repreInstagramOficial: 'https://www.instagram.com/ingelectrica_med',
    usuarioInstagramOficial: '@ingelectrica_med',
    grupoOficialWhatsApp: 'https://chat.whatsapp.com/KLyM40QAcm9Gbp0Lu8xwYI?s=cl&p=i&mlu=4&ilr=4&iam=2',

    // Recursos Oficiales y Trámites
    driveRecursos: 'https://drive.google.com/drive/u/4/folders/1N2g1Db6bL1YUdycsTLm0p7Zhqoiruc4s',
    tramitesMinasUrl: 'https://minas.medellin.unal.edu.co/estudiantes/gestion-de-asuntos-estudiantiles/gae-solicitudes-estudiantiles',
    asesoriaMinasCorreo: 'asesorestu_med@unal.edu.co',
    asesoriaMinasTelefono: '(+57 604) 430 9653',
    asesoriaMinasUbicacion: 'Campus Robledo, Bloque M4, Medellín',
  };

  // Avatar SVG holográfico de sofIA con estética eléctrica / arco / circuitos
  const SOFIA_SVG_AVATAR = `
    <svg viewBox="0 0 44 44" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="sofiaGradGlowE" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFBB02" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#E58E00" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#1A1514" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="sofiaRayoE" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#40C7E0" />
          <stop offset="50%" stop-color="#FFBB02" />
          <stop offset="100%" stop-color="#E58E00" />
        </linearGradient>
      </defs>
      <!-- Resplandor exterior -->
      <circle cx="22" cy="22" r="20" fill="url(#sofiaGradGlowE)" />
      <!-- Círculo nodal de circuito -->
      <circle cx="22" cy="22" r="14" stroke="#27AFC9" stroke-width="1.6" stroke-dasharray="2 3" opacity="0.8" />
      <!-- Rayo eléctrico dinámico -->
      <path d="M23 9L15 23H22L19 35L29 19H22L25 9H23Z" fill="url(#sofiaRayoE)" stroke="#FFBB02" stroke-width="1.2" stroke-linejoin="round"/>
      <!-- Nodos de plasma -->
      <circle cx="15" cy="23" r="1.6" fill="#40C7E0" />
      <circle cx="29" cy="19" r="1.6" fill="#FFBB02" />
      <circle cx="22" cy="22" r="1.8" fill="#FFFFFF" />
    </svg>
  `;

  // ==========================================================================
  // 2. ESTRUCTURA DE DATOS E ÍNDICES EN MEMORIA
  // ==========================================================================

  const datosApp = {
    programa: null,
    perfil: null,
    componentes: null,
    plan: null,
    asignaturas: [],
    grupos: [],
    info: null,
  };

  const indices = {
    materiasPorCodigo: new Map(),
    materiasPorNombre: new Map(),
    aliasMaterias: new Map(),
    materiasPorSemestre: new Map(),
    guiasPorId: new Map(),
    calendarioFilas: [],
  };

  function normalizar(texto) {
    return (texto || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // ==========================================================================
  // 3. CARGA DINÁMICA DE DATOS Y CONSTRUCCIÓN DE ÍNDICES
  // ==========================================================================

  async function cargarDatos() {
    try {
      const [prog, perf, comp, plan, asig, grup, inf] = await Promise.all([
        fetch('data/programa.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
        fetch('data/perfil.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
        fetch('data/malla/componentes.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
        fetch('data/malla/plan.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
        fetch('data/malla/asignaturas.json').then((r) => (r.ok ? r.json() : [])).catch(() => []),
        fetch('data/grupos.json').then((r) => (r.ok ? r.json() : [])).catch(() => []),
        fetch('data/info.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
      ]);

      datosApp.programa = prog;
      datosApp.perfil = perf;
      datosApp.componentes = comp;
      datosApp.plan = plan;
      datosApp.asignaturas = Array.isArray(asig) ? asig : [];
      datosApp.grupos = Array.isArray(grup) ? grup : [];
      datosApp.info = inf;

      construirIndices();
    } catch (e) {
      console.warn('sofIA: Advertencia al cargar datos de Ingeniería Eléctrica:', e);
    }
  }

  function construirIndices() {
    indices.materiasPorCodigo.clear();
    indices.materiasPorNombre.clear();
    indices.aliasMaterias.clear();
    indices.materiasPorSemestre.clear();
    indices.guiasPorId.clear();
    indices.calendarioFilas = [];

    // Indexar asignaturas
    datosApp.asignaturas.forEach((asig) => {
      const cod = String(asig.codigo || '').trim().toUpperCase();
      if (cod) indices.materiasPorCodigo.set(cod, asig);

      const nomNorm = normalizar(asig.nombre);
      if (nomNorm) indices.materiasPorNombre.set(nomNorm, asig);

      if (asig.semestre) {
        const sem = parseInt(asig.semestre, 10);
        if (!indices.materiasPorSemestre.has(sem)) {
          indices.materiasPorSemestre.set(sem, []);
        }
        indices.materiasPorSemestre.get(sem).push(asig);
      }
    });

    // Alias y jerga estudiantil de Ingeniería Eléctrica UNAL Medellín
    const ALIAS_MATERIAS = [
      [['calculo diferencial', 'diferencial', 'calculo 1', 'calc 1'], 'Cálculo Diferencial'],
      [['calculo integral', 'integral', 'calculo 2', 'calc 2'], 'Cálculo Integral'],
      [['calculo en varias variables', 'varias variables', 'calculo 3', 'calc 3', 'cvv'], 'Cálculo en Varias Variables'],
      [['algebra lineal', 'lineal', 'algebra'], 'Álgebra Lineal'],
      [['geometria vectorial y analitica', 'geometria vectorial', 'vectorial', 'geo vec'], 'Geometría Vectorial y Analítica'],
      [['ecuaciones diferenciales', 'diferenciales', 'ed'], 'Ecuaciones Diferenciales'],
      [['metodos numericos', 'numericos'], 'Métodos Numéricos'],
      [['estadistica 1', 'estadistica i', 'probabilidad y estadistica', 'probabilidad'], 'Estadística I'],
      [['matematicas especiales', 'mate especiales', 'especiales'], 'Matemáticas Especiales'],
      [['matematicas discretas', 'discretas'], 'Matemáticas Discretas'],

      [['fisica mecanica', 'mecanica', 'fisica 1'], 'Física Mecánica'],
      [['fisica de electricidad y magnetismo', 'electricidad y magnetismo', 'fisica 2', 'electromagnetismo', 'electri'], 'Física de Electricidad y Magnetismo'],
      [['fisica de oscilaciones ondas y optica', 'oscilaciones ondas y optica', 'ondas y optica', 'optica', 'fisica 3'], 'Física de Oscilaciones, Ondas y Óptica'],
      [['quimica general', 'quimica'], 'Química General'],
      [['fundamentos de programacion', 'programacion', 'python', 'intro a la programacion'], 'Fundamentos de Programación'],
      [['termodinamica general', 'termodinamica', 'termo'], 'Termodinámica General'],

      [['introduccion a la ingenieria electrica', 'intro a electrica', 'intro electrica', 'iie'], 'Introducción a la Ingeniería Eléctrica'],
      [['analisis de circuitos electricos 1', 'circuitos 1', 'circuito 1', 'circuitos i'], 'Análisis de Circuitos Eléctricos I'],
      [['analisis de circuitos electricos 2', 'circuitos 2', 'circuito 2', 'circuitos ii'], 'Análisis de Circuitos Eléctricos II'],
      [['laboratorio de circuitos', 'lab circuitos', 'lab de circuitos'], 'Laboratorio de Circuitos'],

      [['senales y sistemas lineales', 'senales y sistemas', 'senales'], 'Señales y Sistemas Lineales'],
      [['teoria electromagnetica', 'electromagnetica', 'campos'], 'Teoría Electromagnética'],
      [['electronica analoga 1', 'analoga 1', 'electronica 1', 'analoga i'], 'Electrónica Análoga I'],
      [['electronica analoga 2', 'analoga 2', 'electronica 2', 'analoga ii'], 'Electrónica Análoga II'],
      [['electronica digital', 'digital', 'electronica digital 1'], 'Electrónica Digital'],

      [['modelado de lineas de transmision', 'lineas de transmision', 'lineas'], 'Modelado de Líneas de Transmisión'],
      [['control entrada salida', 'control 1', 'sistemas de control'], 'Control: Entrada - Salida'],
      [['maquinas electricas 1', 'maquinas 1', 'transformadores'], 'Máquinas Eléctricas I'],
      [['maquinas electricas 2', 'maquinas 2', 'generadores'], 'Máquinas Eléctricas II'],
      [['laboratorio de maquinas electricas', 'lab de maquinas', 'lab maquinas'], 'Laboratorio de Máquinas Eléctricas'],

      [['instalaciones electricas industriales y residenciales', 'instalaciones electricas', 'instalaciones', 'retie'], 'Instalaciones Eléctricas Industriales y Residenciales'],
      [['telecomunicaciones', 'telecom'], 'Telecomunicaciones'],
      [['sistemas de generacion de energia electrica', 'sistemas de generacion', 'generacion de energia', 'generacion'], 'Sistemas de Generación de Energía Eléctrica'],
      [['analisis de sistemas de potencia', 'sistemas de potencia', 'potencia 1', 'flujo de carga'], 'Análisis de Sistemas de Potencia'],
      [['automatizacion de sistemas electricos', 'automatizacion', 'scada'], 'Automatización de Sistemas Eléctricos'],

      [['diseno de redes de transmision y distribucion', 'redes de distribucion', 'distribucion', 'redes de transmision'], 'Diseño de Redes de Transmisión y Distribución'],
      [['sistemas de protecciones electricas', 'protecciones electricas', 'protecciones', 'reles'], 'Sistemas de Protecciones Eléctricas'],
      [['alta tension', 'laboratorio de alta tension'], 'Alta Tensión'],

      [['fundamentos de proyectos en ingenieria', 'fundamentos de proyectos', 'fpi'], 'Fundamentos de Proyectos en Ingeniería'],
      [['estructuracion y evaluacion de proyectos de ingenieria', 'formulacion y evaluacion de proyectos', 'evaluacion de proyectos'], 'Estructuración y Evaluación de Proyectos de Ingeniería'],
      [['proyecto integrado de ingenieria', 'proyecto integrado', 'pii'], 'Proyecto Integrado de Ingeniería'],

      [['trabajo de grado', 'tesis', 'grado', 'tg'], 'Trabajo de Grado'],
      [['practica de extension', 'pasantia', 'practica profesional', 'practica empresarial'], 'Práctica de Extensión'],
      [['asignaturas de posgrado', 'materias de posgrado', 'posgrado como opcion de grado'], 'Asignaturas de Posgrado'],
    ];

    ALIAS_MATERIAS.forEach(([sinonimos, nombreOficial]) => {
      const nomNorm = normalizar(nombreOficial);
      const asig = indices.materiasPorNombre.get(nomNorm);
      if (asig) {
        sinonimos.forEach((sin) => {
          indices.aliasMaterias.set(normalizar(sin), asig);
        });
      }
    });

    // Indexar guías de info.json
    if (datosApp.info && Array.isArray(datosApp.info.guias)) {
      datosApp.info.guias.forEach((guia) => {
        if (guia.id) indices.guiasPorId.set(guia.id, guia);
        if (guia.id === 'calendario' && Array.isArray(guia.semanas)) {
          guia.semanas.forEach((sem) => {
            indices.calendarioFilas.push({
              evento: sem.evento || sem.titulo || '',
              fecha: sem.fecha || sem.plazo || '',
              grupo: sem.grupo || 'General',
              eventoNorm: normalizar(sem.evento || sem.titulo || ''),
            });
          });
        }
      });
    }
  }

  // ==========================================================================
  // 4. MOTOR DE RESPUESTA EN LENGUAJE NATURAL (PLN)
  // ==========================================================================

  function responderPregunta(consultaOriginal) {
    const pregunta = (consultaOriginal || '').trim();
    const preguntaNorm = normalizar(pregunta);

    if (!preguntaNorm) {
      return {
        texto: 'Por favor escribe tu consulta sobre el programa de Ingeniería Eléctrica, la malla curricular, materias, prerrequisitos, el Grupo Ampère, capítulos IEEE, trámites ante la Facultad de Minas o recursos de estudio.',
        chips: ['¿Qué es la malla curricular?', '¿Qué tipo de materias hay?', '¿Por qué estudiar Eléctrica?'],
      };
    }

    // ------------------------------------------------------------------------
    // 1. Saludos y Presentación
    // ------------------------------------------------------------------------
    if (/^(hola|buen(as|os)?|saludos|hey|que tal|iniciar|comenzar|hi|hello)$/.test(preguntaNorm) || preguntaNorm.startsWith('hola sofia')) {
      return {
        texto: `¡Hola! Soy **${SOFIA_CFG.nombre}**, tu asistente inteligente del programa de **${SOFIA_CFG.programa}** de la **${SOFIA_CFG.facultad}** (UNAL Medellín).

Pregúntame con total confianza sobre:
- **Malla Curricular y prerrequisitos** de las 83 asignaturas del plan.
- **Tipos de materias** y componentes (Fundamentación, Disciplinar, Libre Elección).
- **¿Por qué estudiar Ingeniería Eléctrica?** y su rol en la transición energética.
- **¿Quién es el creador de la web?** (Santiago Escobar Arias).
- **¿Quién es el representante estudiantil?** (Luis Fernando Carrillo Méndez y Kevin Aristizabal).
- **Grupos y Capítulos Técnicos:** Grupo Ampère y capítulos IEEE (PES, IAS, RAS).
- **¿Cómo hacer cambio de carrera / traslados?** ante la Facultad de Minas.
- **Alianzas estratégicas** (ICETEX, Sapiencia, Metro Cívica, software técnico: DigSILENT, MATLAB, ETAP).
- **Banco de Recursos / Drive oficial** con parciales, laboratorios y talleres.

¿Sobre qué tema te gustaría consultar hoy?`,
        chips: [
          '¿Qué es la malla curricular?',
          '¿Qué tipo de materias hay?',
          '¿Por qué estudiar Eléctrica?',
          '¿Quién es el creador de la web?',
          'Contacto del Representante',
          'Grupo Ampère e IEEE',
        ],
      };
    }

    // ------------------------------------------------------------------------
    // 2. ¿Quién es el Creador de la Web? (Requisito clave)
    // ------------------------------------------------------------------------
    if (/creador|quien creo|quien hizo|quien desarrollo|desarrollador|autor|santiago escobar|santiago|quien construyo esta web|quien programo/.test(preguntaNorm)) {
      return {
        texto: `### Creador y Arquitecto de Software de la Plataforma 💻

Este portal web oficial, sus simuladores de avance, la malla curricular interactiva y yo (**${SOFIA_CFG.nombre}**) fuimos creados y desarrollados integralmente por:

👨‍💻 **${SOFIA_CFG.creadorNombre}**
- **Rol:** ${SOFIA_CFG.creadorRol}.
- **Propósito:** Brindar herramientas digitales de vanguardia, transparentes y gratuitas para fortalecer la vida académica, el seguimiento curricular y el bienestar de los estudiantes de la **Facultad de Minas**.
- **Canal de contacto directo:**
  - WhatsApp: [Chat con Santiago Escobar](${SOFIA_CFG.creadorWhatsApp}) \`${SOFIA_CFG.creadorTelefono}\`
  - Correo institucional: \`${SOFIA_CFG.creadorCorreo}\`
  - Instagram: [@s_escobar__](${SOFIA_CFG.creadorInstagram})

El proyecto cuenta con propiedad intelectual y derechos de autor conforme a la Ley 23 de 1982 y normativas de software de la UNAL Medellín.`,
        chips: ['Contacto del Representante', '¿Qué es la malla curricular?', 'Banco de Recursos en Drive'],
      };
    }

    // ------------------------------------------------------------------------
    // 3. ¿Quién es el Representante Estudiantil?
    // ------------------------------------------------------------------------
    if (/repre|representante|representacion|luis fernando|carrillo|carrilo|kevin|aristizabal|contacto repre|quien es el representante/.test(preguntaNorm)) {
      return {
        texto: `### Representación Estudiantil · Ingeniería Eléctrica ⚡

Nuestra carrera cuenta con representación activa ante el Comité Asesor y la Facultad de Minas:

👤 **${SOFIA_CFG.repreNombre}** (Representante Estudiantil)
- **WhatsApp de contacto:** [Chat con Luis Fernando](${SOFIA_CFG.repreWhatsApp}) \`${SOFIA_CFG.repreTelefono}\`
- **Correo institucional:** \`${SOFIA_CFG.repreCorreo}\`
- **Instagram personal:** [Instagram @carrilo_3003](${SOFIA_CFG.repreInstagramPersonal})

👤 **${SOFIA_CFG.colaboradorNombre}** (Colaborador de Carrera)
- **WhatsApp de contacto:** [Chat con Kevin Aristizabal](${SOFIA_CFG.colaboradorWhatsApp}) \`${SOFIA_CFG.colaboradorTelefono}\`
- **Correo institucional:** \`${SOFIA_CFG.colaboradorCorreo}\`
- **TikTok:** [TikTok @swamp9951](${SOFIA_CFG.colaboradorTikTok})

📲 **Canales oficiales de la carrera:**
- **Instagram oficial:** [${SOFIA_CFG.usuarioInstagramOficial}](${SOFIA_CFG.repreInstagramOficial})
- **Comunidad oficial en WhatsApp:** [Grupo Oficial de WhatsApp](${SOFIA_CFG.grupoOficialWhatsApp})

Escríbeles para dudas curriculares, solicitudes ante el Área Curricular IEIC o acompañamiento académico.`,
        chips: ['Grupo Oficial de WhatsApp', 'Banco de Recursos en Drive', 'Portal Solicitudes SGS'],
      };
    }

    // ------------------------------------------------------------------------
    // 4. ¿Qué es la Malla Curricular?
    // ------------------------------------------------------------------------
    if (/que es la malla|malla curricular|explicar la malla|como funciona la malla|ver la malla|entender la malla/.test(preguntaNorm)) {
      return {
        texto: `La **Malla Curricular de Ingeniería Eléctrica** (${SOFIA_CFG.planAcuerdo}, Código SIA **${SOFIA_CFG.codigoSIA}**, SNIES **${SOFIA_CFG.codigoSNIES}**) es la ruta formativa de **10 semestres** y **170 créditos**:

- **Semáforo interactivo:** Al hacer clic en cualquier asignatura en la [Malla Curricular](malla.html), se iluminan en **cian plasma** sus prerrequisitos y en **ámbar eléctrico** las materias que te desbloquea a futuro.
- **Colores por componente:** Ámbar de potencia (\`#E58E00\`) para formación disciplinar, cian de plasma (\`#27AFC9\`) para fundamentación y volt dorado (\`#FFBB02\`) para libre elección.
- **Sombreado de materias aprobadas:** Al cargar tu historia académica en la sección [Mi Avance](avance.html), puedes activar el interruptor *"Sombreado de materias aprobadas"* para ver tu avance reflejado en tiempo real sobre la malla.
- **Banco de materiales:** En la pestaña de Malla tienes acceso directo a la [Carpeta Oficial de Recursos en Google Drive](${SOFIA_CFG.driveRecursos}) con parciales, laboratorios de máquinas y simulaciones.`,
        chips: ['¿Qué tipo de materias hay?', 'Prerrequisitos de Sistemas de Potencia', 'Ver Banco en Drive'],
      };
    }

    // ------------------------------------------------------------------------
    // 5. ¿Qué tipos de materias hay? (Componentes y Distribución)
    // ------------------------------------------------------------------------
    if (/que tipo de materias|tipos de materias|componentes|agrupaciones|tipologia|creditos del plan|cuantos creditos son|como se dividen las materias/.test(preguntaNorm)) {
      return {
        texto: `En el plan curricular de **Ingeniería Eléctrica** existen **3 grandes componentes de formación** que totalizan **170 créditos**:

1. **Componente de Fundamentación (49 créditos):**
   - **Matemáticas, Probabilidad y Estadística (31 cr):** Cálculo Diferencial, Integral, Varias Variables, Álgebra Lineal, Geometría Vectorial, Ecuaciones Diferenciales, Matemáticas Especiales y Estadística I.
   - **Física (8 cr):** Física Mecánica y Física de Electricidad y Magnetismo.
   - **Herramientas Informáticas y Métodos Numéricos (7 cr):** Fundamentos de Programación (Python) y Métodos Numéricos.
   - **Optativas de Fundamentación (3 cr):** Química, Termodinámica o Física de Ondas.

2. **Componente de Formación Disciplinar o Profesional (87 créditos):**
   - **Básicas Disciplinares (5 cr):** Introducción a la Ingeniería Eléctrica y Termodinámica General.
   - **Sistemas de Energía Eléctrica (36 cr):** Circuitos I y II, Laboratorio de Circuitos, Teoría Electromagnética, Líneas de Transmisión, Máquinas Eléctricas I y II, Sistemas de Potencia, Instalaciones Eléctricas, Sistemas de Generación y Protecciones Eléctricas.
   - **Electrónica y Comunicaciones (12 cr):** Electrónica Análoga I y II, Electrónica Digital y Telecomunicaciones.
   - **Automatización, Control e Instrumentación (9 cr):** Señales y Sistemas Lineales, Control: Entrada-Salida y Automatización de Sistemas Eléctricos.
   - **Proyectos en Ingeniería (10 cr):** FPI, Estructuración de Proyectos y Proyecto Integrado.
   - **Optativas Disciplinares (9 cr):** Alta Tensión, Redes de Transmisión/Distribución, Mercado Eléctrico, Energías Renovables.
   - **Trabajo de Grado (6 cr):** Pasantía empresarial, investigación o materias de posgrado.

3. **Componente de Libre Elección (34 créditos = 20% del plan):**
   - Para complementar tu perfil en Smart Grids, electromovilidad, machine learning o finanzas de energía.`,
        chips: ['¿Por qué estudiar Eléctrica?', 'Prerrequisitos de Máquinas Eléctricas', 'Ir a Mi Avance'],
      };
    }

    // ------------------------------------------------------------------------
    // 6. ¿Por qué estudiar Ingeniería Eléctrica? / Fortalezas únicas
    // ------------------------------------------------------------------------
    if (/por que estudiar electrica|por que estudiar ingenieria electrica|fortalezas|ventajas|campos de accion|perfil del egresado|a que se dedica|por que electrica/.test(preguntaNorm)) {
      return {
        texto: `**¿Por qué estudiar Ingeniería Eléctrica en la UNAL Medellín?**

Nuestro programa en la **Facultad de Minas** cuenta con más de **55 años de excelencia** (fundado en 1967) y Acreditación de Alta Calidad del MEN:

1. **Eje Central de la Transición Energética:**
   Los ingenieros electricistas son los artífices de la descarbonización mundial: integran parques solares fotovoltaicos, parques eólicos, sistemas de almacenamiento con baterías (**BESS**) e hidrógeno verde a la matriz eléctrica.

2. **Sistemas Eléctricos de Potencia & Smart Grids:**
   Lideran la operación, estabilidad, despacho económico y confiabilidad del Sistema Interconectado Nacional (SIN) y el diseño de redes eléctricas inteligentes y microrredes.

3. **Subestaciones Digitales y Alta Tensión:**
   Manejo de equipos de patio, transformadores de potencia, relés numéricos de protección bajo norma **IEC 61850** y coordinación de aislamiento.

4. **Laboratorios de Potencia y Máquinas en Campus Robledo:**
   Infraestructura especializada en máquinas rotativas, transformadores, electrónica de potencia y laboratorios de alta tensión.

5. **Software Técnico Especializado:**
   Dominio de herramientas de simulación de nivel industrial: **DigSILENT PowerFactory, MATLAB/Simulink, ETAP, AutoCAD Electrical y ATP/EMTP**.

6. **Ecosistema de Grupos y Capítulos:**
   El histórico **Grupo Ampère** y los capítulos profesionales **IEEE** (PES - Power & Energy Society, IAS - Industry Applications Society, RAS - Robotics).`,
        chips: ['Grupo Ampère e IEEE', 'Ver Malla Curricular', '¿Quién es el creador de la web?'],
      };
    }

    // ------------------------------------------------------------------------
    // 7. ¿Cómo hacer cambio de carrera / Traslado de programa?
    // ------------------------------------------------------------------------
    if (/cambio de carrera|traslado|cambiarme de carrera|cambiarme de programa|traslado de programa|pasarme a|homologacion/.test(preguntaNorm)) {
      return {
        texto: `**¿Cómo solicitar Traslado de Programa Curricular (Cambio de carrera)?**

El trámite oficial de traslado se realiza ante el Consejo de la **Facultad de Minas** conforme al Estatuto Estudiantil (**Acuerdo 008 de 2008** del CSU):

1. **Requisitos Normativos Básicos:**
   - Tener la condición de estudiante activo en la UNAL.
   - Contar con un **P.A.P.A. competitivo** (cada comité de carrera evalúa el corte según cupos disponibles).
   - Tener suficiente **cupo de créditos disponibles** en el SIA para culminar el nuevo plan de estudios.
   - Haber cursado al menos el número de créditos exigido en tu programa de origen.

2. **Procedimiento de Radicación:**
   - La convocatoria se abre semestralmente conforme al Calendario Académico de la sede.
   - Se radica formalmente mediante el **SGS (Sistema de Gestión de Solicitudes)** de la Facultad de Minas:
     🔗 [Portal de Solicitudes GAE Minas](${SOFIA_CFG.tramitesMinasUrl})
   - Seleccionas la solicitud *«Traslado de programa curricular»*, adjuntas tu carta de motivación y soportes.

3. **Asesoría y Acompañamiento:**
   - Si tienes dudas sobre convalidaciones o cupo de créditos, escribe desde tu correo institucional a **Asesoría Estudiantil de Minas**: \`${SOFIA_CFG.asesoriaMinasCorreo}\` (Campus Robledo, Bloque M4).`,
        chips: ['Portal Solicitudes SGS', 'Calendario académico', '¿Qué es el P.A.P.A.?'],
      };
    }

    // ------------------------------------------------------------------------
    // 8. Alianzas Estratégicas y Convenios
    // ------------------------------------------------------------------------
    if (/alianza|alianzas|convenio|convenios|sapiencia|icetex|metro|civica|beneficios de bienestar|becas/.test(preguntaNorm)) {
      return {
        texto: `**Alianzas Estratégicas y Convenios (UNAL Sede Medellín y Facultad de Minas):**

1. **Alianzas de Permanencia y Bienestar:**
   - **ICETEX:** Líneas de crédito tradicionales, condonables y subsidios de sostenimiento.
   - **Sapiencia (Alcaldía de Medellín):** Fondos de Presupuesto Participativo, Fondo EPM y Becas Medellín para matrícula y sostenimiento.
   - **Metro de Medellín (Cívica Estudiante):** Tarifa preferencial con descuento superior al 50% en Metro, Tranvía, Metrocable y Metroplús.
   - **Auxilios de Bienestar UNAL:** Apoyo alimentario, bono de transporte y residencias estudiantiles (gestión en Bloque M4 Robledo / Bloque 11A Volador).

2. **Convenios de Software Técnico y Simulación Eléctrica:**
   - **Software de Potencia en Salas de Minas:** Licencias institucionales de **DigSILENT PowerFactory, MATLAB / Simulink, ETAP, AutoCAD Electrical y ATP/EMTP**.
   - **GitHub Student Developer Pack:** Cuentas Pro, GitHub Copilot gratuito y créditos en la nube (AWS, Azure, DigitalOcean).
   - **Autodesk Educación:** Licencias completas gratuitas con correo institucional \`@unal.edu.co\`.
   - **Microsoft 365 & JetBrains:** Herramientas completas para estudiantes.

Consulta todos los convenios detallados en la sección [Convenios](convenios.html).`,
        chips: ['Ver sección Convenios', 'Auxilios de Bienestar', '¿Quién es el creador de la web?'],
      };
    }

    // ------------------------------------------------------------------------
    // 9. Unidad Compartida / Google Drive de Recursos
    // ------------------------------------------------------------------------
    if (/drive|unidad compartida|banco de recursos|material de estudio|parciales pasados|parciales viejos|talleres|apuntes|libros/.test(preguntaNorm)) {
      return {
        texto: `### Carpeta Oficial de Recursos · Ingeniería Eléctrica 📚

Los talleres de circuitos, parciales anteriores de potencia, guías de laboratorio de máquinas eléctricas y libros guía están centralizados en el **Google Drive Oficial**:

🔗 **[Abrir Carpeta de Recursos de Eléctrica en Google Drive](${SOFIA_CFG.driveRecursos})**

💡 *Recomendación:* Inicia sesión con tu correo institucional (\`@unal.edu.co\`) para tener acceso inmediato a todas las carpetas organizadas por semestre y materia.`,
        chips: ['Ver Malla Curricular', 'Grupo Oficial de WhatsApp', 'Prerrequisitos de materias'],
      };
    }

    // ------------------------------------------------------------------------
    // 10. Prerrequisitos de materias específicas (Evaluación de alta prioridad)
    // ------------------------------------------------------------------------
    const esConsultaPrereq = /prerrequisit|prerequisit|requisito|que pide|que necesito para ver|para matricular|correquisit|abrir|correr/.test(preguntaNorm);
    const materiaEncontrada = buscarAsignaturaPorTexto(preguntaNorm);

    if (materiaEncontrada && (esConsultaPrereq || preguntaNorm.includes(normalizar(materiaEncontrada.nombre)))) {
      const preCodigos = materiaEncontrada.prerrequisitos || [];
      const correqCodigos = materiaEncontrada.correquisitos || [];

      let detallePrereq = '';
      if (preCodigos.length === 0) {
        detallePrereq = 'No tiene prerrequisitos. La puedes matricular desde tu primer semestre (según tu cupo de créditos y cita del SIA).';
      } else {
        const nombresPre = preCodigos.map((cod) => {
          const preMat = indices.materiasPorCodigo.get(cod);
          return preMat ? `• **${preMat.nombre}** (\`${cod}\`)` : `• Asignatura código \`${cod}\``;
        }).join('\n');
        detallePrereq = `**Prerrequisito(s) necesario(s):**\n${nombresPre}`;
      }

      let detalleCorreq = '';
      if (correqCodigos.length > 0) {
        const nombresCorreq = correqCodigos.map((cod) => {
          const cMat = indices.materiasPorCodigo.get(cod);
          return cMat ? `• **${cMat.nombre}** (\`${cod}\`)` : `• Asignatura código \`${cod}\``;
        }).join('\n');
        detalleCorreq = `\n\n**Correquisito(s) (simultáneos):**\n${nombresCorreq}`;
      }

      const semestreTxt = materiaEncontrada.semestre ? `Semestre sugerido: **${materiaEncontrada.semestre}°**` : 'Asignatura Optativa';
      const obligatoriaTxt = materiaEncontrada.obligatoria ? 'Obligatoria' : 'Optativa';

      const chipsPre = preCodigos
        .map((cod) => indices.materiasPorCodigo.get(cod))
        .filter(Boolean)
        .map((m) => `Prerrequisitos de ${m.nombre}`);

      return {
        texto: `### ${materiaEncontrada.nombre} (\`${materiaEncontrada.codigo}\`)

${detallePrereq}${detalleCorreq}

- **Créditos:** ${materiaEncontrada.creditos}
- **Tipología:** ${obligatoriaTxt} (${materiaEncontrada.agrupacion || 'General'})
- **Nivel:** ${semestreTxt}

Puedes consultar esta asignatura de forma interactiva en la [Malla Curricular](malla.html).`,
        chips: chipsPre.length > 0 ? chipsPre.slice(0, 3) : ['Ver Malla Curricular', 'Banco de Recursos en Drive'],
      };
    }

    // ------------------------------------------------------------------------
    // 11. Grupos Estudiantiles y Capítulos Técnicos (Grupo Ampère e IEEE)
    // ------------------------------------------------------------------------
    if (/ampere|grupo ampere|\bieee\b|\bpes\b|\bias\b|\bras\b|capitulo estudiante|capitulo tecnico|grupos estudiantiles|semillero|semilleros/.test(preguntaNorm)) {
      return {
        texto: `### Grupos Estudiantiles y Capítulos Técnicos en Eléctrica ⚡

En Ingeniería Eléctrica la vida estudiantil y extracurricular es pionera en la Facultad de Minas:

1. **Grupo Ampère (Grupo Estudiantil Oficial):**
   - Espacio institucional fundado para impulsar el liderazgo, proyectos extracurriculares de ingeniería, visitas técnicas y eventos académicos.
   - **Coordinador Docente:** Efraín Antonio Pérez Rojas (\`eaperez@unal.edu.co\`).
   - **Líder Estudiantil:** Bryan Alejandro Cely Gómez (\`ampere_med@unal.edu.co\`).
   - **Redes:**
     - Instagram: [@ampere_unalmed](https://www.instagram.com/ampere_unalmed/)
     - Facebook: [Grupo Ampère UNAL](https://es-la.facebook.com/grupoampere/)
     - YouTube: [Canal Ampère UNALMED](https://www.youtube.com/channel/UCxQqKLjdtk5UE_4UJTaTDpQ/)

2. **Rama Estudiantil IEEE UNAL Medellín:**
   - **IEEE PES (Power & Energy Society):** Redes de potencia, energías renovables y mercados eléctricos.
   - **IEEE IAS (Industry Applications Society):** Accionamientos industriales y sistemas eléctricos comerciales.
   - **IEEE RAS (Robotics and Automation Society):** Robótica, sensores y automatización.`,
        chips: ['Instagram Grupo Ampère', 'Grupo Oficial de WhatsApp', 'Banco de Recursos en Drive'],
      };
    }

    // ------------------------------------------------------------------------
    // 12. Grupos de WhatsApp de estudio / de materias
    // ------------------------------------------------------------------------
    if (/grupo de whatsapp|grupos de whatsapp|wpp de materias|grupo de estudio|comunidad de wpp/.test(preguntaNorm)) {
      return {
        texto: `### Grupos de WhatsApp y Redes de Estudio 💬

- Contamos con el **[Grupo Oficial de WhatsApp de Ingeniería Eléctrica](${SOFIA_CFG.grupoOficialWhatsApp})**, donde se comparten alertas de matrículas, monitorías, ofertas laborales y eventos académicos.
- Si administras el grupo de WhatsApp de alguna materia de Eléctrica y deseas que lo vinculemos en la [Malla Curricular](malla.html), escribe al representante o al creador del portal para sumarlo directamente a la ficha del curso.`,
        chips: ['Grupo Oficial de WhatsApp', 'Contacto del Representante', 'Banco en Drive'],
      };
    }

    // ------------------------------------------------------------------------
    // 13. Materias de último semestre / Décimo semestre en Eléctrica
    // ------------------------------------------------------------------------
    if (/ultimo semestre|ultimos semestres|decimo semestre|semestre 10|10 semestre|materias para graduarme|terminar la carrera/.test(preguntaNorm)) {
      return {
        texto: `En el **10° y último semestre** de Ingeniería Eléctrica el plan está diseñado para culminar tu formación profesional:

1. **Trabajo de Grado (\`3007424\` - 6 créditos):**
   Modalidades oficiales en la Facultad de Minas:
   - **Práctica de Extensión:** Pasantía empresarial en empresas del sector energético (ISA, XM, EPM, Celsia, Enel, Siemens, ABB, Schneider Electric).
   - **Proyecto de Investigación:** En laboratorios de máquinas, potencia, control o alta tensión en Campus Robledo.
   - **Asignaturas de Posgrado:** Cursar materias de la Maestría en Ingeniería Eléctrica en la Facultad de Minas.

2. **Créditos Disciplinares y de Libre Elección:**
   Completar los **34 créditos** de libre elección exigidos.

3. **Requisitos de Grado:**
   - Cumplir la suficiencia en idioma extranjero (Inglés B1/B2 según tu cohorte).
   - Tener aprobados los **170 créditos** del plan.

Monitorea tu progreso en tiempo real en [Mi Avance](avance.html).`,
        chips: ['Prerrequisitos de Trabajo de Grado', 'Ir a Mi Avance', 'Ver Malla Curricular'],
      };
    }

    // ------------------------------------------------------------------------
    // 14. Materias por semestre (Semestre 1 al 10)
    // ------------------------------------------------------------------------
    const matchSem = preguntaNorm.match(/semestre\s*([1-9]|10)\b|primer semestre|segundo semestre|tercer semestre|cuarto semestre|quinto semestre|sexto semestre|septimo semestre|octavo semestre|noveno semestre|decimo semestre/);
    if (matchSem) {
      let numSem = 0;
      if (matchSem[1]) {
        numSem = parseInt(matchSem[1], 10);
      } else {
        const ord = matchSem[0];
        if (ord.includes('primer')) numSem = 1;
        else if (ord.includes('segund')) numSem = 2;
        else if (ord.includes('tercer')) numSem = 3;
        else if (ord.includes('cuart')) numSem = 4;
        else if (ord.includes('quint')) numSem = 5;
        else if (ord.includes('sext')) numSem = 6;
        else if (ord.includes('septim')) numSem = 7;
        else if (ord.includes('octav')) numSem = 8;
        else if (ord.includes('noven')) numSem = 9;
        else if (ord.includes('decim')) numSem = 10;
      }

      if (numSem >= 1 && numSem <= 10) {
        const materiasSem = indices.materiasPorSemestre.get(numSem) || [];
        if (materiasSem.length > 0) {
          const listaTxt = materiasSem
            .map((asig) => {
              const preCount = asig.prerrequisitos?.length || 0;
              const preTxt = preCount === 0 ? '_Sin prereq_' : `_${preCount} prerrequisito(s)_`;
              return `• **${asig.nombre}** (\`${asig.codigo}\`, ${asig.creditos} cr) — ${preTxt}`;
            })
            .join('\n');

          const creditosTotal = materiasSem.reduce((acc, m) => acc + (m.creditos || 0), 0);

          return {
            texto: `### Asignaturas sugeridas para Semestre ${numSem}° (${creditosTotal} créditos en la ruta)

${listaTxt}

Puedes explorar sus relaciones en la [Malla Curricular](malla.html).`,
            chips: materiasSem.slice(0, 3).map((m) => `Prerrequisitos de ${m.nombre}`),
          };
        }
      }
    }

    // ------------------------------------------------------------------------
    // 15. Cancelación de materias o cancelación de semestre
    // ------------------------------------------------------------------------
    if (/cancelar|cancelacion|cancelaciones|extemporanea|retirar materia|plazo cancelar|hasta cuando cancelar/.test(preguntaNorm)) {
      return {
        texto: `**Plazos y Condiciones para Cancelar Asignaturas en la Facultad de Minas (Pregrado):**

1. **Semana 3 (Cancelación sin pérdida de créditos):**
   - Es el periodo en el SIA donde puedes retirar asignaturas y los créditos regresan completos a tu bolsa disponible para futuros semestres.

2. **Semana 8 (Cancelación ordinaria con pérdida de créditos):**
   - Puedes cancelar la materia en el SIA hasta esta semana. No afectará tu promedio acumulado, pero esos créditos no se devuelven a tu bolsa.

3. **Cancelación Extemporánea (Por fuerza mayor o enfermedad):**
   - Si superaste la semana 8 y sufriste una calamidad médica, psicológica o laboral comprobable, radicas la solicitud ante el **SGS de la Facultad de Minas**:
     🔗 [Portal Solicitudes SGS Minas](${SOFIA_CFG.tramitesMinasUrl})
   - Adjuntas los certificados médicos avalados por Bienestar Universitario (Bloque M4 / Robledo).`,
        chips: ['Portal Solicitudes SGS', 'Calendario académico', 'Asesoría Estudiantil'],
      };
    }

    // ------------------------------------------------------------------------
    // 16. Consultas del Calendario Académico
    // ------------------------------------------------------------------------
    if (/calendario|fechas|cuando empiezan clases|cuando terminan|semana de induccion|recesos|evaluacion docente/.test(preguntaNorm)) {
      if (indices.calendarioFilas.length > 0) {
        const palabrasClave = preguntaNorm.split(' ').filter((p) => p.length > 3);
        const coincidencias = indices.calendarioFilas.filter((f) =>
          palabrasClave.some((p) => f.eventoNorm.includes(p))
        );

        if (coincidencias.length > 0) {
          const listado = coincidencias
            .slice(0, 5)
            .map((c) => `• **${c.evento}:** ${c.fecha} _(${c.grupo})_`)
            .join('\n');

          return {
            texto: `**Fechas encontradas en el Calendario Académico Oficial:**\n\n${listado}\n\nPuedes revisar todas las fechas en la guía de [Información General](info.html).`,
            chips: ['Cancelar materias', 'Citas del SIA', 'Bolsa de créditos'],
          };
        }
      }

      return {
        texto: `El **Calendario Académico Oficial (2026-2S)** de la UNAL Sede Medellín establece los hitos clave para matrícula, inicio de clases, cancelaciones y cierre de actas.

Consulta la tabla completa de fechas discriminada por semanas en la sección de [Información General](info.html).`,
        chips: ['Plazos para cancelar materias', 'Citas del SIA', 'Bolsa de créditos'],
      };
    }

    // ------------------------------------------------------------------------
    // 17. P.A.P.A., Citas SIA y Bolsa de Créditos
    // ------------------------------------------------------------------------
    if (/papa|promedio|citas sia|dninfoa|bolsa de creditos|cupo de creditos|creditos adicionales|como calcular el papa/.test(preguntaNorm)) {
      return {
        texto: `**Conceptos Clave del Sistema Académico SIA:**

- **P.A.P.A. (Promedio Aritmético Ponderado Acumulado):**
  Se calcula multiplicando la calificación final de cada materia cursada (aprobada o reprobada) por sus créditos, sumando los productos y dividiéndolos entre el total de créditos cursados.
  Determina tu grupo de citación para matrícula, adjudicación de becas y traslados de programa.

- **Citas DNINFOA:**
  Se asignan en 4 grupos de prelación basados en tu P.A.P.A. del periodo anterior y avance de carrera:
  - *Grupo 1:* Estudiantes con mejores promedios y deportistas representativos.
  - *Grupos 2, 3 y 4:* Orden sucesivo de cita para inscripción de asignaturas.

- **Bolsa de Créditos:**
  Recibes un cupo inicial para tu plan (170 créditos en Ingeniería Eléctrica). Si mantienes un P.A.P.A. sobresaliente, puedes solicitar créditos adicionales a la Vicedecanatura Académica vía SGS.

Calcula tu proyección en [Mi Avance](avance.html) o lee la guía completa en [Información General](info.html).`,
        chips: ['Ir a Mi Avance', '¿Cómo hacer cambio de carrera?', 'Ver Malla Curricular'],
      };
    }

    // ------------------------------------------------------------------------
    // 18. Horas de Corresponsabilidad
    // ------------------------------------------------------------------------
    if (/corresponsabilidad|horas de corresponsabilidad|servicio social|beneficiarios bienestar/.test(preguntaNorm)) {
      return {
        texto: `**Horas de Corresponsabilidad en la UNAL:**

Si eres beneficiario de apoyos socioeconómicos de Bienestar Universitario (Gestión Alimentaria, Residencias o Bonos de Transporte):
- Debes cumplir entre **20 y 40 horas** por semestre de actividades solidarias en dependencias de la universidad.
- En la Facultad de Minas puedes cumplirlas apoyando laboratorios de máquinas, circuitos, salas de cómputo, biblioteca de Robledo o eventos de la facultad.
- El registro y legalización se realiza en el sistema de Bienestar Universitario.`,
        chips: ['Auxilios de Bienestar', 'Información General', 'Contacto Asesoría Minas'],
      };
    }

    // ------------------------------------------------------------------------
    // 19. Laboratorios y Alta Tensión en Eléctrica
    // ------------------------------------------------------------------------
    if (/laboratorio|laboratorios|alta tension|maquinas|sala de computo/.test(preguntaNorm)) {
      return {
        texto: `**Laboratorios e Infraestructura de Ingeniería Eléctrica:**

En el **Campus Robledo**, el programa cuenta con espacios de vanguardia:
- **Laboratorio de Máquinas Eléctricas:** Bancos de transformadores, motores de inducción, generadores sincrónicos y dinamómetros.
- **Laboratorio de Circuitos y Electrónica:** Osciloscopios digitales, fuentes reguladas y generadores de señales.
- **Laboratorio de Alta Tensión:** Generadores de impulsos tipo rayo, ensayos de aislamiento dieléctrico y pruebas a descargadores de sobretensión.
- **Salas de Cómputo de Minas:** Simulaciones en DigSILENT PowerFactory, MATLAB/Simulink y ETAP.`,
        chips: ['Prerrequisitos de Máquinas Eléctricas I', 'Grupo Ampère e IEEE', 'Ver Malla Curricular'],
      };
    }

    // ------------------------------------------------------------------------
    // 20. Fallback Inteligente (Sugerencias Guiadas)
    // ------------------------------------------------------------------------
    return {
      texto: `No encontré una coincidencia exacta para tu consulta, pero estoy lista para orientarte en cualquiera de estos temas clave de **Ingeniería Eléctrica**:

- Consulta sobre prerrequisitos de cualquier materia (ej. *Circuitos I y II*, *Sistemas de Potencia*, *Máquinas Eléctricas*, *Protecciones Eléctricas*).
- Cómo solicitar cambio de carrera o convalidaciones ante la Facultad de Minas.
- Quién es el creador de la plataforma o los representantes de carrera.
- Actividades del **Grupo Ampère** y los capítulos profesionales de la **IEEE** (PES, IAS, RAS).
- Acceso al Google Drive oficial con parciales y memorias de cálculo.

¿Qué te gustaría consultar?`,
      chips: [
        '¿Qué es la malla curricular?',
        '¿Qué tipo de materias hay?',
        '¿Por qué estudiar Eléctrica?',
        '¿Quién es el creador de la web?',
        'Contacto del Representante',
        'Grupo Ampère e IEEE',
      ],
    };
  }

  function buscarAsignaturaPorTexto(textoNorm) {
    // 1. Por código numérico directo
    const matchCod = textoNorm.match(/\b(\d{7}|10000\d{2}-m|10000\d{2})\b/i);
    if (matchCod) {
      const codigo = matchCod[1].toUpperCase();
      if (indices.materiasPorCodigo.has(codigo)) {
        return indices.materiasPorCodigo.get(codigo);
      }
    }

    // 2. Por nombre oficial de la asignatura (priorizando nombres más largos)
    const nombresOrdenados = Array.from(indices.materiasPorNombre.entries()).sort(
      (a, b) => b[0].length - a[0].length
    );
    for (const [nomNorm, asig] of nombresOrdenados) {
      if (textoNorm.includes(nomNorm)) {
        return asig;
      }
    }

    // 3. Por alias ordenados de mayor a menor longitud
    const aliasOrdenados = Array.from(indices.aliasMaterias.entries()).sort(
      (a, b) => b[0].length - a[0].length
    );

    for (const [alias, asig] of aliasOrdenados) {
      if (alias.length <= 4) {
        const regexAlias = new RegExp(`\\b${alias.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
        if (regexAlias.test(textoNorm)) {
          return asig;
        }
      } else if (textoNorm.includes(alias)) {
        return asig;
      }
    }

    return null;
  }

  // ==========================================================================
  // 5. GENERACIÓN DEL DOM Y ELEMENTOS DE INTERFAZ
  // ==========================================================================

  function crearElementosDOM() {
    if (document.getElementById('sofia-contenedor-global')) return;

    const contenedorGlobal = document.createElement('div');
    contenedorGlobal.id = 'sofia-contenedor-global';
    contenedorGlobal.className = 'sofia-flotante-wrap';

    // 1. Globo de bienvenida (tooltip)
    const globo = document.createElement('div');
    globo.className = 'sofia-globo-bienvenida';
    globo.id = 'sofia-globo';
    globo.setAttribute('role', 'status');
    globo.innerHTML = `
      <span class="sofia-globo-texto">👋 ¿Dudas con materias o trámites? <strong>Pregúntale a sofIA</strong></span>
      <button class="sofia-globo-cerrar" id="sofia-globo-cerrar" type="button" aria-label="Cerrar aviso">✕</button>
    `;

    // 2. Botón flotante circular
    const boton = document.createElement('button');
    boton.className = 'sofia-boton';
    boton.id = 'sofia-btn-toggle';
    boton.type = 'button';
    boton.setAttribute('aria-label', 'Abrir asistente virtual sofIA de Ingeniería Eléctrica');
    boton.setAttribute('aria-expanded', 'false');
    boton.innerHTML = `
      <span class="sofia-boton__halo" aria-hidden="true"></span>
      ${SOFIA_SVG_AVATAR}
      <span class="sofia-boton__badge" title="sofIA en línea"></span>
    `;

    // 3. Ventana modal del chat
    const ventana = document.createElement('section');
    ventana.className = 'sofia-ventana';
    ventana.id = 'sofia-ventana';
    ventana.setAttribute('aria-label', 'Ventana del asistente virtual sofIA');
    ventana.setAttribute('aria-hidden', 'true');
    ventana.innerHTML = `
      <header class="sofia-cabecera">
        <div class="sofia-cabecera__info">
          <div class="sofia-cabecera__avatar">
            ${SOFIA_SVG_AVATAR}
          </div>
          <div class="sofia-cabecera__titulos">
            <div class="sofia-cabecera__nombre-fila">
              <span class="sofia-cabecera__nombre">${SOFIA_CFG.nombre}</span>
              <span class="sofia-cabecera__tag">UNAL</span>
            </div>
            <span class="sofia-cabecera__estado">
              <span class="sofia-cabecera__punto" aria-hidden="true"></span>
              En línea · Asistente de Eléctrica
            </span>
          </div>
        </div>
        <div class="sofia-cabecera__acciones">
          <button class="sofia-accion-btn" id="sofia-btn-reiniciar" type="button" title="Reiniciar conversación" aria-label="Reiniciar conversación">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
          </button>
          <button class="sofia-accion-btn" id="sofia-btn-maximizar" type="button" title="Maximizar / Restaurar" aria-label="Maximizar tamaño del chat">
            <svg id="sofia-icono-maximizar" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </button>
          <button class="sofia-accion-btn" id="sofia-btn-cerrar" type="button" title="Cerrar chat" aria-label="Cerrar chat">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </header>

      <div class="sofia-cuerpo" id="sofia-cuerpo" role="log" aria-live="polite">
        <div class="sofia-mensajes" id="sofia-mensajes"></div>
      </div>

      <footer class="sofia-pie">
        <form class="sofia-formulario" id="sofia-form">
          <input
            type="text"
            class="sofia-input"
            id="sofia-input"
            placeholder="Pregúntale a sofIA sobre la malla, materias, alianzas..."
            autocomplete="off"
            aria-label="Escribe tu consulta para sofIA"
          />
          <button type="submit" class="sofia-btn-enviar" id="sofia-btn-enviar" aria-label="Enviar mensaje">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>
        <span class="sofia-subtexto">sofIA consulta la base oficial del portal de Ingeniería Eléctrica UNAL.</span>
      </footer>
    `;

    contenedorGlobal.appendChild(globo);
    contenedorGlobal.appendChild(boton);
    document.body.appendChild(contenedorGlobal);
    document.body.appendChild(ventana);

    vincularEventos();
  }

  // ==========================================================================
  // 6. GESTIÓN DE INTERACCIÓN, MENSAJES Y RENDERIZADO
  // ==========================================================================

  let chatAbierto = false;
  let chatMaximizado = false;

  function abrirSofia() {
    const ventana = document.getElementById('sofia-ventana');
    const boton = document.getElementById('sofia-btn-toggle');
    const input = document.getElementById('sofia-input');
    const globo = document.getElementById('sofia-globo');

    if (!ventana) return;

    chatAbierto = true;
    ventana.classList.add('is-abierta');
    ventana.setAttribute('aria-hidden', 'false');
    if (boton) boton.setAttribute('aria-expanded', 'true');
    if (globo) globo.style.display = 'none';

    sessionStorage.setItem('electrica.sofia.globo_oculto', '1');

    // Mensaje de bienvenida inicial si está vacío
    const contenedorMensajes = document.getElementById('sofia-mensajes');
    if (contenedorMensajes && contenedorMensajes.children.length === 0) {
      enviarRespuestaSofia(
        `¡Hola! Soy **${SOFIA_CFG.nombre}**, asistente virtual inteligente de **${SOFIA_CFG.programa}** en la **${SOFIA_CFG.facultad}** (UNAL Medellín).

¿En qué puedo orientarte hoy? Puedes seleccionar una de las opciones de abajo o escribir libremente tu consulta.`,
        [
          '¿Qué es la malla curricular?',
          '¿Qué tipo de materias hay?',
          '¿Por qué estudiar Eléctrica?',
          '¿Quién es el creador de la web?',
          'Contacto del Representante',
          'Grupo Ampère e IEEE',
        ]
      );
    }

    setTimeout(() => {
      if (input) input.focus();
    }, 200);
  }

  function cerrarSofia() {
    const ventana = document.getElementById('sofia-ventana');
    const boton = document.getElementById('sofia-btn-toggle');

    if (!ventana) return;

    chatAbierto = false;
    ventana.classList.remove('is-abierta');
    ventana.setAttribute('aria-hidden', 'true');
    if (boton) {
      boton.setAttribute('aria-expanded', 'false');
      boton.focus();
    }
  }

  function toggleSofia() {
    if (chatAbierto) {
      cerrarSofia();
    } else {
      abrirSofia();
    }
  }

  function toggleMaximizar() {
    const ventana = document.getElementById('sofia-ventana');
    const icono = document.getElementById('sofia-icono-maximizar');
    if (!ventana) return;

    chatMaximizado = !chatMaximizado;
    ventana.classList.toggle('is-maximizada', chatMaximizado);

    if (icono) {
      icono.innerHTML = chatMaximizado
        ? '<path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7"/>'
        : '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>';
    }
  }

  function reiniciarChat() {
    const contenedorMensajes = document.getElementById('sofia-mensajes');
    if (contenedorMensajes) contenedorMensajes.innerHTML = '';

    enviarRespuestaSofia(
      `Conversación reiniciada. ¿Qué otra duda sobre **${SOFIA_CFG.programa}** te gustaría consultar?`,
      [
        '¿Qué es la malla curricular?',
        '¿Qué tipo de materias hay?',
        '¿Por qué estudiar Eléctrica?',
        '¿Quién es el creador de la web?',
        'Contacto del Representante',
        'Grupo Ampère e IEEE',
      ]
    );
  }

  function scrollAlFinal() {
    const cuerpo = document.getElementById('sofia-cuerpo');
    if (cuerpo) {
      cuerpo.scrollTop = cuerpo.scrollHeight;
    }
  }

  function horaActual() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function procesarMarkdown(texto) {
    if (!texto) return '';

    let html = texto
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Encabezados markdown
    html = html.replace(/^### (.*$)/gim, '<h4 style="margin:6px 0 4px 0; color:#FFBB02; font-size:14px; font-weight:700;">$1</h4>');
    html = html.replace(/^## (.*$)/gim, '<h3 style="margin:8px 0 4px 0; color:#FFBB02; font-size:15px; font-weight:700;">$1</h3>');

    // Negrita e itálica
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.*?)_/g, '<em>$1</em>');

    // Código en línea
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');

    // Enlaces markdown [texto](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Listas con viñetas
    const lineas = html.split('\n');
    let enLista = false;
    const resultado = [];

    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i].trim();
      if (/^[•\-*]\s+(.*)/.test(linea)) {
        if (!enLista) {
          resultado.push('<ul>');
          enLista = true;
        }
        resultado.push(`<li>${linea.replace(/^[•\-*]\s+/, '')}</li>`);
      } else {
        if (enLista) {
          resultado.push('</ul>');
          enLista = false;
        }
        if (linea.length > 0) {
          resultado.push(`<p>${linea}</p>`);
        }
      }
    }
    if (enLista) resultado.push('</ul>');

    return resultado.join('');
  }

  function agregarMensajeUsuario(texto) {
    const contenedor = document.getElementById('sofia-mensajes');
    if (!contenedor) return;

    const wrap = document.createElement('div');
    wrap.className = 'sofia-mensaje sofia-mensaje--usuario';
    wrap.innerHTML = `
      <div class="sofia-burbuja">
        <p>${texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
      </div>
      <span class="sofia-mensaje__hora">${horaActual()}</span>
    `;

    contenedor.appendChild(wrap);
    scrollAlFinal();
  }

  function mostrarIndicadorEscritura() {
    const contenedor = document.getElementById('sofia-mensajes');
    if (!contenedor) return null;

    const wrap = document.createElement('div');
    wrap.className = 'sofia-mensaje sofia-mensaje--sofia sofia-mensaje--escritura';
    wrap.id = 'sofia-escritura';
    wrap.innerHTML = `
      <div class="sofia-burbuja">
        <span class="sofia-punto-ola"></span>
        <span class="sofia-punto-ola"></span>
        <span class="sofia-punto-ola"></span>
      </div>
    `;

    contenedor.appendChild(wrap);
    scrollAlFinal();
    return wrap;
  }

  function removerIndicadorEscritura() {
    const el = document.getElementById('sofia-escritura');
    if (el) el.remove();
  }

  function enviarRespuestaSofia(texto, chips = [], enlaces = []) {
    const contenedor = document.getElementById('sofia-mensajes');
    if (!contenedor) return;

    removerIndicadorEscritura();

    const wrap = document.createElement('div');
    wrap.className = 'sofia-mensaje sofia-mensaje--sofia';

    let chipsHtml = '';
    if (chips && chips.length > 0) {
      const chipsBtns = chips
        .map(
          (c) => `<button type="button" class="sofia-chip" data-chip="${c.replace(/"/g, '&quot;')}">${c}</button>`
        )
        .join('');
      chipsHtml = `<div class="sofia-chips-contenedor">${chipsBtns}</div>`;
    }

    let enlacesHtml = '';
    if (enlaces && enlaces.length > 0) {
      const enlacesCards = enlaces
        .map(
          (e) => `
          <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="sofia-enlace-card">
            <span>${e.titulo}</span>
            <span class="sofia-enlace-card__icono">↗</span>
          </a>
        `
        )
        .join('');
      enlacesHtml = `<div class="sofia-enlaces-contenedor">${enlacesCards}</div>`;
    }

    wrap.innerHTML = `
      <div class="sofia-burbuja">
        ${procesarMarkdown(texto)}
        ${enlacesHtml}
        ${chipsHtml}
      </div>
      <span class="sofia-mensaje__hora">${horaActual()}</span>
    `;

    contenedor.appendChild(wrap);

    // Eventos a los chips
    wrap.querySelectorAll('.sofia-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chipTexto = btn.getAttribute('data-chip');
        if (chipTexto) procesarConsultaUsuario(chipTexto);
      });
    });

    scrollAlFinal();
  }

  function procesarConsultaUsuario(consulta) {
    if (!consulta || !consulta.trim()) return;

    const texto = consulta.trim();
    agregarMensajeUsuario(texto);

    const input = document.getElementById('sofia-input');
    if (input) input.value = '';

    mostrarIndicadorEscritura();

    // Pequeño retardo orgánico simulando procesamiento inteligente
    setTimeout(() => {
      const respuesta = responderPregunta(texto);
      enviarRespuestaSofia(respuesta.texto, respuesta.chips, respuesta.enlaces);
    }, 280);
  }

  // ==========================================================================
  // 7. VINCULACIÓN DE EVENTOS DEL DOM
  // ==========================================================================

  function vincularEventos() {
    const btnToggle = document.getElementById('sofia-btn-toggle');
    const btnCerrar = document.getElementById('sofia-btn-cerrar');
    const btnMaximizar = document.getElementById('sofia-btn-maximizar');
    const btnReiniciar = document.getElementById('sofia-btn-reiniciar');
    const form = document.getElementById('sofia-form');
    const input = document.getElementById('sofia-input');
    const globo = document.getElementById('sofia-globo');
    const globoCerrar = document.getElementById('sofia-globo-cerrar');

    if (btnToggle) btnToggle.addEventListener('click', toggleSofia);
    if (btnCerrar) btnCerrar.addEventListener('click', cerrarSofia);
    if (btnMaximizar) btnMaximizar.addEventListener('click', toggleMaximizar);
    if (btnReiniciar) btnReiniciar.addEventListener('click', reiniciarChat);

    if (globo) {
      globo.addEventListener('click', (e) => {
        if (e.target !== globoCerrar) {
          abrirSofia();
        }
      });
    }

    if (globoCerrar) {
      globoCerrar.addEventListener('click', (e) => {
        e.stopPropagation();
        if (globo) globo.style.display = 'none';
        sessionStorage.setItem('electrica.sofia.globo_oculto', '1');
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input && input.value.trim()) {
          procesarConsultaUsuario(input.value);
        }
      });
    }

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && chatAbierto) {
        cerrarSofia();
      }
    });

    // Ocultar globo si ya fue cerrado en la sesión
    if (sessionStorage.getItem('electrica.sofia.globo_oculto') === '1' && globo) {
      globo.style.display = 'none';
    }
  }

  // ==========================================================================
  // 8. INICIALIZACIÓN Y API PÚBLICA (WINDOW.SOFIA)
  // ==========================================================================

  function moduloSofia() {
    cargarDatos();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', crearElementosDOM);
    } else {
      crearElementosDOM();
    }
  }

  moduloSofia();

  // Exposición controlada en window para integración con otros módulos
  window.sofIA = {
    abrir: abrirSofia,
    cerrar: cerrarSofia,
    preguntar: procesarConsultaUsuario,
    responder: responderPregunta,
    inicializar: cargarDatos,
  };
})();
