// ─────────────────────────────────────────────────────────────
// Contenido de la web. Para añadir una obra, copia un bloque de
// OBRAS, pon sus imágenes en /img y ajusta título, año y ficha.
// Una obra sin imágenes se muestra como un recuadro gris (hueco).
// ─────────────────────────────────────────────────────────────

const OBRAS = [
  { id: 'figura-gris-tumbada', titulo: 'Figura gris tumbada', año: '2026', ficha: 'Óleo sobre lienzo, — × — cm.',
    imagenes: [['figura-gris.jpg', 1254, 1254]] },
  { id: 'luna-artificial', titulo: 'Luna artificial', año: '2025', ficha: 'Óleo sobre tela, 120 × 80 cm.',
    imagenes: [['luna-1.jpg', 1086, 1448], ['luna-2.jpg', 1080, 1662], ['luna-3.jpg', 1440, 1800]] },
  { id: 'cara-azul-con-mano', titulo: 'Cara azul con mano', año: '2025', ficha: 'Acrílico sobre lienzo, — × — cm.', hueco: [437, 544] },
  { id: 'oreja', titulo: 'Oreja', año: '2025', ficha: 'Acrílico sobre lienzo, — × — cm.', hueco: [480, 544] },
  { id: 'sin-titulo-2025', titulo: 'Sin título', año: '2025', ficha: '— × — cm.',
    imagenes: [['sin-titulo-2025-1.jpg', 1080, 1350], ['sin-titulo-2025-2.jpg', 1080, 1350]] },
  { id: 'mano-naranja', titulo: 'Mano naranja', año: '2024', ficha: 'Acrílico sobre lienzo, — × — cm.', hueco: [472, 544] },
  { id: 'manos-y-tallos', titulo: 'Manos y tallos', año: '2024', ficha: 'Óleo sobre lienzo, — × — cm.', hueco: [366, 544] },
  { id: 'figura-azul-y-rosa', titulo: 'Figura azul y rosa', año: '2024', ficha: 'Óleo sobre lienzo, — × — cm.', hueco: [336, 544] },
  { id: 'cara-mano-en-la-boca', titulo: 'Cara, mano en la boca', año: '2024', ficha: '', hueco: [408, 544] },
  { id: 'azul-de-la-distancia', titulo: 'Azul de la distancia', año: '2024', ficha: 'Cianotipia sobre tela, 185 × 95 cm.',
    imagenes: [['azul-1.jpg', 1800, 1200], ['azul-2.jpg', 1800, 1200]] },
  { id: 'perfil', titulo: 'Perfil', año: '2023', ficha: 'Acrílico sobre lienzo, — × — cm.', hueco: [435, 544] },
  { id: 'flores', titulo: 'Flores', año: '2021', ficha: 'Tinta sobre papel, 2 dibujos.',
    imagenes: [['flores-1.jpg', 1208, 1800], ['flores-2.jpg', 1193, 1800]] },
];

const ACERCA = {
  foto: 'acerca.jpg',
  texto: `Soy artista visual y diseñadora. Nací en Veracruz, México, y actualmente vivo y trabajo en Pontevedra, Galicia.

Mi práctica pictórica explora la figura humana y su relación con el espacio. Me interesan los gestos cotidianos: apoyar la cabeza sobre una mano, permanecer sentado, recostarse o tocar algo. A través de estas acciones, construyo escenas donde la postura y el peso del cuerpo sugieren una experiencia interior.

Trabajo desde la figuración, simplificando la anatomía y alterando sus proporciones mediante contornos marcados y planos de color. Me interesa la tensión entre la superficie plana de la pintura y la presencia casi escultórica de los cuerpos. Las manos, los rostros y las extremidades adquieren volumen y peso, mientras ciertas zonas se aplanan o se confunden con el fondo.

El espacio participa de esa construcción. Los planos que forman una habitación, una ventana o una sombra dialogan con los que componen la figura. Cuerpo y entorno se definen mutuamente: sus formas se prolongan, se interrumpen o se unen a través del color. La profundidad convive con la planitud, generando espacios reconocibles cuya perspectiva resulta inestable.

La luz y la sombra articulan estas relaciones. Modelan los cuerpos y, al mismo tiempo, los dividen en superficies de color. En ese tránsito entre lo plano y lo volumétrico, busco dar a los gestos cotidianos una presencia extraña y suspendida, capaz de sugerir algo que todavía no encuentra palabras.`,
};

// Cada entrada: [título, lugar, año]
const CV = {
  'Exposiciones individuales': [
    ['Sustancia en las sombras', 'Trastienda Machete, Ciudad de México', '2025'],
    ['Entropías', 'BUAP, Puebla', '2018'],
    ['Punto de encuentro', 'Luz de la Nevera, UDLAP, Puebla', '2018'],
  ],
  'Exposiciones colectivas': [
    ['Physical Landscapes: Next-Gen Voices in Mexican Painting', 'Alday Hunken Gallery, Atlanta', '2025'],
    ['Agentes líquidos', 'CAL-COOP, Guadalajara', '2024'],
    ['Correspondencias', 'Facultad de Artes y Diseño FAD, UNAM, Ciudad de México', '2022'],
    ['Platitudes', 'Estudio Aldo Chaparro, Monterrey', '2021'],
    ['Otro trabajo otro trabaja', 'Espacio Cabeza, Guadalajara', '2020'],
    ['Un nido en el huracán', 'Otro Espacio, Guadalajara', '2020'],
    ['OFF-SITE MX', 'Ciudad de México', '2020'],
    ['“I am the sun, you are the moon” UN-M2', 'Hotel Demetria, Guadalajara', '2019'],
    ['Jóvenes Creadores', 'Foto Museo Cuatro Caminos, Ciudad de México', '2019'],
    ['Plantas, desnudos y recortes', 'Aurelia, Guadalajara', '2019'],
    ['Proyecto rotatoria', 'Centro Cultural Caba, CABA, Argentina', '2019'],
    ['Nueva piel para una vieja ceremonia', 'Galería Karen Huber, Ciudad de México', '2019'],
    ['[DE]limitaciones inciertas', 'Puebla', '2018'],
    ['Intervención Edgar Ortega en Entropías', 'BUAP, Puebla', '2018'],
    ['El tiempo habitado', 'Espacio Catorce, Puebla', '2018'],
    ['Intervención con mural', 'Mercado San Juan, Puebla', '2017'],
    ['Aracne', 'Museo de Erasto Cortés, Puebla', '2017'],
    ['A time for everything and for everything a time', 'Container City, Puebla', '2017'],
    ['De-construyendo', 'Terminal 205, Puebla', '2016'],
  ],
  'Ferias': [
    ['SWAB Barcelona', 'Con Trastienda Machete, Barcelona', '2026'],
    ['F-A-M-A', 'Monterrey', '2019'],
  ],
  'Educación': [
    ['Máster en Diseño Gráfico Avanzado', 'LABASAD, Barcelona', '2023'],
    ['Licenciatura en Artes Plásticas', 'Universidad de las Américas, Puebla', '2017'],
  ],
  'Reconocimientos': [
    ['Beca Jóvenes Creadores en pintura', 'FONCA / CONACULTA', '2018–2019'],
  ],
};

const REDES = [
  ['Instagram', 'https://www.instagram.com/efifania'],
  ['Email', 'mailto:estefania.viyellaoa@gmail.com'],
];

// ─────────────────────────────────────────────────────────────

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') n.className = v; else if (k === 'text') n.textContent = v; else n.setAttribute(k, v);
  }
  n.append(...kids.filter(Boolean));
  return n;
};
const fichaDe = o => `(${o.titulo}). ${o.año}.${o.ficha ? ' ' + o.ficha : ''}`;
const entradaCV = ([t, l, a]) => el('p', { text: `${t}\n${l}\n${a}` });
const obra = id => OBRAS.find(o => o.id === id);

// Filas del índice (comparten escritorio y móvil)
function llenarFilas(raiz) {
  const [obras, extra] = raiz.querySelectorAll('.filas');
  for (const o of OBRAS) {
    obras.append(el('li', { 'data-id': o.id },
      el('a', { href: '#' + o.id }, el('span', { class: 'titulo', text: `(${o.titulo})` }), el('span', { text: o.año }))));
  }
  for (const [id, txt] of [['acerca', 'Acerca'], ['cv', 'CV']]) {
    extra.append(el('li', { 'data-id': id },
      el('a', { href: '#' + id }, el('span', { class: 'titulo', text: txt }), el('span', { text: '→' }))));
  }
  const redes = raiz.querySelector('.redes');
  for (const [t, u] of REDES) redes.append(el('a', { href: u, target: u.startsWith('http') ? '_blank' : '', rel: 'noopener', text: t }));
  if (raiz.closest('.movil')) redes.append(el('a', { href: '#cv', 'data-id': 'cv', text: 'CV' }));
}

// ───────── Escritorio ─────────
const indice = $('.indice');
const visorImagen = $('.visor-imagen');
const flechas = $('.visor .flechas');
const ficha = $('.ficha');
const cvEscritorio = $('.cv-escritorio');
let seleccion = OBRAS[0].id, mostrada = null, imagen = 0;

function construirCVEscritorio() {
  const s = Object.entries(CV);
  const col = (...bloques) => {
    const c = el('div', { class: 'cv-col' });
    bloques.forEach(([titulo, items], i) => {
      if (i) c.append(el('div', { class: 'espacio' }));
      c.append(el('h3', { text: titulo }), ...items.map(entradaCV));
    });
    return c;
  };
  const colectivas = CV['Exposiciones colectivas'], mitad = Math.ceil(colectivas.length / 2);
  cvEscritorio.append(
    col(['Exposiciones individuales', CV['Exposiciones individuales']], ['Ferias', CV['Ferias']]),
    col(['Exposiciones colectivas', colectivas.slice(0, mitad)]),
    col([' ', colectivas.slice(mitad)]),
    col(['Educación', CV['Educación']], ['Reconocimientos', CV['Reconocimientos']]),
  );
}

function mostrar(id, idx = 0) {
  if (mostrada === id && idx === imagen) return;
  mostrada = id; imagen = idx;
  const esCV = id === 'cv';
  cvEscritorio.hidden = !esCV;
  $('.visor').hidden = esCV;
  ficha.hidden = esCV;
  visorImagen.replaceChildren();
  flechas.hidden = true;
  if (esCV) return;
  if (id === 'acerca') {
    visorImagen.append(el('img', { src: 'img/' + ACERCA.foto, alt: 'Estefanía Viyella', class: 'acerca' }));
    ficha.textContent = ACERCA.texto;
    return;
  }
  const o = obra(id);
  if (o.imagenes) {
    const [src] = o.imagenes[idx];
    visorImagen.append(el('img', { src: 'img/' + src, alt: o.titulo }));
    flechas.hidden = o.imagenes.length < 2;
  } else {
    visorImagen.append(el('div', { class: 'hueco', style: `aspect-ratio:${o.hueco[0]}/${o.hueco[1]}` }));
  }
  ficha.textContent = fichaDe(o);
}

function seleccionar(id, cerrar = true) {
  seleccion = id;
  document.querySelectorAll('.filas li').forEach(li => li.classList.toggle('sel', li.dataset.id === id));
  mostrar(id);
  if (cerrar) abrirIndice(false);
  try { history.replaceState(null, '', id === OBRAS[0].id ? location.pathname : '#' + id); } catch {}
}

function abrirIndice(si) {
  indice.classList.toggle('abierto', si);
  $('.indice-flecha').textContent = si ? '→' : '←';
  $('.indice-flecha').setAttribute('aria-label', si ? 'Cerrar índice' : 'Abrir índice');
}

indice.addEventListener('click', e => {
  if (!indice.classList.contains('abierto') && !e.target.closest('.redes a')) { e.preventDefault(); abrirIndice(true); }
});
$('.indice-flecha').addEventListener('click', e => { e.stopPropagation(); abrirIndice(!indice.classList.contains('abierto')); });
indice.querySelectorAll('.filas').forEach(ul => {
  ul.addEventListener('click', e => {
    const li = e.target.closest('li'); if (!li || !indice.classList.contains('abierto')) return;
    e.preventDefault(); e.stopPropagation(); seleccionar(li.dataset.id);
  });
  ul.addEventListener('mouseover', e => {
    const li = e.target.closest('li'); if (!li || !indice.classList.contains('abierto')) return;
    mostrar(li.dataset.id);
  });
});
$('.indice-lista').addEventListener('mouseleave', () => mostrar(seleccion));
flechas.addEventListener('click', e => {
  const o = obra(mostrada); if (!o || !o.imagenes) return;
  const n = o.imagenes.length, d = e.target.closest('.anterior') ? -1 : e.target.closest('.siguiente') ? 1 : 0;
  if (d) mostrar(mostrada, (imagen + d + n) % n);
});

// ───────── Móvil ─────────
const feed = $('.feed');
const menuMovil = $('.menu-movil');
const fuera = $('.menu-fuera');

function construirFeed() {
  for (const o of OBRAS) {
    const e = el('section', { class: 'entrada', id: 'm-' + o.id });
    if (o.imagenes) {
      const alto = Math.max(...o.imagenes.map(([, w, h]) => h / w));
      const caja = el('div', { class: 'caja', style: `aspect-ratio:1/${alto}` });
      o.imagenes.forEach(([src], i) => caja.append(el('img', { src: 'img/' + src, alt: o.titulo, loading: 'lazy', class: i ? '' : 'activa' })));
      e.append(caja);
      if (o.imagenes.length > 1) {
        let i = 0;
        const mover = d => { const imgs = caja.querySelectorAll('img'); imgs[i].classList.remove('activa'); i = (i + d + imgs.length) % imgs.length; imgs[i].classList.add('activa'); };
        const f = el('div', { class: 'flechas' },
          el('button', { type: 'button', 'aria-label': 'Imagen anterior', text: '←' }),
          el('button', { type: 'button', 'aria-label': 'Imagen siguiente', text: '→' }));
        f.firstChild.onclick = () => mover(-1); f.lastChild.onclick = () => mover(1);
        e.append(f);
      }
    } else {
      e.append(el('div', { class: 'caja' }, el('div', { class: 'hueco', style: `aspect-ratio:${o.hueco[0]}/${o.hueco[1]}` })));
    }
    e.append(el('p', { text: fichaDe(o) }));
    feed.append(e);
  }
  feed.append(el('section', { class: 'entrada', id: 'm-acerca' },
    el('img', { class: 'foto', src: 'img/' + ACERCA.foto, alt: 'Estefanía Viyella', loading: 'lazy' }),
    el('p', { text: ACERCA.texto })));
  const cv = el('section', { class: 'entrada', id: 'm-cv' });
  Object.entries(CV).forEach(([t, items], i) => {
    if (i) cv.append(el('div', { class: 'espacio' }));
    cv.append(el('h3', { text: t }), ...items.map(entradaCV));
  });
  feed.append(cv);
  const pie = el('nav', { class: 'pie' });
  for (const [t, u] of REDES) pie.append(el('a', { href: u, target: u.startsWith('http') ? '_blank' : '', rel: 'noopener', text: t }));
  pie.append(el('a', { href: '#cv', 'data-id': 'cv', text: 'CV' }));
  feed.append(pie);
}

function abrirMenu(si) {
  menuMovil.classList.toggle('abierto', si);
  fuera.hidden = !si;
  $('.menu-flecha').textContent = si ? '↓' : '↑';
}
const irA = id => document.getElementById('m-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

$('.menu-cabecera').addEventListener('click', () => abrirMenu(!menuMovil.classList.contains('abierto')));
fuera.addEventListener('click', () => abrirMenu(false));
document.querySelector('.movil').addEventListener('click', e => {
  const a = e.target.closest('[data-id], .filas li');
  if (!a) return;
  const id = a.dataset.id || a.closest('li').dataset.id;
  e.preventDefault(); abrirMenu(false); irA(id);
});

// Nombre → inicio
$('[data-home]').addEventListener('click', e => {
  e.preventDefault();
  if (matchMedia('(max-width: 899px)').matches) { abrirMenu(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  else seleccionar(OBRAS[0].id);
});

// ───────── Arranque ─────────
llenarFilas(indice);
llenarFilas(menuMovil);
construirCVEscritorio();
construirFeed();
const inicial = location.hash.slice(1);
seleccionar(obra(inicial) || ['acerca', 'cv'].includes(inicial) ? inicial : OBRAS[0].id, true);
