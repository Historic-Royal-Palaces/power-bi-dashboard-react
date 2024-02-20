import { useState } from 'react';
import Button from './Button';
import { IoIosArrowDown, IoIosCloseCircle } from 'react-icons/io';

const ButtonGroup = ({ onItemClick, dashboardData }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (categoryTitle) => {
    setOpenCategory(openCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <div className="mt-4">
      {dashboardData.map((category, index) => (
        <div key={index}>
          <h2
            className={` ${
              openCategory === category.buttons[0].group ? 'bg-[#3069a7]' : ''
            }`}
            onClick={() => toggleDropdown(category.buttons[0].group)}
          >
            {category.buttons[0].group}
            {openCategory === category.buttons[0].group ? (
              <IoIosCloseCircle />
            ) : (
              <IoIosArrowDown />
            )}
          </h2>
          {openCategory === category.buttons[0].group && (
            <ul className="flex flex-col justify-center items-center">
              {category.buttons.map((button, buttonIndex) => (
                <li className="m-1" key={buttonIndex}>
                  <Button
                    label={button.label}
                    url={button.src}
                    itemPath={button.fullPath}
                    onClick={onItemClick}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
