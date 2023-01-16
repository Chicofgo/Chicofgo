import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/navbar/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Event from './Pages/Event';
import Coupon from './Pages/Coupon';
import Account from './Pages/account/Account';
import Password from './Pages/account/password/ChangePassword';
import Creditcard from './Pages/account/creditcard/Creditcard';
import CardDetail from './Pages/account/creditcard/CardDetail';
import Address from './Pages/account/address/Address';
import MemberSideBar from './Pages/components/MemberSideBar';
import AddressDetail from './Pages/account/address/AddressDetail';
// import ChangePassword from './Pages/account/password/changePassword';
// import Sidebar from './Layout/sidebar/sidebar'
// import Navbaro from './component/navbar-or'
// import Carousel from './component/carousel'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
