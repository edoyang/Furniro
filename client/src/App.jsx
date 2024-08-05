import { Routes, Route, Link } from 'react-router-dom'
import Cart from './components/Cart'
import Login from './components/Login'
import Products from './components/Products'
import Register from './components/Register'
import User from './components/User'
import Checkout from './pages/Checkout'

function App() {

  return (
    <>
    <Cart />
    <Routes>
      <Route path="/" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/user" element={<User />} />
    </Routes>
    <Link to="/">Checkout</Link>
    <Products />
    </>
  )
}

export default App
