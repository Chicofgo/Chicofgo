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
import './changePassword.scss';

function ChangePassword() {
  return (
    <div className="custom-container passwordWidth">
      <Row className="border border-5 rounded-5">
        <MemberBar />
        <div className="d-flex justify-content-center">
          <Col sm={8} className="border rounded-5 m-5 p-5 ">
            <h2 className="text-center">我的密碼</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>舊密碼</InputGroup.Text>
              <Form.Control
                placeholder="請輸入舊密碼"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                size="lg"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>新密碼</InputGroup.Text>
              <Form.Control
                placeholder="請輸入新密碼"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                size="lg"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>確認新密碼</InputGroup.Text>
              <Form.Control
                placeholder="請再次輸入新密碼"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                size="lg"
              />
            </InputGroup>
            {['Checkbox'].map((type) => (
              <div key={`inline-${type}`} className="">
                <Form.Check
                  inline
                  label="顯示密碼"
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
            <div className="text-center">
              <Button variant="success" size="lg">
                確定修改
              </Button>
              {''}
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default ChangePassword;
