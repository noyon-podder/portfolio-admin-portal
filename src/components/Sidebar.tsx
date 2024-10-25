import { Edit } from "lucide-react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[300px] bg-[#121212] h-screen fixed top-0 left-0  ">
      <div className="py-5 border-b border-gray-600">
        <h2 className="uppercase text-[20px] text-white font-semibold text-center">
          Portfolio
        </h2>
      </div>
      <ul className="">
        <li className="px-5 bg-transparent transition-colors  hover:bg-fuchsia-800">
          <Link
            to="add-project"
            className=" flex items-center gap-3 text-white py-4"
          >
            <Edit />
            Create Project
          </Link>
        </li>
        <li className="px-5 bg-transparent transition-colors hover:bg-fuchsia-800">
          <Link
            to="add-project"
            className=" flex items-center gap-3 text-white py-4"
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
