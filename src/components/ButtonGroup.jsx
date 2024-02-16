import { useState } from 'react';
import Button from './Button';
import { IoIosArrowDown, IoIosCloseCircle } from 'react-icons/io';

const ButtonGroup = ({ buttonData, onItemClick }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (categoryTitle) => {
    setOpenCategory(openCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <div className="mt-4">
      {buttonData.map((category, index) => (
        <div key={index}>
          <h2
            className={` ${
              openCategory === category.title ? 'bg-[#3069a7]' : ''
            }`}
            onClick={() => toggleDropdown(category.title)}
          >
            {category.title}
            {openCategory === category.title ? (
              <IoIosCloseCircle />
            ) : (
              <IoIosArrowDown />
            )}
          </h2>
          {openCategory === category.title && (
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
