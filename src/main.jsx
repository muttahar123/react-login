import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import AuthContextProvider from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </NextUIProvider>
  </StrictMode>,
)
