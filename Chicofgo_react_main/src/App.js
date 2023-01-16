
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/Navbar/Navbar';
import Path from './Layout/Item/Path/Path';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Event from './Pages/Event';
import Coupon from './Pages/Coupon';
import Account from './Pages/Account/Account';
import Password from './Pages/Account/password/ChangePassword';
import Creditcard from './Pages/Account/creditcard/Creditcard';
import CardDetail from './Pages/Account/creditcard/CardDetail';
import Address from './Pages/Account/address/Address';
import MemberSideBar from './Pages/Account/components/MemberSideBar';
import AddressDetail from './Pages/Account/address/AddressDetail';
// import ChangePassword from './Pages/account/password/changePassword';
// import Sidebar from './Layout/sidebar/sidebar'
// import Navbaro from './component/navbar-or'
// import Carousel from './component/carousel'

import Footer from './Layout/Footer/Footer';
import Products from './Pages/Products/Products';
import ProductDetail from './Pages/Products/Product_detail/ProductDetail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        {/* <Path /> */}
        <MemberSideBar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="event" element={<Event />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="account" element={<Account />} />
          <Route path="password" element={<Password />} />
          <Route path="creditcard" element={<Creditcard />} />
          <Route path="cardDetail" element={<CardDetail />} />
          <Route path="address" element={<Address />} />
          <Route path="addressDatail" element={<AddressDetail />} />
          {/* <Route path="/">
            <Route index element={}
          </Route> */}
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
