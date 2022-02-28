import './index.css'
import {
  Link,
} from "react-router-dom";
import { useState } from 'react';
import { ReactComponent as UpIcon } from '../../../icons/up.svg';
import { ReactComponent as DownIcon } from '../../../icons/down.svg';


const SideBar = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const showDropDown = () => {
    setOpenDropDown(!openDropDown)
  }

  return (
    <div className="side-bar bg-gray-800 basis-2/12	h-screen ">
      <h3 className="pt-4 pb-4 text-center text-3xl text-white pt-5">Learning vocabulary</h3>
      <hr></hr>
      <ul className="mt-24">
        <li><Link to="/danh-sach-tu">Danh sách từ</Link></li>
        <li><Link to="/kiem-tra">Làm bài kiểm tra</Link></li>
        <li>
          <span onClick={showDropDown} >Thống kê {openDropDown ? <UpIcon /> : <DownIcon/> }</span>
          {
            openDropDown ?
              <>
                <Link className="block ml-6" to="/thong-ke/tu-hoc-duoc"> + Các từ học được</Link>
                <Link className="block ml-6" to="/thong-ke/nho-quen"> + Các từ quên/nhớ từ</Link>
              </>
              :
              <></>
          }
        </li>

      </ul>
    </div>
  );
}

export default SideBar;
