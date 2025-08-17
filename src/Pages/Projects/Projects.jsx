import RepoCard from "./components/RepoCard.jsx";

import { ownProjects, collaborations as contributions } from "../../data.js";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="title blueunderline">Own Projects</h1>
      <div className="flex gap-3 py-5 px-5">
        {ownProjects.map((project) => {
          return (
            <RepoCard
              key={`${project.userName}/${project.repoName}`}
              userName={project.userName}
              repoName={project.repoName}
            />
          );
        })}
      </div>

      <h1 className="title blueunderline pt-10">Contributions</h1>
      <div className="flex gap-3 py-5 px-5">
        {contributions.map((project) => {
          return (
            <RepoCard
              key={`${project.userName}/${project.repoName}`}
              userName={project.userName}
              repoName={project.repoName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
