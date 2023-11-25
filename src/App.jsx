import React from 'react'
import {router} from './layouts/routes.jsx'
import {RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
