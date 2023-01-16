import React from 'react';
import styles from './Card.module.scss';
import testpic from '../../Img/productstest/test.jpg';

const Card = () => {
  const {
    card_contorl,
    card_body,
    p_img_c,
    content,
    text_contorl,
    evaluate,
    keepshop,
  } = styles;
  return (
    <div className={`${card_contorl}`}>
      <div className={`${card_body} card`}>
        <div className={`${p_img_c} `}>
          <img src={testpic} className="card-img-top"></img>
        </div>
        <div
          className={`${content} d-flex flex-column align-items-center mt-2`}
        >
          <div className={`${text_contorl}`}>
            <p>【Maxim】KANU迷你美式咖啡(0.9gx100入/盒;附限定專屬贈品)</p>
          </div>
          <div className={`${evaluate} d-flex justify-content-center mt-2`}>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
          </div>
        </div>
        <div className={`${keepshop} card-img-bottom`}></div>
      </div>
    </div>
  );
};

export default Card;
