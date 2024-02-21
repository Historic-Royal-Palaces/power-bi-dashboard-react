import { useState } from 'react';
import Button from './Button';
import { IoIosArrowDown, IoIosCloseCircle } from 'react-icons/io';

const ButtonGroup = ({ onItemClick, dashboardData }) => {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (group) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [group]: !prevOpenCategories[group],
    }));
  };

  const uniqueCategories = [
    ...new Set(dashboardData.map((button) => button.group)),
  ];

  return (
    <div>
      {uniqueCategories.map((group, index) => (
        <div key={index}>
          <h2
            className={openCategories[group] ? 'bg-[#3069a7]' : ''}
            onClick={() => toggleCategory(group)}
          >
            {group}
            {openCategories[group] ? <IoIosCloseCircle /> : <IoIosArrowDown />}
          </h2>
          {openCategories[group] && (
            <div className="flex flex-col items-center justify-center">
              {dashboardData
                .filter((btn) => btn.group === group)
                .map((btn, btnIndex) => (
                  <Button
                    key={btnIndex}
                    label={btn.label}
                    onClick={onItemClick}
                    url={btn.src}
                    itemPath={btn.itemPath}
                  />
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
