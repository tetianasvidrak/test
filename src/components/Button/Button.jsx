import css from "./Button.module.css";

const Button = ({ label, isActive = false, onClick }) => {
  return (
    <button
      className={`${css.button} ${isActive ? css.active : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
