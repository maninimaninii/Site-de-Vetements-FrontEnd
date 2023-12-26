import './App.css';
import { Navbar } from './Components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AcceuilCat } from './Pages/AcceuilCat';
import { Acceuil } from './Pages/Acceuil';
import { Produits } from './Pages/Produits';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Acceuil/>}/>
      <Route path='/Hommes' element={<AcceuilCat category = 'Hommes'/>}/>
      <Route path='/Femmes' element={<AcceuilCat  category = 'Femmes'/>}/>
      <Route path='/Enfants' element={<AcceuilCat  category = 'Enfants'/>}/>
      <Route path='product' element={<Produits/>}/>
      <Route path=':productId' element={<Produits/>}/>
      <Route path='/' element={<Cart/>}/>
      <Route path='/' element={<Login/>}/>
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
