import './App.css'
import WorkoutListView from './pages/WorkoutListView'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutDetailView from './pages/WorkDetailView'
import Header from './components/Header/Header';
import WorkoutActiveView from './pages/WorkoutActiveView';
import LoginView from './pages/LoginView';
import RegisterView from './pages/RegisterView';
import AuthContextProvider, { AuthContext } from './components/Context/AuthContext';
import { useContext } from 'react';
import AccountView from './pages/AccountView';

function App() {
  const {user} = useContext(AuthContext);

  return (
      <BrowserRouter>
        <Header>
        <Routes>
          <Route path="/workouts" element={<WorkoutListView />}></Route>
          <Route path="/workouts/:id" element={<WorkoutDetailView />}></Route>
          <Route path="/workouts/:id/active" element={<WorkoutActiveView />}></Route>
          <Route path="/account" element={<AccountView />}></Route>
        </Routes>
        </Header>
      </BrowserRouter>
  )
}

export default App
