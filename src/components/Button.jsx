const Button = ({ label, url, onClick }) => {
  const handleClick = () => {
    onClick(url);
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
