# Scent Stories

A responsive, multi-page fragrance discovery website built with semantic HTML5, CSS, and vanilla JavaScript. The project keeps the home, about, contact, and server-time pages together so it can serve as the HTML5 version of the Scent Stories project alongside a React version.

## Project structure

```text
webtech_html/
├── index.html
├── about.html
├── contact.html
├── server-time.php
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Pages

- **index.html** — Scent Stories introduction, fragrance collection, and links to discover more
- **about.html** — Brand story and values
- **contact.html** — Contact details and an accessible, client-side validated message form
- **server-time.php** — Current server date and time in the `Africa/Kigali` timezone

## Run locally

The HTML pages can be opened directly in a browser. To run the PHP server-time page, place this folder in an Apache document root (such as XAMPP `htdocs`), start Apache, and visit:

- `http://localhost/webtech_html/index.html`
- `http://localhost/webtech_html/about.html`
- `http://localhost/webtech_html/contact.html`
- `http://localhost/webtech_html/server-time.php`

The contact form currently demonstrates accessible front-end validation; it does not send or store messages. Google Fonts are used when an internet connection is available, with local system font fallbacks.
