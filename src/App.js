import './App.css';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom'
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Product from './Pages/Product';
import Navbar from './Components/Navbar';
import Category from './Pages/Category';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route excat path='/' element={<Home/>} />
    <Route excat path='/signup' element={<SignUp/>} />
    <Route excat path='/dashboard' element={<Dashboard/>} />
    <Route  path='/products' element={<Product/>} />
    <Route  path='/category' element={<Category/>} />

    

    

  
    </Routes>
    
    </>
  );
}

export default App;
