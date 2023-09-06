//import Kelloggs from '../assets/kelloggs.png'
//import Coke from '../assets/coke.png'
//import Nestle from '../assets/nestle.png'
//import PepsiLogo from '../assets/pepsi-logo.png'
//import Samsung from '../assets/samsung.png'
//import Dufil from '../assets/dufil.png'
//import Unilever from '../assets/unilever.png'
//import Hennessy from '../assets/hennessy.png'
import PartnersLogo from '../../assets/Partners.png'

export default function Partners() {
  return (
    <section className=' mx-5 md:mx-12 flex flex-col items-center justify-center'>
        
        <figure className='flex items justify-center gap-7 partner'>
            <img src={PartnersLogo} alt="" />
        </figure>
    </section>
  )
}
