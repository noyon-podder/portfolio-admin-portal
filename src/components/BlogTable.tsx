/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseAPi } from "../libs/baseApi";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export interface Iblog {
  _id: string;
  title: string;
  content: string;
  author?: string;
  imageLink: string;
  category: string;
}

const BlogTable = ({ blog }: { blog: Iblog[] }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["BLOG"],
    mutationFn: (blogId: string) => {
      return axios.delete(`${baseAPi}/api/blog/${blogId}`);
    },
    onSuccess: (data: any) => {
      toast.success(data?.data?.message || "blog deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["BLOG"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to delete blog");
    },
  });

  // Example trigger function
  const handleDelete = (blogId: string) => {
    mutation.mutate(blogId);
  };
  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle ">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="font-bold text-gray-900">Image</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      <strong className="text-black">Title</strong>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      <strong className="text-black">Category</strong>
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                {blog?.map((blog) => (
                  <tbody
                    key={blog?._id}
                    className="bg-white divide-y divide-gray-200  "
                  >
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2 border px-4">
                            <img
                              className="object-cover w-20 h-10 "
                              src={blog?.imageLink}
                              alt={blog?.title}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 capitalize ">
                          <h2 className="text-sm font-normal ">
                            {blog?.title}
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {blog?.category}
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => handleDelete(blog?._id)}
                            className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>

                          <Link to={`/blog/${blog?._id}`}>
                            <button className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTable;
