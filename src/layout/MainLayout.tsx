import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[300px] p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
