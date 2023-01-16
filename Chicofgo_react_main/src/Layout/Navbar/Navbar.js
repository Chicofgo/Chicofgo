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
import './Navbar.scss';

function NavScrollExample() {
  return (
    <header bg="light" className="navbar-w navbar-h fixed-top">
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
                className="my-2 my-lg-0 text-nowrap"
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
