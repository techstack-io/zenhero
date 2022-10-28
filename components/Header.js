import Link from "next/link";
import Nav from "./Nav";


export default function Header() {
  return (
    <>
      <section>
        <title>Zen Hero</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Titan+One&Signika+Negative:wght@300&Barlow+Condensed:wght@300&display=swap" rel="stylesheet" />
        <script src="../path/to/flowbite/dist/flowbite.js"></script>
        <meta name="description" content="Find your inner Zen Hero" />
        <meta
          name="keywords"
          content="zen, meditation, peace, pray, meditate"
        />
      </section>
      <header>
        <Nav />
      </header>
    </>
  );
}
