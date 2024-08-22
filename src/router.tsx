import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from './components/layout/HomeLayout'
import Home from './pages/general/Home'
import PageNotFound from './pages/general/PageNotFound'
import About from './pages/general/About'

// pages

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default routes