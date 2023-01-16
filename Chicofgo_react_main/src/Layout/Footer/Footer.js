import React from 'react'
// import './css/Footer.scss'
import logoSVG from '../../Img/logo.svg'
import { Link, Router } from 'react-router-dom'
import logotw from '../../Img/twitter.svg'
import logofb from '../../Img/facebook.svg'
import logoyt from '../../Img/youtube.svg'
import logoig from '../../Img/instagram.svg'
import styles from '../Footer/css/Footer.module.scss'


const Footer = () => {
  const { sociallink_wrap, foot_a, sociallink } = styles
  return (
    <footer className="pt-3">
      <div className="custom-container row m-auto mt-5 pt-2">
        <div className="col-2">
          <Link to="/">
            <img src={logoSVG} alt="" />
          </Link>
        </div>
        <div className="col-md-10">
          <div className="d-flex justify-content-md-end pe-md-0">
            <ul className="list-unstyled px-5">
              <li className="py-2">
                <a className={foot_a} href="/">
                  關於我們
                </a>
              </li>
              <li className="py-2">
                <a className={foot_a} href="">
                  品牌故事
                </a>
              </li>
              <li className="py-2">
                <a className={foot_a} href="">
                  商店介紹
                </a>
              </li>
              <li className="py-2">
                <a className={foot_a} href="">
                  會員權益說明
                </a>
              </li>
            </ul>
            <ul className="list-unstyled px-5">
              <li className="py-2">
                <a className={foot_a} href="">
                  購物說明
                </a>
              </li>
              <li className="py-2">
                <a className={foot_a} href="">
                  付款方式
                </a>
              </li>
              <li className="py-2">
                <a className={foot_a} href="">
                  運送方式
                </a>
              </li>
              <li className="py-2">
                <a className={foot_a} href="">
                  退換貨方式
                </a>
              </li>
            </ul>
            <ul className="list-unstyled px-5">
              <li className="py-2">
                <a href="" className={foot_a}>
                  客服資訊
                </a>
              </li>
              <li className="py-2">
                <a className={foot_a} href="">
                  客服留言
                </a>
              </li>
              <li className="py-2">
                <a className={foot_a} href="">
                  常見問題
                </a>
              </li>
              <li className="py-2">
                <a className={foot_a} href="">
                  隱私權及網站使用條款
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${sociallink_wrap} py-3 d-flex justify-content-between`}>
        <p className="Copyrighttext">
          © 2023 Copyright Chicofgo Shop All Rights Reserved.
        </p>
        <div
          className={`${sociallink} d-flex justify-content-between align-items-center`}
        >
          <a href="" className="px-2">
            <img src={logotw} alt="" />
          </a>
          <a href="" className="px-2">
            <img src={logofb} alt="" />
          </a>
          <a href="" className="px-2">
            <img src={logoyt} alt="" />
          </a>
          <Link to="/" className="px-2">
            <img src={logoig} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
