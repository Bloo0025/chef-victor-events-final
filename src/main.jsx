// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'

import App from './App'
import Home from './pages/Home'
import Catering from './pages/Catering'
import Venues from './pages/Venues'
import Gallery from './pages/Gallery'
import GalleryAlbum from './pages/GalleryAlbum'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,               // App renders <Outlet/>
    children: [
      { index: true, element: <Home /> },
      { path: 'catering', element: <Catering /> },
      { path: 'venues', element: <Venues /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'gallery/:album', element: <GalleryAlbum /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)