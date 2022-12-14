import Link from "next/link";
import { Navbar } from "flowbite-react";
import Dropdown from "../components/Dropdown"

export default function Nav() {
  return (
    <>
      <Navbar fluid={true} rounded={false} className="shadow-md">
        <Navbar.Brand href="/">
          <img
            src="img/logo-6.svg"
            className="inline-block p-4"
            alt="image"
            loading="lazy"
            width="125"
            height="125"
          />
          <span className="lg:font-titan-one lg:text-5xl text-pure-blue font-titan-oneself-center whitespace-nowrap text-xl">
            ZEN HERO
          </span>
          <Dropdown />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/meditations">Meditations</Navbar.Link>
          <Navbar.Link href="/articles">Articles</Navbar.Link>
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          <Navbar.Link href="/navbar">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
