import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../component_share/Card'
import styles from './List.module.scss'

const List = () => {
  const {
    list_control,
    sidebar,
    block_brand,
    block_cate,
    block_items,
    block_origin,
    block_price,
    Inquire,
    text_c,
    card_group,
    card_control,
    card_block,
  } = styles
  return (
    <div className="custom-container ">
      <div className={`${list_control} row mx-2`}>
        <div className={`${sidebar} col-md-2 d-flex flex-column `}>
          <div className={`${block_brand} d-flex flex-column px-2`}>
            <h4>品牌</h4>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                統一
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                味全
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                伯朗
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                雀巢
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                UCC
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                貝納頌
              </label>
            </div>
          </div>

          <div className={`${block_cate} d-flex flex-column px-2`}>
            <h4>類別</h4>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                罐裝咖啡
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                即溶咖啡
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                咖啡豆
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                膠囊咖啡
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                奶精
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                濾掛
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                冰滴壺
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                奶泡機
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                咖啡機
              </label>
            </div>
          </div>

          <div className={`${block_items} d-flex flex-column px-2`}>
            <h4>品項</h4>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                三合一
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                二合一
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                黑咖啡
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                拿鐵
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                美式咖啡
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                義式咖啡
              </label>
            </div>
          </div>

          <div className={`${block_origin} d-flex flex-column px-2`}>
            <h4>產地</h4>
            <div className="form-check ">
              <input className="form-check-input " type="checkbox" />
              <label className="form-check-label" for="gridCheck1">
                巴西
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                印尼
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                肯尼亞
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                夏威夷
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck1">
                義大利
              </label>
            </div>
          </div>

          <div className={`${block_price} d-flex flex-column px-2`}>
            <h4>價格範圍</h4>
            <div className="price-check">
              <input type="text" className={text_c} />
              <label className="mx-2">$</label>
              <div>到</div>
              <input type="text" className={text_c} />
              <label className="mx-2">$</label>
            </div>
            <button type="submit" className={`btn1 ${Inquire} `}>
              查詢
            </button>
          </div>
        </div>
        <div className={`${card_block} col-md-10`}>
          <div
            className={`${card_group} d-flex justify-content-between flex-wrap mx-0`}
          >
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
            <div className={`${card_control}`}>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
