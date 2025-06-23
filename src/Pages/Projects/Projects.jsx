import RepoCard from './components/RepoCard.jsx';

import { projects } from '../../data.js';

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="overviewtitle pb-3">404 :(</h1>
      <p className="text-center">I haven't completed any noteworthy projects (yet).</p>

      <h1 className="overviewtitle blueunderline pt-10">Nonetheless</h1>
      <div className="flex flex-col py-5 px-5">
        <p className="pb-1">I did participate in this cool project:</p>
        {projects.map((project) => {
          return <RepoCard key={`${project.userName}/${project.repoName}`} userName={project.userName} repoName={project.repoName} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
