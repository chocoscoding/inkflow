import React, { useState, useEffect, MouseEvent, useCallback } from "react";

interface RippleProps {
  children: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  backgroundColor?: string;
  className?: string;
}

const Ripple: React.FC<RippleProps> = ({ children, backgroundColor, className }) => {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRippling) {
      setCoords({ x: -1, y: -1 });
    }
  }, [isRippling]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("a1");
    const rect = event.currentTarget.getBoundingClientRect();
    setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const mainBg = useCallback(() => {
    if (backgroundColor) return backgroundColor;
    if (className) return undefined;
    return "#ffffff26";
  }, [backgroundColor, className]);

  return (
    <span
      className="ripple-button"
      onClick={handleClick}>
      {isRippling ? (
        <span
          className={`ripple ${className || ''}`}
          style={{
            backgroundColor: mainBg(),
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </span>
  );
};

export default Ripple;
