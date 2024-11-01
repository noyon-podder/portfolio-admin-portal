import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { baseAPi } from "../libs/baseApi";

const AddProject = () => {
  const [value, setValue] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [clientName, setClientName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [liveLink, setLiveLink] = useState("");

  const handleAddProjectForm = async (e: FormEvent) => {
    e.preventDefault();

    const result = {
      title,
      category,
      client: clientName,
      description: value,
      imageLink,
      liveURL: liveLink,
    };

    const response = await fetch(`${baseAPi}/api/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    });

    const data = await response.json();

    if (data?.success) {
      setTitle("");
      setCategory("");
      setValue("");
      setClientName("");
      setImageLink("");
      toast.success(data?.message);
    }
    console.log(data);
  };
  return (
    <div className="w-full ">
      <div className="border-b px-5 py-5 w-full">
        <h2 className="text-[20px] font-bold">Create Project</h2>
      </div>

      <form className="px-5 py-10" onSubmit={handleAddProjectForm}>
        <div className="flex gap-5 flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Project Title</h2>
            <input
              type="text"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base mb-2">Project Category</h2>
            {/* <input
              value={category}
              name="category"
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              className="w-full py-2 border px-4 outline-none mt-2"
            /> */}

            <select
              name=""
              id=""
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border py-[10px] px-4 outline-none"
            >
              <option>Select Category</option>
              <option value={`Single Page`}>Single Page</option>
              <option value={`Web Application`}>Web Application</option>
              <option value={`Admin Portal`}>Admin Portal</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="font-semibold text-base mb-5">Project Description</h2>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="h-[350px]"
          />
        </div>

        <div className="flex gap-5 mt-20 flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Client Name</h2>
            <input
              type="text"
              value={clientName}
              name="clientName"
              onChange={(e) => setClientName(e.target.value)}
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Upload Image</h2>
            <input
              type="text"
              value={imageLink}
              placeholder="http://image.com"
              onChange={(e) => setImageLink(e.target.value)}
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
        </div>

        <div className="flex gap-5 mt-10 flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Website Live Link</h2>
            <input
              type="text"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
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

export default AddProject;
