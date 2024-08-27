import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'react-bootstrap'

import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider dir='rtl'>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
