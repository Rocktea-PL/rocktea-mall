import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './routes/Layout';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import About from '../pages/About';
import Services from '../pages/Services';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/services',
          element:<Services/>
        },
        {
          path:'/login',
          element:<SignIn/>
        },
        {
          path:'/register',
          element:<SignUp/>
        },
        
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
     
    </>
  )
}

export default App
