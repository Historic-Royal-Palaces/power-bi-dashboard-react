const ButtonList = ({ label, url, onClick, itemPath, title, children }) => {
  const handleClick = () => {
    onClick(url, itemPath, title);
  };

  return (
    <button className={`m-1`} onClick={handleClick}>
      {label}
      {children}
    </button>
  );
};

export default ButtonList;
