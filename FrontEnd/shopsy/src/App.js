import './App.css';
import Navbar from './components/navbar/navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'; 
import Shopcategory from './pages/Shopcategory'; 
import Product from './pages/Product'; 
import Login from './pages/Login';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<Shopcategory category="men"/>} />
        <Route path="/women" element={<Shopcategory category="women"/>} />
        <Route path="/kids" element={<Shopcategory category="kid"/>} />
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='login' element={<Login/>} />
         
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
