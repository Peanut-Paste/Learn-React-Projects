import "./CustomButton.css"

const CustomButtons = ({ variant, children, ...props }) => {
  return (
    <button
      className={`custom-button ${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButtons;
