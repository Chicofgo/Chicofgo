import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import {
  BsPerson,
  BsPencil,
  BsCreditCard2Back,
  BsGeoAlt,
  BsFillPencilFill,
} from 'react-icons/bs'
import { IconContext } from 'react-icons'
import './member.scss'

function Member() {
  return (
    <div className="custom-container">
      <Row className="border border-5 rounded-5">
        <Col sm={12} className="bg-success my-3">
          <div className="d-flex justify-content-center">
            <IconContext.Provider value={{ className: 'icon' }}>
              <a
                href="#"
                className="px-2 mx-2 my-2 link-light text-decoration-none border"
              >
                <BsPerson />
                我的帳號
              </a>
              <a
                href="#"
                className="px-2 mx-2 my-2 link-light text-decoration-none border"
              >
                <BsPencil />
                修改密碼
              </a>
              <a
                href="#"
                className="px-2 mx-2 my-2 link-light text-decoration-none border"
              >
                <BsCreditCard2Back />
                信用卡
              </a>
              <a
                href="#"
                className="px-2 mx-2 my-2 link-light text-decoration-none border"
              >
                <BsGeoAlt />
                地址
              </a>
            </IconContext.Provider>
          </div>
        </Col>
        <Col sm={1}></Col>
        <Col
          sm={2}
          className="d-flex text-center align-items-center justify-content-center"
        >
          <Image
            alt=""
            width={150}
            height={150}
            src={require('../../component/navbar/logo.png')}
            className="border border-3 rounded-circle  test"
          />
        </Col>
        <Col sm={8} className="border p-5 rounded-5 mb-5 mt-3">
          <Form>
            <h2 className="text-center">我的帳號</h2>
            <h5>
              姓名：皮卡丘
              <Button variant="" className="mx-1">
                <BsFillPencilFill />
              </Button>
            </h5>
            <h5>
              使用者帳號：pekorchu
              <Button variant="" className="mx-1">
                <BsFillPencilFill />
              </Button>
            </h5>
            <h5>
              Email：pekorchu＠gmail.com
              <Button variant="" className="mx-1">
                <BsFillPencilFill />
              </Button>
            </h5>
            <h5>
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
        <Col sm={1}></Col>
      </Row>
    </div>
  )
}

export default Member
