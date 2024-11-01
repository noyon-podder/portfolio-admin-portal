import { Edit, Projector, TableOfContents } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const routers = [
  {
    id: 1,
    path: "/",
    name: "All Projects",
    icon: <Projector />,
  },
  {
    id: 2,
    path: "/add-project",
    name: "Create Projects",
    icon: <Edit />,
  },
  {
    id: 3,
    path: "/write-blog",
    name: "Write Blog",
    icon: <Edit />,
  },
  {
    id: 3,
    path: "/blog",
    name: "All Blogs",
    icon: <TableOfContents />,
  },
];

const Sidebar = () => {
  const router = useLocation();

  return (
    <div className="w-[300px] hidden lg:block bg-[#121212] h-screen fixed top-0 left-0  ">
      <div className="py-5 border-b border-gray-600">
        <h2 className="uppercase text-[20px] text-white font-semibold text-center">
          Portfolio
        </h2>
      </div>
      <ul className="">
        {routers.map((route) => (
          <li
            key={route?.id}
            className={` bg-transparent transition-colors  hover:bg-fuchsia-800 ${
              router.pathname === route?.path ? "bg-fuchsia-800" : ""
            }`}
          >
            <Link
              to={route.path}
              className={` flex items-center gap-3 text-white py-4 px-5 ${
                router.pathname === route?.path ? "bg-fuchsia-800" : ""
              }`}
            >
              {route?.icon}
              {route?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
