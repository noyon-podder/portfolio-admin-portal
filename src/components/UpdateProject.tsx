/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { baseAPi } from "../libs/baseApi";
import { useNavigate, useParams } from "react-router-dom";
import { IProject } from "./ProjectTable";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface IupdateData {
  title?: string;
  client?: string;
  imageLink?: string;
  category?: string;
  description: string;
}

const UpdateProject = () => {
  const { projectId } = useParams<{ projectId: string }>(); // Extract projectId directly
  const [value, setValue] = useState<string>(""); // Ensure description is a string
  const [singleProjectData, setSingleProjectData] = useState<IProject | null>(
    null
  );
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["PROJECT"],
    mutationFn: (updatedData: Partial<IProject>) => {
      return axios.put(`${baseAPi}/api/project/${projectId}`, updatedData);
    },
    onSuccess: (data) => {
      toast.success(data?.data?.message || "Project updated successfully");
      queryClient.invalidateQueries({ queryKey: ["PROJECT"] });
      navigate("/");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to update project");
    },
  });

  useEffect(() => {
    const fetchSingleProject = async () => {
      try {
        const res = await fetch(`${baseAPi}/api/project/${projectId}`);
        const data = await res.json();

        setSingleProjectData(data?.data);
        setValue(data?.data?.description || "");
      } catch (error: any) {
        console.log(error);
        toast.error("Failed to fetch project data");
      }
    };

    fetchSingleProject();
  }, [projectId]);

  const handleAddProjectForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string | null;
    const client = formData.get("clientName") as string | null;
    const imageLink = formData.get("imageLink") as string | null;
    const category = formData.get("category") as string | null;

    const updateData: IupdateData = {
      title: title || undefined,
      client: client || undefined,
      imageLink: imageLink || undefined,
      category: category || undefined,
      description: value,
    };

    mutation.mutate(updateData);
  };

  return (
    <div className="w-full">
      <div className="border-b px-5 py-5 w-full">
        <h2 className="text-[20px] font-bold">Update Your Project</h2>
      </div>
      <form className="px-5 py-10" onSubmit={handleAddProjectForm}>
        <div className="flex gap-5 flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Project Title</h2>
            <input
              type="text"
              defaultValue={singleProjectData?.title || ""}
              name="title"
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Project Category</h2>
            <input
              defaultValue={singleProjectData?.category || ""}
              name="category"
              type="text"
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
        </div>

        <div className="mt-5">
          <h2 className="font-semibold text-base mb-5">Project Description</h2>
          <ReactQuill
            theme="snow"
            value={value} // Use state value
            onChange={setValue} // Update state on change
            className="h-[350px]"
          />
        </div>

        <div className="flex gap-5 mt-20 flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Client Name</h2>
            <input
              type="text"
              defaultValue={singleProjectData?.client || ""}
              name="clientName"
              className="w-full py-2 border px-4 outline-none mt-2"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="font-semibold text-base">Upload Image</h2>
            <input
              type="text"
              name="imageLink"
              defaultValue={singleProjectData?.imageLink || ""}
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

export default UpdateProject;
