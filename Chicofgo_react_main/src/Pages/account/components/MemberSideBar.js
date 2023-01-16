import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  Link,
} from 'react-router-dom';

import {
  BsSearch,
  BsFillBellFill,
  BsSuitHeartFill,
  BsFillPersonFill,
  BsFillCartFill,
} from 'react-icons/bs';

import './MemberSideBar.scss';

function memberSideBar() {
  return (
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary memberSideBarPadding memberSideBarSide opacity-50">
      <div class="d-flex flex-column align-items-center px-3 pt-2 vh-100 text-center">
        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li class="nav-item">
            <Link class="nav-link align-middle px-0 my-2 text-white">
              <div class="text-center">我的帳號</div>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link align-middle my-2 px-0 text-white">
              <div class="text-center">歷史訂單</div>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link align-middle my-2 px-0 text-white">
              <div class="text-center">我的優惠券</div>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link align-middle my-2 px-0 text-white">
              <div class="text-center">通知總覽</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memberSideBar;
