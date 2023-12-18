import "./task.css";
import CustomButtons from "../Buttons/CustomButton";
import { useRef } from "react";

const Task = ({ tasks, projectState, setProjectState }) => {
  const taskinput = useRef();

  function handleAddTask(operation, idx) {
    if (taskinput.length == 0) {
      return;
    }
    const currentProjectIdx = projectState.selectedProjectId;
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project, i) => {
        if (currentProjectIdx == i) {
          if (operation === "add") {
            return {
              ...project,
              task: [...project.task, taskinput.current.value],
            };
          } else {
            const updatedTaskList = project.task.filter(
              (_, taskIdx) => taskIdx !== idx
            );
            return {
              ...project,
              task: updatedTaskList,
            };
          }
        } else {
          return project;
        }
      });
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }
  return (
    <section id="task">
      <h3>Tasks</h3>
      <div className="inputs">
        <input ref={taskinput} />
        <CustomButtons variant="dark" onClick={() => handleAddTask("add", 0)}>
          Add task
        </CustomButtons>
      </div>
      <div className="tasklist">
        <ul>
          {tasks?.map((item, idx) => (
            <li key={idx}>
              {item}
              <span
                style={{ float: "right" }}
                onClick={() => handleAddTask("delete", idx)}
              >
                Clear
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Task;
