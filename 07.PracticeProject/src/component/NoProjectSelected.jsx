import clipboard from "../assets/no-projects.png";
import CustomButtons from "./Buttons/CustomButton";

const NoProjectSelected = ({ handleStartAddProject }) => {
  return (
    <div id="no-project">
      <img src={clipboard} />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <CustomButtons variant="dark" onClick={handleStartAddProject}>
        Create new project
      </CustomButtons>
    </div>
  );
};

export default NoProjectSelected;
