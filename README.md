# Estefanía Viyella — web

Web de artista, hecha a partir del diseño V6 en Figma.
Se publica gratis con GitHub Pages.

## Archivos

- `index.html`: la página.
- `style.css`: colores, tipografías y maquetación (escritorio y móvil).
- `main.js`: el contenido (obras, Acerca, CV, redes) y el funcionamiento del menú.
- `img/`: las imágenes de las obras.

## Añadir o cambiar una obra

1. Pon la imagen en `img/` (JPG, unos 1800 px por el lado largo).
2. En `main.js`, dentro de `OBRAS`, copia un bloque y cambia título, año, ficha e imágenes.
   El orden de `OBRAS` es el orden del menú.
3. Una obra sin imagen usa `hueco: [ancho, alto]` y se ve como un recuadro gris.

## Publicar en GitHub Pages

1. En github.com, crea un repositorio nuevo (por ejemplo `estefaniaviyella`), público.
2. Pulsa **Add file → Upload files** y arrastra todo el contenido de esta carpeta.
3. En **Settings → Pages**, elige *Deploy from a branch*, rama `main`, carpeta `/ (root)`.
4. En un par de minutos la web estará en `https://TU-USUARIO.github.io/estefaniaviyella/`.
