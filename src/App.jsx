import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import ItemDetailContainer from './components/ItemDetailContainer'
import home from './components/HomeContainer'


const App = () => {
  
  return (
    <>      
      <BrowserRouter>
        <NavBar />
          <Routes>
            
            <Route exact path='/productos' element={<ItemListContainer />}/>
            <Route exact path='/productos/:category' element={<ItemListContainer />}/>
            <Route exact path='/productos/:id' element={<ItemDetailContainer />}/>
          </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App

