import { setLogin } from "../../redux/cartSlice"; 

const Home = () => {
    const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);

  return (
    <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Welcome!</h1>}
    </div>
  )
}

export default Home