
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Shop  from './Pages/Shop';
import  ShopCategory  from './Pages/ShopCategory';
import  Cart  from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import unisex_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
   <Navbar/>
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/mens' element={<ShopCategory banner={men_banner}  category="men"/>}/>
  <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
  <Route path='/unisex' element={<ShopCategory banner={unisex_banner} category="unisex"/>}/>
  <Route path="/product" element={<Product/>}>
 <Route path=':productId' element={<Product/>}/>
  </Route>
  <Route path='/Cart' element={<Cart/>}/>
  <Route path='/LoginSignup' element={<LoginSignup/>}/>
</Routes>
<Footer/>
   </BrowserRouter>
   
    </div>
  );
}

export default App;
