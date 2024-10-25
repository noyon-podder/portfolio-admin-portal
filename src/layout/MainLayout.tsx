import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="lg:ml-[300px] w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
