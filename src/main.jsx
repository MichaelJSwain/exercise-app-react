import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider, { AuthContext } from './components/Context/AuthContext';


createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
    </AuthContextProvider>,
)
