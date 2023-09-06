import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './routes/Layout';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Products from '../pages/Products';
import ProductDetails from './components/Products/ProductDetails';



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
          path:'/products',
          element:< Products/>
        },
        {
          path:'/products/details',
          element:< ProductDetails/>
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
