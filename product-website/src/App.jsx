import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './routes/Layout';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Products from '../pages/Products';



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
          path:'/product',
          element:< Products/>
        },
        {
          path:'/search:query',
          element:<Search/>
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
