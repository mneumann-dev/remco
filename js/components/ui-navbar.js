const tagName = 'ui-navbar'
const template = document.createElement('template')
template.innerHTML = `
<style>
nav {
  align-items: center;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  transition: box-shadow 0.25s ease-in-out;
  width: 100%;
  z-index: 99;
}
.brand { height: 56px; text-decoration: none; }
.brand, button svg, div { padding: 0 0.5rem; }
button { background-color: transparent; border: none; cursor: pointer; margin: 0; padding: 0; outline: none; }
button svg { fill: #FFFFFF; }
div {
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  position: absolute;
  top: 56px;
  transition: transform 0.5s ease-in-out;
  transform: translateY(-100%);
  width: 100%;
  z-index: -1;
}
div a { color: #FFFFFF; padding: 0.5rem 0; text-decoration: none; }
div a:hover, .active { text-decoration: underline; text-underline-position: under; }
.show-menu { transform: translateY(0); }
.is-scrolling { box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.5); }
@media only screen and (min-width: 36rem) {
  .brand, button svg, div { padding: 0 1rem; }
  button { display: none; }
  div {
    flex-direction: row;
    position: relative;
    transition: none;
    transform: none;
    top: 0;
    width: auto;
  }
  div a { padding: 0 1rem; }
  div a:last-child { padding-right: 0; }
}
</style>
<nav>
  <a class="brand" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="56" viewBox="0 0 250 100" style="background:#000000"><defs><path id="fNuwvJa" d="M154 0H250V100H154z"/><path id="fNuwvJd" d="M196,0 L196.000939,24.9547204 C193.776483,24.3329081 191.427881,24 189,24 C174.922153,24 163.509804,35.1928813 163.509804,49 C163.509804,62.8071187 174.922153,74 189,74 C191.427881,74 193.776483,73.6670919 196.000939,73.0452796 L196,100 L154,100 L154,0 L196,0 Z"/><filter id="fNuwvJc" width="133.3%" height="114%" x="-16.7%" y="-5%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/></filter><circle id="fNuwvJf" cx="222" cy="49" r="25"/><filter id="fNuwvJe" width="128%" height="128%" x="-14%" y="-10%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/></filter></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><path fill="#000" d="M0 0H250V100H0z"/><mask id="fNuwvJb" fill="#fff"><use xlink:href="#fNuwvJa"/></mask><use fill="#6D7278" xlink:href="#fNuwvJa"/><g mask="url(#fNuwvJb)"><use fill="#000" filter="url(#fNuwvJc)" xlink:href="#fNuwvJd"/><use fill="#FFF" xlink:href="#fNuwvJd"/></g><g mask="url(#fNuwvJb)"><use fill="#000" filter="url(#fNuwvJe)" xlink:href="#fNuwvJf"/><use fill="#FFF" xlink:href="#fNuwvJf"/></g><text fill="#FFF" font-family="Roboto-Bold, Roboto" font-size="70.383" font-weight="bold" letter-spacing="1.76"><tspan x="0" y="74">REM</tspan></text></g></svg>
  </a>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M4 27h28v-3H4v3zm0-8h28v-3H4v3zM4 8v3h28V8H4z"/></svg>
  </button>
  <div>
    <a href="#">Home</a>
    <a href="#">Features</a>
    <!-- TODO: Demonstration purposes -->
    <a href="#" style="color: rgba(255, 255, 255, 0.5); pointer-events: none">Pricing</a>
  </div>
</nav>
`

class UiNavbar extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.navbar = this.shadowRoot.querySelector('nav')
    this.button = this.shadowRoot.querySelector('button')
    this.menu = this.shadowRoot.querySelector('div')
    this.links = this.shadowRoot.querySelectorAll('div a')
  }

  connectedCallback () {
    window.addEventListener('scroll', this._isScrolling.bind(this))
    this.button.addEventListener('click', this._showMenu.bind(this))
    this._set()

    /* TODO: Demonstration purposes */
    this.links[0].addEventListener('click', () => { this._scrollTo('.hero') })
    this.links[1].addEventListener('click', () => { this._scrollTo('.features') })
  }

  _set () {
    return this.links.forEach(link => {
      link.innerHTML.toLowerCase() === this.getAttribute('active').toLowerCase()
        ? link.classList.add('active')
        : 0
    })
  }

  _showMenu () {
    this.menu.classList.toggle('show-menu')
  }

  _isScrolling () {
    window.scrollY > 0 ? this.navbar.classList.add('is-scrolling') : this.navbar.classList.remove('is-scrolling')
  }

  /* TODO: Demonstration purposes */
  _scrollTo (s) {
    const pos = document.querySelector(s).getBoundingClientRect().top
    window.scrollTo({ top: pos, behavior: 'smooth' })
  }
}

customElements.define(tagName, UiNavbar)
