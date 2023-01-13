import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  Link,
} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BsSearch,
  BsFillBellFill,
  BsSuitHeartFill,
  BsFillPersonFill,
  BsFillCartFill,
} from 'react-icons/bs';
import './navbar.scss';

function NavScrollExample() {
  return (
    <header bg="light" className="navbar-w fixed-top">
      <div className="custom-container ">
        <Navbar expand="lg" className="">
          <Container fluid>
            <Navbar.Brand href="#">
              <Image
                src={require('./logo.png')}
                className="img-fluid w-50"
                alt="Responsive image"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
                className="my-2 my-lg-0 "
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/home" className="mx-2">
                  首頁
                </Nav.Link>
                <Nav.Link as={Link} to="/products" className="mx-2">
                  商品
                </Nav.Link>
                <Nav.Link as={Link} to="/event" className="mx-2">
                  活動專區
                </Nav.Link>
                <Nav.Link as={Link} to="/coupon" className="mx-2">
                  折價券
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder=""
                  className="me-2"
                  aria-label="Search"
                />
                <Button as={Link} to="/" variant="outline-success">
                  <BsSearch />
                </Button>
                <Button as={Link} to="/" variant="" className="mx-1">
                  <BsFillBellFill />
                </Button>
                <Button as={Link} to="/" variant="" className="mx-1">
                  <BsSuitHeartFill />
                </Button>
                <Button as={Link} to="/account" variant="" className="mx-1">
                  <BsFillPersonFill />
                </Button>
                <Button as={Link} to="/" variant="" className="mx-1">
                  <BsFillCartFill />
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default NavScrollExample;

// import { Link, NavLink } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import {
//   BsSearch,
//   BsFillBellFill,
//   BsSuitHeartFill,
//   BsFillPersonFill,
//   BsFillCartFill,
// } from 'react-icons/bs';
// import './navbar.scss';

// function NavScrollExample() {
//   return (
//     <header bg="light" className="navbar-w fixed-top">
//       <div className="custom-container ">
//         <Navbar expand="lg" className="">
//           <Container fluid>
//             <Navbar.Brand href="#">
//               <Image
//                 src={require('./logo.png')}
//                 className="img-fluid w-50"
//                 alt="Responsive image"
//               />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll" className="justify-content-end">
//               <Nav
//                 className="my-2 my-lg-0 "
//                 style={{ maxHeight: '100px' }}
//                 navbarScroll
//               >
//                 <NavLink>
//                   <Nav.Link to="/" className="mx-2">
//                     首頁
//                   </Nav.Link>
//                 </NavLink>
//                 <NavLink>
//                   <Nav.Link to="/products" className="mx-2">商品</Nav.Link>
//                 </NavLink>
//                 <NavLink>
//                   <Nav.Link to="/event" className="mx-2">活動專區</Nav.Link>
//                 </NavLink>
//                 <NavLink>
//                   <Nav.Link to="/coupon" className="mx-2">折價券</Nav.Link>
//                 </NavLink>
//               </Nav>
//               <Form className="d-flex">
//                 <Form.Control
//                   type="search"
//                   placeholder=""
//                   className="me-2"
//                   aria-label="Search"
//                 />
//                 <NavLink to="/search">
//                   <Button variant="outline-success">
//                     <BsSearch />
//                   </Button>
//                 </NavLink>
//                 <NavLink to="">
//                   <Button variant="" className="mx-1">
//                     <BsFillBellFill />
//                   </Button>
//                 </NavLink>
//                 <NavLink to="/heart">
//                   <Button variant="" className="mx-1">
//                     <BsSuitHeartFill />
//                   </Button>
//                 </NavLink>
//                 <NavLink to="/member">
//                   <Button variant="" className="mx-1">
//                     <BsFillPersonFill />
//                   </Button>
//                 </NavLink>
//                 <NavLink to="/cart">
//                   <Button variant="" className="mx-1">
//                     <BsFillCartFill />
//                   </Button>
//                 </NavLink>
//               </Form>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default NavScrollExample;
