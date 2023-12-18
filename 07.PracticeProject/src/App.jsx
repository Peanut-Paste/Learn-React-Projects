import CreateProject from "./component/CreateProject/CreateProject";
import NoProjectSelected from "./component/NoProjectSelected";
import SideBar from "./component/SideBar";
import { useState } from "react";
import ProjectPage from "./component/ProjectPage/ProjectPage";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  let page;
  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  if (projectState.selectedProjectId === undefined) {
    page = <NoProjectSelected handleStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    page = <CreateProject setProjectState={setProjectState} />;
  } else {
    page = (
      <ProjectPage
        projectItem={projectState.projects[projectState.selectedProjectId]}
        setProjectState={setProjectState}
        projectState={projectState}
      />
    );
  }

  return (
    <>
      <SideBar
        projectState={projectState}
        setProjectState={setProjectState}
        handleStartAddProject={handleStartAddProject}
      />
      <section id="content">{page}</section>
    </>
  );
}

export default App;
