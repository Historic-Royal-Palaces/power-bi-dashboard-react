import { useState } from 'react';
import ButtonList from './ButtonList';
import { IoIosArrowDown, IoIosCloseCircle } from 'react-icons/io';

const ButtonGroup = ({ onItemClick, data }) => {
  const [openCategories, setOpenCategories] = useState({});

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
                    />
                  ) : (
                    <ButtonList
                      key={btnIndex}
                      itemPath={btn.fullPath}
                      title={btn.title}
                    >
                      <a href={btn.fullPath} target="_blank">
                        {btn.label}
                      </a>
                    </ButtonList>
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
