function RepoCard({ userName, repoName }) {
  return (
    <a href={`https://github.com/${userName}/${repoName}`} target="_blank" rel="noopener noreferrer">
      <img src={`https://github-readme-stats.vercel.app/api/pin/?username=${userName}&repo=${repoName}&bg_color=0d1117&border_color=30363d`} alt={userName + "/" + repoName} />
    </a>
  );
}

export default RepoCard;
