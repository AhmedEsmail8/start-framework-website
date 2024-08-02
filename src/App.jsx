import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bootstrapnavbar from './components/Bootstrapnavbar'
import Details from './components/Details'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Tmp from './components/Tmp'
import Start from './components/Start'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {
  let routes = createBrowserRouter([
    {path:'/', element: <Layout></Layout>, children:[
      {path: '/home', element: <Start></Start>},
      {index: true, element: <Start></Start>},
      {path: '/about', element: <About></About>},
      {path: '/portfolio', element: <Portfolio></Portfolio>},
      {path: '/contact', element: <Start></Start>},
    ]},
    {path: '*', element: <Tmp></Tmp>}
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
