import './button.scss';

export const ScrollButton = () => {
  //TODO Scroll
  return (
    <button className="scroll-btn" onClick={() => {}}>
      <svg
        width="115"
        height="115"
        viewBox="0 0 115 115"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="57.5" cy="57.5" r="57.5" fill="#F1F1F1" />
        <path
          d="M44.2085 67.3071L57.9014 81L71.7793 67.1221"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
        />
        <path d="M57.9014 81V34" stroke="currentColor" stroke-width="2" fill="none" />
      </svg>
    </button>
  );
};
