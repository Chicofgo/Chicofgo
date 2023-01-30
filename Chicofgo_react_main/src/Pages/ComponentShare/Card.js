import React from 'react';
import styles from './Card.module.scss';
import testpic from '../../Img/ProductsTest/test.jpg';
import { v4 } from 'uuid';
import { FaShoppingCart, FaBookmark } from "react-icons/fa";

const Card = (props) => {
  const { title, rating, price } = props;
  const {
    card_contorl,
    card_body,
    p_img_c,
    content,
    text_contorl,
    evaluate,
    keepshop,
    price_contorl,
    mark_contorl,
    cart_contorl,
  } = styles;
  return (
    <div className={`${card_contorl}`}>
      <div className={`${card_body} card`}>
        <div className={`${p_img_c} `}>
          <img src={testpic} className="card-img-top" alt="" />
        </div>
        <div
          className={`${content} d-flex flex-column align-items-center mt-2`}
        >
          <div className={`${text_contorl}`}>
            {/* <p>【Maxim】KANU迷你美式咖啡(0.9gx100入/盒;附限定專屬贈品)</p> */}
            <p>{title}</p>
          </div>
          <div className={`${evaluate} d-flex justify-content-center mt-2`}>
            {new Array(rating).fill().map((star) => {
              return <p key={v4()}>⭐</p>;
            })}
          </div>
        </div>
        <div
          className={`${keepshop} card-img-bottom d-flex align-items-center `}
        >
          <div className={`${price_contorl} `}>{price}</div>
          <div className={`${mark_contorl} `}>
            <FaBookmark />
          </div>
          <div className={`${cart_contorl} `}>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
