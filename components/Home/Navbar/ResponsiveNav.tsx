"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleOpenMobileNav = () => {
    setShowNav(true);
  };
  const handleCloseMobileNav = () => {
    setShowNav(false);
  };
  return (
    <div>
      <Nav handleOpenMobileNav={handleOpenMobileNav} />
      <MobileNav
        showNav={showNav}
        handleCloseMobileNav={handleCloseMobileNav}
      />
    </div>
  );
};

export default ResponsiveNav;
