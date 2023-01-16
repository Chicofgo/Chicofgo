import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
} from 'react-bootstrap';
import {
  BsPerson,
  BsPencil,
  BsCreditCard2Back,
  BsGeoAlt,
  BsFillPencilFill,
} from 'react-icons/bs';
import { IconContext } from 'react-icons';
import MemberBar from '../components/MemberBar';
import './Address.scss';

function address() {
  return (
    <div className="custom-container addressWidth">
      <Row className="border border-5 rounded-5 border-radious">
        <MemberBar />
        <div className="d-flex justify-content-center ">
          <Col sm={7} className="border m-5 p-5 rounded-5">
            <h2 className="">我的地址</h2>
            <p>桃園市中壢區新生路二段421號</p>
            <Link to="/addressDatail" className="btn border">
              編輯
            </Link>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default address;
