import Header from "../components/Header";

export default function Intro() {
  return (
    <>
      <Header />
      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 grid grid-col-2">
          <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen lg:block" />
          <div class="">
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 ">
              <div class="">
                <h1 className="lg:text-4xl text-left text-2xl text-bold text-pure-blue">
                Transforming The Mind
                </h1>
                <br />
                <p>
                  At the heart of the Zen Hero philosophy is the practice of
                  Mind Training, or <b>Lojong</b>. To understand this form of
                  practice, it's helpful to understand what Mayhayana Buddhism
                  is; afterall, Lojong show us how Mahayana wisdom can truly be
                  realized.
                </p>
                <h3 className="lg:text-xl text-left text-2xl text-bold text-pure-blue pt-4">
                  Mahayana Buddhism
                </h3>
                <p>
                  In the simplist terms, Mahayana Buddhism followers seek to
                  liberate themselves from suffering as well as lead others
                  toward liberation and enlightenment. in contrast, the goal of
                  the Theravada Buddhists is the individual attainment of
                  Enlightenment using Buddhist meditations.
                </p>
                <h3 className="lg:text-xl text-left text-2xl font-titan-one text-pure-blue pt-4">
                  Lojong
                </h3>
                <p>
                Lojong is a set of 59 slogans, or techniques for training the mind. These techniques are
                designed to guide us through every day trials and tribulations. 
                </p>
                <br />
               <p>

               </p>

                Lojong's teachings include teachings on formless meditation, the
                practice of "sending and receiving" (tongle), and
                post-meditation practice - applying our meditation to our daily
                lives. These teachings, attributed to the great 11th-century
                Buddhist master Atisha Dipankara, became widely known after the
                Tibetan teacher Geshe Chekawa organized and condensed them into
                a collection of 59 mind-training sayings or reminders. Often
                referred to simply as the Atisha Slogans, they embody the
                essence of Mahayana practice. The Atisha Slogans are blueprints
                for practicing the bodhisattva path in 59 simple steps. The
                power of slogans is that they violate the Mahayana ideal of
                loving-kindness towards us. Instead of giving general
                instructions on how to be a true practitioner, they describe it
                in detail. They provide specific instructions for both
                approaching meditation and waking up to everyday life. It's easy
                to be vaguely compassionate and generally self-aware, but when
                we really look at what we do and how we interact with others,
                it's a different story. As they say, the devil is in the
                details. At the core of Buddhism are The Four Noble Truths:
                suffering exists, there is a cause of suffering, there is an end
                to suffering, and there is a path that leads to the end of
                suffering.
              </div>
              <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
                Store Consciousness
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
