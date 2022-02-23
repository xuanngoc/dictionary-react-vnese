import './index.css'
import {
  Link,
} from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar bg-gray-800 basis-2/12	h-screen ">
      <h3 className="pt-4 pb-4 text-center text-3xl text-white pt-5">Learning vocabulary</h3>
      <hr></hr>
      <ul className="mt-24">
        <li><Link to="/danh-sach-tu">Danh sách từ</Link></li>
        <li><Link to="/tra-cuu">Tra cứu</Link></li>
        <li><Link to="/kiem-tra">Làm bài kiểm tra</Link></li>
        <li><Link to="/thong-ke">Thống kê</Link></li>

      </ul>
    </div>
  );
}

export default SideBar;
