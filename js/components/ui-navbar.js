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
<!--  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="56" viewBox="0 0 250 100"><defs><path id="bsasXSb" d="M58.1430404,6 L100,25.636434 L86.396078,36.3951719 C85.3070381,35.6960539 83.7706262,35.2587172 82.0719165,35.2558955 C78.7952295,35.2504527 76.1511875,36.8577746 76.1662834,38.8459495 C76.1765041,40.1920471 77.4052202,41.3706454 79.2170846,41.9964933 L53.0309796,62 L11,42.1197754 L58.1430404,6 Z"/><filter id="bsasXSa" width="115.7%" height="125%" x="-7.9%" y="-8.9%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/></filter><path id="bsasXSc" d="M52.5041882,0 L99,21.6670605 L84.0191777,33.5019325 C82.6510085,32.7970078 80.8530329,32.3626045 79.0617346,32.3616327 C75.4178904,32.359656 72.4758363,34.1440898 72.4904729,36.3472773 C72.4995834,37.7186347 73.6564448,39.2415184 75.4100338,40.2000724 L46.7128503,62 L0,40.0303278 L52.5041882,0 Z"/><filter id="bsasXSd" width="114.1%" height="122.6%" x="-7.1%" y="-8.1%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/></filter><path id="bsasXSf" d="M81.5201072,40.9999364 C83.4545333,41.0096906 85.0125005,39.8963787 84.9999244,38.5132848 C84.9873483,37.1301908 83.4113625,36.0049623 81.4798617,36 C79.548361,35.9950706 77.9903938,37.1083824 78,38.486668 C78.0096954,39.8649536 79.5856812,40.9901822 81.5201072,40.9999364 Z"/><filter id="bsasXSe" width="214.3%" height="260%" x="-42.9%" y="-40%" filterUnits="objectBoundingBox"><feOffset dx="1" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/></filter></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g transform="translate(0.035655, 16.278315)"><g><use fill="#000" filter="url(#bsasXSa)" xlink:href="#bsasXSb"/><use fill="#FFF" xlink:href="#bsasXSb"/></g><mask fill="#fff"><use xlink:href="#bsasXSc"/></mask><g><use fill="#000" filter="url(#bsasXSd)" xlink:href="#bsasXSc"/><use fill="#FFF" xlink:href="#bsasXSc"/></g><g><use fill="#000" filter="url(#bsasXSe)" xlink:href="#bsasXSf"/><use fill="#FFF" xlink:href="#bsasXSf"/></g><g fill="#FFF" transform="translate(107.677209, 5.754789)"><text font-family="Blinker-Bold, Blinker" font-size="32" font-weight="bold" letter-spacing=".8"><tspan x=".287" y="31.694">Remco</tspan></text><text font-family="OpenSans-Light, Open Sans" font-size="12" font-weight="300" letter-spacing=".3"><tspan x="0" y="46.967">Machining &amp; Fabrication</tspan></text></g></g></g></svg>-->
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

  /* TODO: Demonstration purposes */
  _scrollTo (s) {
    const pos = document.querySelector(s).getBoundingClientRect().top
    window.scrollTo({ top: pos, behavior: 'smooth' })
  }
}

customElements.define(tagName, UiNavbar)
