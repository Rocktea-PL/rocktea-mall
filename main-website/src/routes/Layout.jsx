import { Outlet } from 'react-router-dom'
import Navbar from '../Features/Navbar'
import Footer from '../Features/Footer'

function Layout() {
  return (
    <main className='relative'>
      
      <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default Layout