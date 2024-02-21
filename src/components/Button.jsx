const Button = ({ label, url, onClick, itemPath }) => {
  const handleClick = () => {
    onClick(url, itemPath);
  };

  return (
    <button className="my-1" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
