import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { ProSidebarProvider } from 'react-pro-sidebar';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<ProSidebarProvider>
  <App />
  </ProSidebarProvider>
    </BrowserRouter>
  </StrictMode>,
)



