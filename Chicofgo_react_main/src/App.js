import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/navbar/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Event from './Pages/Event';
import Coupon from './Pages/Coupon';
import Account from './Pages/account/account';
import Password from './Pages/account/password/changePassword';
// import ChangePassword from './Pages/account/password/changePassword';
// import Sidebar from './Layout/sidebar/sidebar'
// import Navbaro from './component/navbar-or'
// import Carousel from './component/carousel'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="event" element={<Event />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="account" element={<Account />} />
          <Route path="password" element={<Password />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
