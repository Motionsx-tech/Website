import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AnimatePresence mode='wait'>
        <App />  {/* No BrowserRouter here */}
      </AnimatePresence>
    </HelmetProvider>
  </React.StrictMode>
)
