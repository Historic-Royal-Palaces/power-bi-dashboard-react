const Button = ({ label, url, onClick, itemPath }) => {
  const handleClick = () => {
    onClick(url, itemPath);
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
