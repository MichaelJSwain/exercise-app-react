import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkoutListView from './pages/WorkoutListView'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutDetailView from './pages/WorkDetailView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorkoutListView />}></Route>
        <Route path="/workout/:id" element={<WorkoutDetailView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
