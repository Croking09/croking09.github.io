import SkillSection from "./components/SkillSection.jsx";

function Skills() {
  return (
    <div className="skillslayoutmobile xl:w-full xl:flex-row xl:items-baseline xl:flex-wrap xl:justify-center xl:gap-x-12 xl:gap-y-12">
      <SkillSection title="Frontend" category="Frontend" />
      <SkillSection title="Backend" category="Backend" />
      <SkillSection title="Tools" category="Tools" />
    </div>
  );
}

export default Skills;
