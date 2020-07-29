import { useState, useEffect } from "react";

function useWindowSize() {
  const [WindowHeight, setWindowHeight] = useState(window.innerHeight);
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function setSize() {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, [WindowHeight,WindowWidth,setWindowHeight,setWindowWidth]);
  return [WindowHeight,WindowWidth];
}

export default useWindowSize;
