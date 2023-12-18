import CustomButtons from "./Buttons/CustomButton";

const SideBar = ({ projectState, setProjectState, handleStartAddProject }) => {
  const handleClick = (idx) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: idx,
      };
    });
  };
  return (
    <div id="project-sidebar">
      <h2>Your Projects</h2>
      <CustomButtons variant="light" onClick={handleStartAddProject}>
        + Add Project
      </CustomButtons>
      <div>
        <ul>
          {projectState.projects.map((item, idx) => (
            <li key={idx}>
              <CustomButtons
                onClick={() => handleClick(idx)}
                variant="sidebutton"
              >
                {item.title}
              </CustomButtons>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
