import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import ItemDetail from './components/ItemDetailContainer'
import HomePage from './components/HomePage'
import CartContext  from './context/CartContext'
import Cart from './components/Cart'


const App = () => {
  
  return (
    <>
      <CartContext>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<HomePage />}/>            
            <Route exact path='/productos' element={<ItemListContainer />}/>
            <Route exact path='/productos/:categoria' element={<ItemListContainer />}/>
            <Route exact path='/item/:id' element={<ItemDetail />}/>
            <Route exact path='/cart' element={<Cart/>}/>
          </Routes> 
      </BrowserRouter>
      </CartContext>      
    </>
  )
}

export default App

