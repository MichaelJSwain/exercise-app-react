import './App.css'
import WorkoutListView from './pages/WorkoutListView'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutDetailView from './pages/WorkDetailView'
import Header from './components/Header/Header';
import WorkoutActiveView from './pages/WorkoutActiveView';
import LoginView from './pages/LoginView';
import RegisterView from './pages/RegisterView';
import AuthContextProvider from './components/Context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header>
        <Routes>
          <Route path="/workouts" element={<WorkoutListView />}></Route>
          <Route path="/workouts/:id" element={<WorkoutDetailView />}></Route>
          <Route path="/workouts/:id/active" element={<WorkoutActiveView />}></Route>
          <Route path="/account/login" element={<LoginView />}></Route>
          <Route path="/account/register" element={<RegisterView />}></Route>
        </Routes>
        </Header>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
