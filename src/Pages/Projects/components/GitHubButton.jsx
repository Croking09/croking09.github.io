function GitHubButton({ repoUrl, className }) {
  return (
    <a className={`inline-block text-white px-4 py-2 rounded-[4px] ` + className}
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project on GitHub
    </a>
  )
}

export default GitHubButton;
