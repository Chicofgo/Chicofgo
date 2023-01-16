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
import './Creditcard.scss';

function Creditcard() {
  return (
    <div className="custom-container cardicardWidth">
      <Row className="border border-5 rounded-5 border-radious">
        <MemberBar />
        <div className="d-flex justify-content-center ">
          <Col sm={7} className="border m-5 p-5 rounded-5">
            <h2 className="">VISA</h2>
            <p>尾碼為8802的信用卡</p>
            <Link to="/cardDetail" className="btn border">
              編輯
            </Link>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default Creditcard;
