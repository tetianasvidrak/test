import { useState } from "react";
import css from "./Filter.module.css";

const Filter = ({ options, onSelect, initialValue }) => {
  const [selectedOption, setSelectedOption] = useState(initialValue);
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setAreOptionsVisible(false);
  };

  const onOpenOptionsHandler = () => {
    setAreOptionsVisible(true);
  };

  return (
    <div className={css.dropdown}>
      <div className={css["selected-option"]} onClick={onOpenOptionsHandler}>
        {selectedOption.label}
      </div>
      {areOptionsVisible && (
        <ul className={css.options}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
