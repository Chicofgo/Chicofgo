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
import MemberBar from '../../Components/memberBar';
import './address.scss';

function addressDetail() {
  return (
    <div className="custom-container addressWidth">
      <Row className="border border-5 rounded-5 border-radious">
        <MemberBar />
        <div className="d-flex justify-content-center ">
          <Col sm={7} className="border m-5 p-5 rounded-5">
            <h2 className="">編輯地址</h2>
            <InputGroup className="py-3">
              <InputGroup.Text>新地址</InputGroup.Text>
              <Form.Control
                placeholder="輸入新地址"
                aria-label="address"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Link to="" className="btn border">
              編輯
            </Link>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default addressDetail;
