import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './scss/common.scss'
import { inject } from '@vercel/analytics';
 
inject();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
