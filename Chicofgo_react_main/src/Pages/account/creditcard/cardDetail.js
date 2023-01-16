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
import './creditcard.scss';

function cardDetail() {
  return (
    <div className="custom-container cardicardWidth">
      <Row className="border border-5 rounded-5 border-radious">
        <MemberBar />
        <div className="d-flex justify-content-center ">
          <Col sm={7} className="border m-5 p-5 rounded-5">
            <h2 className="">編輯信用卡</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text className="">信用卡號碼</InputGroup.Text>
              <Form.Control
                placeholder="**** **** **** ****"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text className="">到期日</InputGroup.Text>
              <Form.Control
                placeholder="MM"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Form.Control
                placeholder="YY"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text className="">安全驗證碼</InputGroup.Text>
              <Form.Control
                placeholder="123"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text className="">帳單地址</InputGroup.Text>
              <Form.Control
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default cardDetail;
