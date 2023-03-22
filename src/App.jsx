import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import ItemDetail from './components/ItemDetailContainer'
import home from './components/HomeContainer'


const App = () => {
  
  return (
    <>      
      <BrowserRouter>
        <NavBar />
          <Routes>            
            <Route exact path='/productos' element={<ItemListContainer />}/>
            <Route exact path='/productos/:category' element={<ItemListContainer />}/>
            <Route exact path='/item/:id' element={<ItemDetail />}/>
          </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App

