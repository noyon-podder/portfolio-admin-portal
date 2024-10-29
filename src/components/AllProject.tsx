import ProjectsTable from "./ProjectTable";
import { baseAPi } from "../libs/baseApi";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AllProject = () => {
  const { data } = useQuery({
    queryKey: ["PROJECT"],
    queryFn: () => {
      return axios.get(`${baseAPi}/api/project`);
    },
  });

  const projects = data?.data?.data;
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-bold pb-5">My Projects </h2>

      {data?.data?.data?.length === 0 && (
        <p className="text-[24px] text-center pt-5 border-t">
          No projects found
        </p>
      )}
      {data?.data?.data?.length > 0 && (
        <ProjectsTable projectsData={projects} />
      )}
    </div>
  );
};

export default AllProject;
