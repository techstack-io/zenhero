import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function Nav() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="img/logo-5.svg"
            className="inline-block"
            alt="image"
            loading="lazy"
            width="125"
            height="125"
          />
          <span className="lg:font-titan-one lg:text-5xl text-pure-blue font-titan-oneself-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ZEN HERO
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/articles">Articles</Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
