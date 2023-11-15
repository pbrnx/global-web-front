import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




import Cadastro from './routes/Cadastro.jsx';
import Login from './routes/Login';
const router = createBrowserRouter([
      {path:"/cadastro" , element:<Cadastro/>},
      {path:"/login" , element:<Login/>}  
    ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
