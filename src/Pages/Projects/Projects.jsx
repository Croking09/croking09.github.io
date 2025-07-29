import RepoCard from './components/RepoCard.jsx';

import { ownProjects, collaborations } from '../../data.js';

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="overviewtitle blueunderline">Own Projects</h1>
      <div className="flex gap-3 py-5 px-5">
        {ownProjects.map((project) => {
          return <RepoCard key={`${project.userName}/${project.repoName}`} userName={project.userName} repoName={project.repoName} />;
        })}
      </div>

      <h1 className="overviewtitle blueunderline pt-10">Collaborations</h1>
      <div className="flex gap-3 py-5 px-5">
        {collaborations.map((project) => {
          return <RepoCard key={`${project.userName}/${project.repoName}`} userName={project.userName} repoName={project.repoName} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
