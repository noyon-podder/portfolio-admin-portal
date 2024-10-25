import { FormEvent, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddProject = () => {
  const [value, setValue] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [clientName, setClientName] = useState("");

  const handleAddProjectForm = (e: FormEvent) => {
    e.preventDefault();

    const result = { title, category, clientName, value };

    console.log(result);
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
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Project Category</h2>
            <input
              name="category"
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              className="w-full py-2 border px-4 outline-none mt-2"
            />
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
              name="clientName"
              onChange={(e) => setClientName(e.target.value)}
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Upload Image</h2>
            <input
              type="file"
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
