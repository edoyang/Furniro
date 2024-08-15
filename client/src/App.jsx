import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import User from './components/User'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.scss'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/user" element={<User />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
