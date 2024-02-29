import { useState } from 'react';

const OtherButtons = ({ label, itemPath, isActive, handleActivation }) => {
  const [path, setPath] = useState(null);

  const handleClick = () => {
    handleActivation(label);
    setPath(itemPath);
  };

  return (
    <button className={isActive ? 'active' : ''} onClick={handleClick}>
      <a href={path} target="_blank">
        {label}
      </a>
    </button>
  );
};

export default OtherButtons;
