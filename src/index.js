import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

/*ReactDom.render(
<React.StrictMode> <App /></React.StrictMode>,
 document.getElementById('root')
 )*/

 const root = ReactDom.createRoot(document.getElementById("root"))
 root.render(
     <React.StrictMode>
         <BrowserRouter><App /></BrowserRouter>
         
     </React.StrictMode>
 )