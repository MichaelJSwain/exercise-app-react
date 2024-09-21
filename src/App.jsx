import './App.css'
import WorkoutListView from './pages/WorkoutListView'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutDetailView from './pages/WorkDetailView'
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header>
      <Routes>
        <Route path="/workouts" element={<WorkoutListView />}></Route>
        <Route path="/workouts/:id" element={<WorkoutDetailView />}></Route>
      </Routes>
      </Header>
    </BrowserRouter>
  )
}

export default App
