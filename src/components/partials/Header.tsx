import React from "react";
import Logo from "../shared/Logo";

const Header = () => {
  return (
    <React.Fragment>
      <header className="w-full">
        <div className="container mx-auto h-[var(--height-header)] flex items-center justify-between gap-6">
          <Logo />
          <div className="flex flex-1">123</div>
          <div>addad</div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default React.memo(Header);
