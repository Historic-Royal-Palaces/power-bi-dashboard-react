import { useState } from 'react';
import Button from './Button';
import { IoIosArrowDown } from 'react-icons/io';

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
            className="flex justify-between items-center cursor-pointer bg-amber-400 my-2 py-2 px-4 text-center rounded-lg w-full"
            onClick={() => toggleDropdown(category.title)}
          >
            {category.title} <IoIosArrowDown />
          </h2>
          {openCategory === category.title && (
            <ul className="flex flex-col justify-center items-center">
              {category.buttons.map((button, buttonIndex) => (
                <li className="m-1" key={buttonIndex}>
                  <Button
                    label={button.label}
                    url={button.src}
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