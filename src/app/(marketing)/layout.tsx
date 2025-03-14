import React, { ReactNode } from "react";
import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
      <Navbar />
      asdf
      {children}
    </div>
  );
};

export default MarketingLayout;
