
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm.jsx'
import Home from './Home.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App