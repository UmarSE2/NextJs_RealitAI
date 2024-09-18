import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logoLight from "../../../public/images/logo-light.png";
import logo from "../../../public/images/logo/LogoName.png";
import LogoBg from "../../../public/images/logo/LogoBg.png";

const FooterFour = () => {
  const currentYear = new Date().getFullYear();

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-four-light") {
    logoSrc = logoLight;
  }

  if (router.pathname === "/index-five-light") {
    logoSrc = logoLight;
  }

  return (
    <footer className="section footer-four pb-0" style={{ backgroundColor: "#17313b" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-four__content">
              <div className="intro text-center">
                <h2 className="light-title text-uppercase title-anim">
                  Let&apos;s make some magic ✨ happen and show the world what
                  your brand is all about!
                </h2>
              </div>
              <div className="row justify-content-center cta-t section__content-cta">
                <div className="col-12 col-md-8">
                  <h3>
                    <Link href="contact-us">
                      Let&apos;s Talk
                      <i className="fa-regular fa-comment-dots"></i>
                    </Link>
                  </h3>
                  <p style={{ color: "#fff" }}>Let&apos;s make your brand the talk of the town</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center copy-t gaper section__content-cta">
          <div className="col-12 col-lg-6">
            <ul className="justify-content-center justify-content-lg-start">
              <li>
                <Link href="https://www.linkedin.com/" target="_blank">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/" target="_blank">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-end">
              <Link
                href="mailto:hello@website.com"
                className="text-capitalize"
              >
                hello@website.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-three__copyright mt-0" style={{ backgroundColor: "#6ccdac" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright">
                <div className="row align-items-center gaper">
                  <div className="col-12 col-lg-8">
                    <div className="footer__copyright-text text-center text-lg-start">
                      <p style={{ color: "white" }}>
                        Copyright &copy;{" "}
                        <span id="copyYear">{currentYear}</span> RealitAI. All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="text-center text-lg-end">
                      <Link href="/" aria-label="go to home" style={{ alignItems: "center" }}>
                        <Image src={LogoBg} priority alt="Image" width={150} height={60} style={{ marginLeft: "30px" }} />
                        <Image src={logo} priority alt="Image" width={180} height={0} style={{ marginLeft: "-100px" }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
