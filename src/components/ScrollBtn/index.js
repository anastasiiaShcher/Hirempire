import "./button.scss";

export const ScrollButton = ({ refVariable }) => {
  const handleClick = () => {
    refVariable.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="scroll-btn" onClick={handleClick}>
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="35" cy="35" r="35" fill="#F1F1F1" />
        <path
          d="M26.9095 40.9695L35.2443 49.3044L43.6917 40.8569"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M35.2443 49.3044V20.6957" stroke="currentColor" strokeWidth="2" />
      </svg>
    </button>
  );
};
