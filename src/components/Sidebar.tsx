import { Edit } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const router = useLocation();
  console.log(router.pathname);
  return (
    <div className="w-[300px] hidden lg:block bg-[#121212] h-screen fixed top-0 left-0  ">
      <div className="py-5 border-b border-gray-600">
        <h2 className="uppercase text-[20px] text-white font-semibold text-center">
          Portfolio
        </h2>
      </div>
      <ul className="">
        <li
          className={` bg-transparent transition-colors  hover:bg-fuchsia-800 `}
        >
          <Link
            to="/add-project"
            className={`px-5 flex items-center gap-3 text-white py-4 ${
              router.pathname === "/add-project" ? "bg-fuchsia-800" : ""
            }`}
          >
            <Edit />
            Create Project
          </Link>
        </li>
        <li
          className={` bg-transparent transition-colors  hover:bg-fuchsia-800 ${
            router.pathname === "/write-blog" ? "bg-fuchsia-800" : ""
          }`}
        >
          <Link
            to="/write-blog"
            className={` flex items-center gap-3 text-white py-4 px-5 ${
              router.pathname === "/write-blog" ? "bg-fuchsia-800" : ""
            }`}
          >
            <Edit />
            Write Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
