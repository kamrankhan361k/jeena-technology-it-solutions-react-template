import { stickyNav } from "@/src/utils";
import { useEffect } from "react";
import DefaultHeader from "./DefaultHeader";
import Header1 from "./Header1";
import Header3 from "./Header3";
import Header4 from "./Header4";
const Header = ({ header }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <Header1 />;
    case 3:
      return <Header3 />;
    case 4:
      return <Header4 />;

    default:
      return <DefaultHeader />;
  }
};
export default Header;
