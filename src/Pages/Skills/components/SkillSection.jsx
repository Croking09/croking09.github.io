import { skills } from '../../../data.js'

const SkillSection = ({ title, category, className }) => {
  const mapSkills = (category) => {
    return skills.map((skill) => {
      return skill.category === category ? (
        <div key={skill.name}>
          <a href={skill.url} target="_blank" rel="noopener noreferrer">
            <img
              className={`h-15 w-15 breath-hover ${skill.name === 'GitHub' ? 'bg-white rounded-full' : ''}`}
              src={skill.logo}
              alt={skill.name}
            />
          </a>
        </div>
      ) : null
    })
  }

  return (
      <div className={"flex flex-col items-center xl:w-1/3 " + className}>
        <h1 className="overviewtitle blueunderline">{title}</h1>
        <div className="pt-5 flex flex-wrap justify-start first:justify-center gap-x-10 gap-y-10 max-w-90">
          {mapSkills(category)}
        </div>
      </div>
    );
};

export default SkillSection;
