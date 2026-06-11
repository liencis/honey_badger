import hexa from "./assets/hexa.svg";
import hexaHoney from "./assets/hexaHoney.svg";
import { useEffect, useState } from "react";

function DoubleClickButton() {
  const [isHoney, setIsHoney] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (clickCount === 2) {
      setIsHoney(true);
      doDoubleClick();
      setClickCount(0); // Reset click count after double click
    } else if (clickCount === 1) {
      timer = setTimeout(() => {
        doSingleClick();
        setClickCount(0); // Reset click count if second click doesn't happen within the time frame
      }, 200); // Adjust the delay as needed
    }

    return () => clearTimeout(timer);
  }, [clickCount]);

  // Close the custom menu when clicking outside of it
  useEffect(() => {
    const handleClick = () => setVisible(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);


  const doDoubleClick = () => {
    setIsHoney(true);
  }

  const doSingleClick = () => {
    setIsHoney(false);
  }

  const handleRightClick = (e) => {
    e.preventDefault(); // Prevent default behavior (e.g., context menu on right-click)
    setPoints({ x: e.clientX, y: e.clientY }); // get click coordinates
    setVisible(true); // show custom menu
  }

  const handleClick = (e: { preventDefault: () => void; type: string; }) => {
    e.preventDefault(); // Prevent default behavior (e.g., context menu on right-click)
    if (e.type === "click") {
      setClickCount((prev) => prev + 1);
    } else if (e.type === "contextmenu") {
      console.log("Right-click detected"); // Reset click count on right-click
    }
  };

  return (
    <div>
        <p>{isHoney ? "Honey!" : "Click me!"}</p>
        <div className="double-click-button" 
            onContextMenu={handleRightClick}
        >
          {visible && (
            <ul className="custom-menu" 
              style={{ 
                top: points.y, 
                left: points.x,
                position: "absolute",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                listStyle: "none",
                padding: "10px",
                margin: 0,
                boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
              }}
            >
              <li onClick={() => { setIsHoney(true); setVisible(false); }}>Mark as Honey</li>
              <li onClick={() => { setIsHoney(false); setVisible(false); }}>Unmark as Honey</li>
            </ul>
          )}
            <img src={isHoney ? hexaHoney : hexa} alt="Hexa" width="80" height="70"/>
        </div>
    </div>
  );
}   

export default DoubleClickButton;