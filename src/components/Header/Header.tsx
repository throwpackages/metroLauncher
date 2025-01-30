import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <button className="minimize__button">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 234.667h384v42.667H64z" fill-rule="evenodd" />
        </svg>
      </button>
      <button className="close__button">
        <svg viewBox="0 -0.5 21 21" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.018 10 21 18.554 19.48 20l-8.98-8.554L1.518 20 0 18.554 8.98 10 0 1.446 1.518 0 10.5 8.554 19.48 0 21 1.446z"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
