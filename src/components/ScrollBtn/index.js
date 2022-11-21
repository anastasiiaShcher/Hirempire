import { useWidthData } from "../../hooks";
import "./button.scss";

export const ScrollButton = ({ refVariable }) => {
  const { isMobile } = useWidthData();

  const handleClick = () => {
    refVariable.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="scroll-btn" onClick={handleClick}>
      {!isMobile ? (
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
          <path
            d="M35.2443 49.3044V20.6957"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14.5" cy="14.5" r="14.5" fill="#F1F1F1" />
          <path
            d="M11.1478 16.9733L14.6008 20.4263L18.1005 16.9266"
            stroke="currentColor"
            stroke-width="2"
          />
          <path
            d="M14.6016 20.4264V8.57422"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      )}
    </button>
  );
};
