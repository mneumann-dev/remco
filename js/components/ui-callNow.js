const tagName = 'ui-callnow'
const template = document.createElement('template')
template.innerHTML = `
<style>
a {
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 50%;
  bottom: 1rem;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  position: fixed;
  transition: transform 0.5s ease-in-out;
  transform: translateX(100px);
  right: 0.5rem;
}
svg { height: auto; padding-top: 0.2rem; padding-right: 0.2rem; transition: all 0.5s ease-in-out; width: 20pt; }
a:hover svg { width: 29pt; }
@media only screen and (min-width: 48rem) {
  a { right: 1rem; }
}
</style>
<a href="">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</a>
`

class UiCallNow extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' } )
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {
    setTimeout(() => {
      this.shadowRoot.querySelector('a').style.transform = 'translateX(0)'
    }, 1000)
  }
}

customElements.define(tagName, UiCallNow)
