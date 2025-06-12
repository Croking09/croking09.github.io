import GitHubButton from './GitHubButton.jsx';

function BencheeContributionCard() {
  return (
    <div className="bg-[#0d1117] rounded-2xl shadow-md p-6">
      <h3 className="text-2xl font-bold text-purple-600">Benchee</h3>
      <p className="text-gray-600 mt-2">
        Easy and extensible benchmarking in Elixir providing you with lots of statistics!
      </p>
      <ul className="mt-3 text-sm text-gray-500 list-disc list-inside">
        <li>Improved architecture documentation</li>
        <li>Authored <a href="https://github.com/bencheeorg/benchee/pull/456" className="text-blue-500 underline">this pull request</a></li>
      </ul>
      <GitHubButton className="mt-4 bg-purple-600 hover:bg-purple-700" repoUrl="https://github.com/bencheeorg/benchee" />
    </div>
  );
}

export default BencheeContributionCard;
