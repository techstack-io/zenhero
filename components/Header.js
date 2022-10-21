import Link from 'next/link';

export default function Header() {
    return(
        <>
        <section>
        <title>Zen Hero</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500&display=swap" rel="stylesheet" />
        <meta name='description' content='Find your inner Zen Hero' />
        <meta name='keywords' content='zen, meditation, peace, pray, meditate' />
      </section>
        <header>
        <h2 class="text-blue-bayou mb-4 text-6xl md:text-7xl text-3xl text-center font-heading font-dosis tracking-px-n">
          <img
            src="img/zenherologo-2.svg"
            className="inline-block p-6"
            alt="image"
            loading="lazy"
            width="125"
            height="125"
          />
          Become a Zen Hero
        </h2>
        <hr />
        </header>
        </>
    );
};

