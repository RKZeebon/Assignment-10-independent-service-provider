import './App.css';
import Navbar from '../src/Components/CommonPages/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/CommonPages/Footer/Footer';
import NothingFound from './Components/NothingFound/NothingFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='*' element={<NothingFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
