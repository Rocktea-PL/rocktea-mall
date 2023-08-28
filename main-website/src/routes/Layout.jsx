import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Features/Navbar'
import Footer from '../Features/Footer'

function Layout() {
  const location = useLocation();

  // Check if the current location is the registration route
  const hideNavbar = location.pathname === '/register' || location.pathname === '/login';

  return (
    <main className='relative'>
      
      {!hideNavbar && <Navbar />} 
        <Outlet/>
        {!hideNavbar && <Footer />}
    </main>
  )
}

export default Layout