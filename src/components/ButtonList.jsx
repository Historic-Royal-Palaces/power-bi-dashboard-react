const ButtonList = ({
  label,
  url,
  onClick,
  itemPath,
  title,
  isActive,
  handleActivation,
}) => {
  const handleClick = () => {
    handleActivation(label);
    onClick(url, itemPath, title);
  };

  return (
    <button className={isActive ? 'active' : ''} onClick={handleClick}>
      {label}
    </button>
  );
};

export default ButtonList;
