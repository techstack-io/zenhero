import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function Nav() {
  return (
    <>
      <Navbar fluid={true} rounded={false} className="bg-gray-900">
        <Navbar.Brand href="/">
          <img
            src="img/logo-6.svg"
            className="inline-block p-4"
            alt="image"
            loading="lazy"
            width="125"
            height="125"
          />
          <span className="lg:font-titan-one lg:text-5xl text-gray-200 font-titan-oneself-center whitespace-nowrap text-xl">
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
