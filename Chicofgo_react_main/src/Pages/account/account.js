import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import {
  BsPerson,
  BsPencil,
  BsCreditCard2Back,
  BsGeoAlt,
  BsFillPencilFill,
} from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './Account.scss';
import '../../Global-styles/global.scss';
import MemberBar from './components/MemberBar';
import Path from '../../Layout/Item/Path/Path';

function Account() {
  return (
    <div className="custom-container accountWidth mt-5 ">
    <Path pathObj={{ path: ['．會員'] }} />
      <Row className="border border-5 rounded-5 justify-content-md-center">
        <MemberBar />

        <Col
          sm={3}
          className="d-flex text-center align-items-center justify-content-center"
        >
          <Image
            alt=""
            width={150}
            height={150}
            src={require('../../Layout/Navbar/logo.png')}
            className="border border-3 rounded-circle  test"
          />
        </Col>
        <Col sm={6} className="border p-5 rounded-5 mb-5 mt-3">
          <Form>
            <h2 className="text-center">我的帳號</h2>
            <h5 className="h5-border-button">
              姓名：皮卡丘
              <Button variant="" className="mx-1">
                <BsFillPencilFill />
              </Button>
            </h5>
            <h5 className="h5-border-button">
              使用者帳號：pekorchu
              <Button variant="" className="mx-1">
                <BsFillPencilFill />
              </Button>
            </h5>
            <h5 className="h5-border-button">
              Email：pekorchu＠gmail.com
              <Button variant="" className="mx-1">
                <BsFillPencilFill />
              </Button>
            </h5>
            <h5 className="h5-border-button">
              手機號碼：0912341234
              <Button variant="" className="mx-1">
                <BsFillPencilFill />
              </Button>
            </h5>

            {/* 性別 radio */}
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <h5>
                  性別：
                  <Form.Check
                    inline
                    label="男性"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="女性"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="不透露"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </h5>
              </div>
            ))}

            <h5>生日：1999/3/27</h5>
          </Form>
        </Col>
        {/* <Col sm={1}></Col> */}
      </Row>
    </div>
  );
}

export default Account;
