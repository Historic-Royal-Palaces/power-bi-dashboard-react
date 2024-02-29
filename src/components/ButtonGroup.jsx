import { useState } from 'react';
import ButtonList from './ButtonList';
import { IoIosArrowDown, IoIosCloseCircle } from 'react-icons/io';
import OtherButtons from './OtherButtons';

const ButtonGroup = ({ onItemClick, data }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [activeButton, setActiveButton] = useState(null);

  const handleActivation = (label) => {
    setActiveButton(label); // Set the active button label
  };

  const toggleCategory = (group) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [group]: !prevOpenCategories[group],
    }));
  };

  const uniqueCategories = [...new Set(data.map((button) => button.group))];

  return (
    <div className="mt-2">
      {uniqueCategories.map((group, index) => (
        <div key={index} className="mt-2">
          <h2
            className={openCategories[group] ? 'bg-[#3069a7]' : ''}
            onClick={() => toggleCategory(group)}
          >
            {group}
            {openCategories[group] ? <IoIosCloseCircle /> : <IoIosArrowDown />}
          </h2>
          {openCategories[group] && (
            <div className="flex flex-col items-center justify-center">
              {data
                .filter((btn) => btn.group === group)
                .map((btn, btnIndex) =>
                  btn.group !== 'Other Links' ? (
                    <ButtonList
                      key={btnIndex}
                      label={btn.label}
                      onClick={onItemClick}
                      url={btn.src}
                      itemPath={btn.fullPath}
                      title={btn.title}
                      isActive={activeButton === btn.label} // Check if the button is active
                      handleActivation={handleActivation} // Pass the activation handler
                    />
                  ) : (
                    <OtherButtons
                      key={btnIndex}
                      itemPath={btn.fullPath}
                      title={btn.title}
                      label={btn.label}
                      isActive={activeButton === btn.label} // Check if the button is active
                      handleActivation={handleActivation} // Pass the activation handler
                    ></OtherButtons>
                  )
                )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
