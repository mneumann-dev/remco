const tagName = 'ui-button'
const template = document.createElement('template')
template.innerHTML = `
<style>
button {
  border: 1px solid transparent;
  border-radius: .3rem;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1.5;
  margin: 0.5rem;
  padding: 0.5rem;
  outline: none;
  transition: all 0.5s ease-in-out;
}
</style>
<button></button>
`

export default class UiButton extends HTMLElement {
  constructor (props) {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.button = this.shadowRoot.querySelector('button')
    this.props = props
  }

  connectedCallback () {
    this._set()
  }

  _set () {
    this.button.innerHTML = this.props.text
    if (this.props.styles) {
      Object.keys(this.props.styles).forEach(s => {
        this.button.style[s] = this.props.styles[s]
      })
    }
    this._onHover()
    if (this.props.func) this.button.addEventListener('click', this.props.func.bind(this))
  }

  _onHover () {
    if (this.props.onHover) {
      for (let i = 0; i < this.props.onHover.length; i++) {
        this.props.onHover[i] += ' !important;'
      }
      const template = `button:hover { ${this.props.onHover.join(' ')} }`
      this.shadowRoot.querySelector('style').append(template)
    }
  }
}

customElements.define(tagName, UiButton)
