import { useState, useEffect } from "react";

function useWindowHeight() {
  const [WindowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function setSize() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, [WindowHeight,setWindowHeight]);
  return WindowHeight;
}

export default useWindowHeight;
