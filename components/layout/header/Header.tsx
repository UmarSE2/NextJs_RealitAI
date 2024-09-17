import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo/LogoName.png";
import logoLight from "../../../public/images/logo/CompleteLogo.png";
import LogoBg from "../../../public/images/logo/LogoBg.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar secondary--navbar";

  const combinedClasses = `${scrolled ? " navbar-active" : " "
    } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-light") {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home" style={{ alignItems: "center" }}>
                      <Image src={LogoBg} priority alt="Image" width={150} height={60} style={{ marginLeft: "30px" }} />
                      <Image src={logoSrc} priority alt="Image" width={180} height={0} style={{ marginLeft: "-100px" }} />
                    </Link>
                  </div>
                  <div className="navbar__options">
                    <button
                      className="open-offcanvas-nav d-flex"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleNav}
                    ></button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default Header;
