import { useEffect, useState } from "react";

const useDynamicDisplay = ({
  mobile = 3,
  tablet = 6,
  desktopsm = 9,
  desktopmd = 12,
  other = 15,
}) => {
  const [totalContentShown, setTotalContentShown] =
    useState(totalContentToShow);
  function totalContentToShow() {
    if (window.innerWidth < 768) {
      return mobile;
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      return tablet;
    }
    if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
      return desktopsm;
    }
    if (window.innerWidth >= 1280 && window.innerWidth < 1536) {
      return desktopmd;
    }
    if (window.innerWidth >= 1536) {
      return other;
    }
  }
  useEffect(() => {
    function handleResize() {
      setTotalContentShown(totalContentToShow);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return [totalContentShown];
};

export default useDynamicDisplay;
