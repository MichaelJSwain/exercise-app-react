import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider, { AuthContext } from './components/Context/AuthContext';
import AuthDrawerContextProvider from './components/Context/AuthDrawerContext';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <AuthDrawerContextProvider>
      <App />
    </AuthDrawerContextProvider>
  </AuthContextProvider>,
)
