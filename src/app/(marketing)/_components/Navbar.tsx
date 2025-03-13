import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link className="text-lg" href="#">
          Features
        </Link>
        <Link className="text-lg" href="/#pricing">
          Pricing
        </Link>
        <Link className="text-1g" href="#">
          About
        </Link>
        <span className="text-lg"></span>
      </nav>
    </header>
  );
};

export default Navbar;
