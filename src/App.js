import './App.css';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom'
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
    <Navbar />

    <Routes>
    <Route excat path='/' element={<Home/>} />
    <Route excat path='/signup' element={<SignUp/>} />
    <Route excat path='/signin' element={<SignIn/>} />
    <Route excat path='/dashboard' element={<Dashboard/>} />


    
    </Routes>
    
    </>
  );
}

export default App;
