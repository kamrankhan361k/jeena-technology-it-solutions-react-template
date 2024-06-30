import Link from "next/link";
import { Fragment } from "react";
import HiddenSidebar from "../HiddenSidebar";
import Search from "../Search";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";

const Header3 = () => {
  return (
    <Fragment>
      <header className="main-header header-three menu-white menu-absolute">
        <HeaderTop />
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link legacyBehavior href="/index">
                    <a>
                      <img
                        src="assets/images/logos/logo-two.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer ms-lg-auto clearfix">
                {/* Main Menu */}
                <Menu />
                {/* Main Menu End*/}
              </div>
              {/* Nav Search */}
              <div className="nav-search py-10">
                <Search />
              </div>
              {/* Menu Button */}
              <div className="menu-btns">
                {/* menu sidbar */}
                <div className="menu-sidebar">
                  <button>
                    <span className="toggle-btn" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <HiddenSidebar />
    </Fragment>
  );
};
export default Header3;
