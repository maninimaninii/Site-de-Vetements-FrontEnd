import './App.css';
import { Navbar } from './Components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AcceuilCat } from './Pages/AcceuilCat';
import { Acceuil } from './Pages/Acceuil';
import { Produits } from './Pages/Produits';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import hommesban from './Components/Assets/banner_mens.png';
import femmesban from './Components/Assets/banner_women.png';
import enfantssban from './Components/Assets/banner_kids.png';
import { Footer } from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Acceuil/>}/>
      <Route path='/Hommes' element={<AcceuilCat banner={hommesban} category = 'men' />}/>
      <Route path='/Femmes' element={<AcceuilCat  banner={femmesban} category = 'women'/>}/>
      <Route path='/Enfants' element={<AcceuilCat  banner={enfantssban} category = 'kid'/>}/>
      <Route path='product/:productId' element={<Produits/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
