import './components/ui-navbar'
import UiButton from './components/ui-button'
import './components/ui-testimonials'

const heroNavBtn1 = new UiButton({
  text: 'Learn more',
  styles: { backgroundColor: '#FFFFFF', width: '200px' },
  func: () => {
    const pos = document.querySelector('.learn-more').getBoundingClientRect().top
    window.scrollTo( { top: pos, behavior: 'smooth' })
  }
})

const heroNavBtn2 = new UiButton({
  text: 'Contact Us',
  styles: { backgroundColor: 'transparent', borderColor: '#FFFFFF', color: '#FFFFFF', width: '200px' },
  onHover: ['background-color: #FFFFFF', 'color: #000000'],
  func: () => {
    const pos = document.querySelector('footer').getBoundingClientRect().top
    window.scrollTo( { top: pos, behavior: 'smooth' })
  }
})

document.querySelector('.hero nav').appendChild(heroNavBtn1)
document.querySelector('.hero nav').appendChild(heroNavBtn2)

const items = document.querySelectorAll('.features ul li')
let index = 0
let paused = false
function pause () {
  paused = !paused
  items.forEach(item => {
    item.classList.remove('active-list-item')
  })
}
function focusItem () {
  if (!paused) {
    setTimeout(() => {
      if (index >= items.length) index = 0
      items.forEach(item => {
        item.classList.remove('active-list-item')
      })
      items[index].classList.add('active-list-item')
      index++
    }, 1000)
  }
  setTimeout(focusItem, 3000)
}
focusItem()

document.querySelector('.features-list').addEventListener('mouseenter', pause)
document.querySelector('.features-list').addEventListener('mouseleave', pause)
