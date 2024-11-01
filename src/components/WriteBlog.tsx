import { FormEvent, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { baseAPi } from "../libs/baseApi";
import toast from "react-hot-toast";

const WriteBlog = () => {
  const [value, setValue] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleAddProjectForm = async (e: FormEvent) => {
    e.preventDefault();

    const result = { title, category, imageLink, content: value };

    const response = await fetch(`${baseAPi}/api/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    });

    const data = await response.json();

    if (data?.success) {
      setValue("");
      setTitle("");
      setCategory("");
      setImageLink("");
      toast.success(data?.message);
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <div className="w-full ">
      <div className="border-b px-5 py-5 w-full">
        <h2 className="text-[20px] font-bold">Write a New Blog</h2>
      </div>

      <form className="px-5 py-10" onSubmit={handleAddProjectForm}>
        <div className="flex gap-5 flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Blog Title</h2>
            <input
              type="text"
              value={title}
              name="title"
              placeholder="Enter Blog Title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Blog Category</h2>
            <input
              name="category"
              value={category}
              placeholder="Enter Blog Category"
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
        </div>

        <div className="mt-5">
          <h2 className="font-semibold text-base mb-5">Blog Content</h2>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Enter Blog Content"
            className="h-[350px]"
          />
        </div>

        <div className="flex gap-5 mt-20 flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Blog Image</h2>
            <input
              type="text"
              value={imageLink}
              placeholder="Enter Image Hosted URL"
              onChange={(e) => setImageLink(e.target.value)}
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-9 hover:bg-fuchsia-900 rounded-md mt-5 text-[18px] font-medium py-2 bg-fuchsia-800 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WriteBlog;
