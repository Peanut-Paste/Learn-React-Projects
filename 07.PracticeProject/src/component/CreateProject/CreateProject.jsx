import "./CreateProject.css";
import CustomButton from "../Buttons/CustomButton";
import { useRef, useState } from "react";

function Validate(title, description, date) {
  if (title.length === 0 || description.length === 0 || date.length === 0) {
    return false;
  }
  return true;
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const CreateProject = ({ setProjectState }) => {
  const inputs = useRef([]);
  const [validation, setValidation] = useState(false);

  const handleNoProjectSelected = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };
  const handleCreateProject = () => {
    const title = toTitleCase(inputs.current[0].value);
    const description = inputs.current[1].value;
    const date = inputs.current[2].value;

    if (!Validate(title, description, date)) {
      setValidation(true);
      return;
    }
    setProjectState((prevState) => {
      return {
        selectedProjectId: undefined,
        projects: [
          ...prevState.projects,
          {
            title: title,
            description: description,
            date: date,
            task: [],
          },
        ],
      };
    });
  };

  return (
    <div id="create-project">
      <div className="form-buttons">
        <CustomButton onClick={handleNoProjectSelected} variant="light">
          Cancel
        </CustomButton>
        <CustomButton onClick={handleCreateProject} variant="dark">
          Save
        </CustomButton>
      </div>
      <div>
        <label className={validation ? "error" : undefined}>
          Title
          {validation ? (
            <span style={{ fontSize: "12px", marginLeft: "20px" }}>
              (Cannot be empty)
            </span>
          ) : undefined}
        </label>
        <input
          className={validation ? "error" : undefined}
          ref={(el) => inputs && inputs.current.push(el)}
        />
      </div>
      <div>
        <label className={validation ? "error" : undefined}>
          {validation ? (
            <span style={{ fontSize: "12px", marginLeft: "20px" }}>
              (Cannot be empty)
            </span>
          ) : undefined}
        </label>
        <textarea
          className={validation ? "error" : undefined}
          ref={(el) => inputs && inputs.current.push(el)}
        />
      </div>
      <div>
        <label className={validation ? "error" : undefined}>
          {validation ? (
            <span style={{ fontSize: "12px", marginLeft: "20px" }}>
              (Cannot be empty)
            </span>
          ) : undefined}
        </label>
        <input
          type="date"
          ref={(el) => inputs && inputs.current.push(el)}
          className={validation ? "error" : undefined}
        />
      </div>
    </div>
  );
};

export default CreateProject;
