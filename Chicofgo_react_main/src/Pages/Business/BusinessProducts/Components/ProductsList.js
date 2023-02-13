import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  pagination,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './productsList.scss';

function ProductsList(props) {
  const [products, setProducts] = useState([]);
  const [valid, setValid] = useState('');
  const { productId } = useParams();

  //分頁
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(8);

  //要顯示的組數
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const paginatedItems = products.slice(
    currentPage * perPage,
    currentPage * perPage + perPage
  );

  useEffect(() => {
    async function getproducts() {
      let response = await axios.get(
        'http://localhost:3001/api/business/products'
      );
      setProducts(response.data);
    }
    getproducts();
  }, []);

  const handleOff = async (productId) => {
    try {
      const responseOff = await axios.put(
        `http://localhost:3001/api/business/products/${productId}`,
        {
          valid: '0',
        }
      );

      setValid(0);

      console.log(responseOff);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOn = async (productId) => {
    try {
      const responseOff = await axios.put(
        `http://localhost:3001/api/business/products/${productId}`,
        {
          valid: '1',
        }
      );

      setValid(1);

      console.log(responseOff);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(handleOn);
  //取得陣列資料放進products

  return (
    <>
      {paginatedItems
        .filter((product) => {
          return props.searchName.toLowerCase() === ''
            ? product
            : product.name.toLowerCase().includes(props.searchName);
        })
        .filter((product) => {
          return props.searchNumber.toLowerCase() === ''
            ? product
            : product.number.toLowerCase().includes(props.searchNumber);
        })
        .filter((product) => {
          return props.searchType.toLowerCase() === ''
            ? product
            : product.name.toLowerCase().includes(props.searchType);
        })
        .map((product) => {
          return (
            <Row
              className="text-center border-bottom align-items-center py-1 mt-1 d-flex"
              key={product.id}
            >
              <Col sm={2} className="my-1">
                {product.name}
              </Col>
              <Col sm={2} className="my-1">
                <span className="select">商品貨號：</span>1
              </Col>
              <Col sm={2} className="my-1">
                <span className="select">價錢</span>
                {product.price}
              </Col>
              <Col sm={2} className="my-1">
                <span className="select">商品數量：</span>
                123
              </Col>
              <Col sm={2} className="my-1">
                <span className="select">已售出：</span>
                123
              </Col>
              <Col sm={2} className="my-1">
                <span className="select">狀態：</span>
                123
              </Col>
              <Col className="pb-2">
                <Row className="justify-content-end text-center">
                  <Col sm={2} className="text-center">
                    <Button
                      className="px-2 mx-1"
                      variant="chicofgo-brown text-white"
                    >
                      詳細
                    </Button>

                    {valid === 1 ? (
                      <Button
                        className="px-2 mx-1"
                        variant="chicofgo-khaki text-white"
                        id={product.id}
                        value={product.valid}
                        onClick={(e) => handleOff(e.target.id)}
                      >
                        上架
                      </Button>
                    ) : (
                      <Button
                        className="px-2 mx-1"
                        id={product.id}
                        value={product.valid}
                        variant="chicofgo-khaki text-white"
                        onClick={(e) => handleOn(e.target.id)}
                      >
                        下架
                      </Button>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      <Row className="my-5 ">
        <Col className="col-4"></Col>
        <Col className="d-flex col-4">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={Math.ceil(products.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            subContainerClassName={'pages pagination '}
            pageClassName="page-item "
            pageLinkClassName="page-link"
            previousClassName="page-item "
            previousLinkClassName="page-link "
            nextClassName="page-item "
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link "
            containerClassName="pagination "
            activeClassName="active "
            renderOnZeroPageCount={null}
          />
        </Col>
        <Col className="col-4"></Col>
      </Row>
    </>
  );
}

export default ProductsList;
