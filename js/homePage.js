import UiButton from './components/ui-button'
import './components/ui-testimonials'

const heroNavBtn1 = new UiButton({
  text: 'Learn more',
  styles: { backgroundColor: '#FFFFFF', width: '200px' },
  func: () => { console.log('click') }
})

const heroNavBtn2 = new UiButton({
  text: 'Contact Us',
  styles: { backgroundColor: 'transparent', borderColor: '#FFFFFF', color: '#FFFFFF', width: '200px' },
  onHover: ['background-color: #FFFFFF', 'color: #000000'],
})

document.querySelector('.hero nav').appendChild(heroNavBtn1)
document.querySelector('.hero nav').appendChild(heroNavBtn2)
