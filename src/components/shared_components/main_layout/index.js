import SideBar from "../side_bar";
import Header from '../header/index';

const MainLayout = (props) => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="basis-10/12  ">
        {props.children}
      </div>
    </div>
  );
}

export default MainLayout;
