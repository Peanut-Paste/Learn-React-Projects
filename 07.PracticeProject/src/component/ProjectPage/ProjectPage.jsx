import "./projectPage.css";
import Task from "../Task/Task";

const ProjectPage = ({ projectItem, projectState, setProjectState }) => {
  return (
    <section id="project-page">
      <h3>{projectItem.title}</h3>
      <h4>{projectItem.date}</h4>
      <p>{projectItem.description}</p>
      <hr></hr>
      <Task
        setProjectState={setProjectState}
        tasks={projectItem.task}
        projectState={projectState}
      />
    </section>
  );
};

export default ProjectPage;
