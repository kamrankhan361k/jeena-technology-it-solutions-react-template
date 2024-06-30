import { useLayoutEffect } from "react";
import { scrollTopActive } from "../utils";

const ScrollTopButton = () => {
  useLayoutEffect(() => {
    scrollTopActive();
  }, []);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => scrollTop()}
    >
      <span className="fas fa-angle-double-up" />
    </button>
  );
};
export default ScrollTopButton;
