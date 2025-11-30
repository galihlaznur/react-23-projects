import React, { useLayoutEffect, useState } from "react";

const getWindowSize = () => {
  // Cek apakah kita ada di browser (bukan server)
  if (typeof window !== "undefined") {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  return { width: 0, height: 0 }; // Safe fallback kalau di server
};

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowResize;
