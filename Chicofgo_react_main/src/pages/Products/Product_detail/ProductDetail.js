import React from 'react'
import Path from '../../../Layout/Item/Path/Path'
import styles from './ProductDetail.module.scss'

const ProductDetail = () => {
  const {detail_contorl, product_detail, product_box, left_pic, detail_content, main_pic} = styles
  return (
    <>
      <Path pathObj={{ path: ['．商品詳細'] }} />
      <div className="custom-container">
        <div className={`${detail_contorl}`}>
          <div className={`${product_detail}`}>
            <div className={`${product_box} d-flex`}>
              <div className={`${left_pic} d-flex`}>
                <div className={`${main_pic}`}></div>
              </div>
              <div className={`${detail_content}`}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
