import React, { useState } from 'react';
import styles from './ToolTip.module.css';

function ToolTip({ text }) {
  const [showText, setShowText] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setShowText((prev) => !prev);
    }
  };

  const handleBlur = () => {
    setShowText(false);
  };
  return (
    <div
      className={styles.tooltip_container}
      tabIndex={0}
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
      onFocus={() => setShowText(true)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label="Info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="#1D3A36"
        className="bi bi-info-circle-fill"
        viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
      {showText && <div className={styles.tooltip}>{text} </div>}
    </div>
  );
}

export default ToolTip;
