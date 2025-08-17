import ScrollIndicator from "./components/ScrollIndicator";
import ProfileImg from "./components/ProfileImg";

function Overview() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ProfileImg />

      <h1 className="title blueunderline">Who am I</h1>
      <div className="pt-3 text-center px-2">
        <p>
          I'm <strong>Javier Hernández Martínez</strong>, a (future) software
          engineer and full stack developer from Spain.
        </p>
        <p>
          I'm studying Computer Science at the{" "}
          <a href="https://udc.es/" className="text-udc visited:text-udc">
            University of A Coruña
          </a>
          .
        </p>
      </div>

      <h1 className="title blueunderline pt-10">Timeline</h1>
      <ul className="px-3 text-left pb-4 xl:pb-0">
        <li className="overviewli">
          <span className="overviewyear">2022</span>
          <span>I started my journey in the Computer Science world.</span>
        </li>
        <li className="overviewli">
          <span className="overviewyear">2025</span>
          <span>
            I really got into software development and started to learn about
            it.
          </span>
        </li>
        <li className="overviewli">
          <span className="overviewyear">Today</span>
          <span>I keep honing my skills and learning.</span>
        </li>
      </ul>

      <ScrollIndicator className="hidden xl:block pt-10 pb-10" />
    </div>
  );
}

export default Overview;
