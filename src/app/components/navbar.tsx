import React from "react";

const Navbar = () => {
  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex w-full h-16 items-center px-4">
          {/* <TeamSwitcher />
          <MainNav className="mx-6" /> */}
          <h1 className="text-3xl font-bold tracking-tight">TTCC</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
