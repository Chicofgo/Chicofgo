import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {
  BsPerson,
  BsPencil,
  BsCreditCard2Back,
  BsGeoAlt,
  BsFillPencilFill,
} from 'react-icons/bs';
import { IconContext } from 'react-icons';
import '../../../Global-styles/global.scss';

function MemberBar() {
  return (
    <Col sm={12} className="chicofgo_gray my-3">
      <div className="d-flex justify-content-center ">
        <IconContext.Provider value={{ className: 'icon chicofgo_brown_font' }}>
          <Link
            to="/account"
            className="px-2 mx-2 my-2 text-decoration-none border chicofgo_brown_font"
          >
            <BsPerson />
            我的帳號
          </Link>

          <Link
            to="/password"
            className="px-2 mx-2 my-2  text-decoration-none border chicofgo_brown_font"
          >
            <BsPencil />
            修改密碼
          </Link>
          <Link
            to="/creditcard"
            className="px-2 mx-2 my-2 
            text-decoration-none border chicofgo_brown_font"
          >
            <BsCreditCard2Back />
            信用卡
          </Link>
          <Link
            to="/address"
            className="px-2 mx-2 my-2  text-decoration-none border chicofgo_brown_font"
          >
            <BsGeoAlt />
            地址
          </Link>
        </IconContext.Provider>
      </div>
    </Col>
  );
}

export default MemberBar;
