import Link from 'next/link'
import { Navbar } from "flowbite-react";

export default function Nav() {
    return (
      <>
      <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
  <img
            src="img/logo-4.svg"
            className="inline-block p-2"
            alt="image"
            loading="lazy"
            width="100"
            height="100"
          />
    <span className="lg:font-titan-one lg:text-5xl text-pure-blue font-titan-oneself-center whitespace-nowrap text-xl font-semibold dark:text-white">
      ZEN HERO
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
        
      </>
    );
  }
  