import { baseAPi } from "../libs/baseApi";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BlogTable from "./BlogTable";

const GetAllBlog = () => {
  const { data } = useQuery({
    queryKey: ["BLOG"],
    queryFn: () => {
      return axios.get(`${baseAPi}/api/blog`);
    },
  });

  const blog = data?.data?.data;

  return (
    <div className="p-5">
      <h2 className="text-[20px] font-bold pb-5">My All Blogs </h2>

      {data?.data?.data?.length === 0 && (
        <p className="text-[24px] text-center pt-5 border-t">No Blogs found</p>
      )}
      {data?.data?.data?.length > 0 && <BlogTable blog={blog} />}
    </div>
  );
};

export default GetAllBlog;
