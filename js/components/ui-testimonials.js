import data from '../testimonials'

const testimonials = data.sort((a, b) => {
  const val1 = a.name.toLowerCase()
  const val2 = b.name.toLowerCase()
  if (val1 < val2) return -1
  if (val1 > val2) return 1
  return 0
})

const tagName = 'ui-testimonials'
const template = document.createElement('template')
template.innerHTML = `
<style>
.testimonials {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}
.card {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.3rem;
  height: auto;
  margin: 1rem;
  padding: 2rem;
  width: 320px;
}
.card header {
  align-items: center;
  display: flex;
  padding-bottom: 0.5rem;
}
.card header div { padding-left: 1rem; }
.card header img { border-radius: 50%; height: 60px; width: 60px; }
.card header div h3 { margin: 0; }
.card > div { align-items: center; display: flex; height: 75%; justify-content: center; }
.card p { font-style: italic }
@media only screen and (min-width: 36rem) {
  .testimonials { width: 75%; }
}
</style>
<div class="testimonials"></div>
`

class UiTestimonials extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('div')
  }

  connectedCallback () {
    this._create()
  }

  _create () {
    testimonials.forEach(testimonial => {
      this._card(testimonial)
    })
  }

  _card (testimonial) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <header>
      <img src="${testimonial.avatar}" alt="Avatar">
      <div>
        <h3>${testimonial.name}</h3>
        <span>${testimonial.title}</span>
      </div>
    </header>
    <div>
      <p>"${testimonial.quote}"</p>
    </div>`
    this.container.appendChild(card)
  }
}

customElements.define(tagName, UiTestimonials)
