import './App.css';
import Navbar from '../src/Components/CommonPages/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/CommonPages/Footer/Footer';
import NothingFound from './Components/NothingFound/NothingFound';
import Login from './Components/Login/Login';
import Register from './Components/Registration/Register';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NothingFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
