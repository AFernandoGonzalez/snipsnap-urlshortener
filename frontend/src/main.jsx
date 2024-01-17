import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { UrlProvider } from './context/UrlContext.jsx'
import { Theme } from './context/Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Theme>
    <AuthProvider>
      <UrlProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </UrlProvider>
    </AuthProvider>
  </Theme>
)
