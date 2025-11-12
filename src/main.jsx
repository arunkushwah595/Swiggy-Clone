import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Offer from './components/Offer.jsx'
import Help from './components/Help.jsx'
import Signin from './components/Signin.jsx'
import Cart from './components/Cart.jsx'
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'
import RestaurantDetails from './components/RestaurantDetails.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/offer',
        element: <Offer />
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurant/:id',
        element: < RestaurantDetails />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  }

])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>

)
