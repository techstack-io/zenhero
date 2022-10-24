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
                <h1 className="lg:text-4xl text-left text-2xl font-titan-one text-pure-blue">
                  Transforming The Mind
                </h1>
                <br />
                <p>
                  At the core of Buddhism are The Four Noble Truths: suffering
                  exists, there is a cause of suffering, there is an end to
                  suffering, and there is a path that leads to the end of
                  suffering.
                  <br />
                  <br />
                  There are many Buddhist sects that exist, but the one we will
                  concentrate on is Mahayana Buddhism. Unlike other Buddhists,
                  Mahayana followers look to liberate themselves from suffering
                  as well as lead other people toward liberation and
                  enlightenment. Lojong is a set of techiniques for training the
                  mind. These techniques are designed to open our hearts and
                  awaken our minds. There are fifty nine slogans and they offer
                  us a lot of help in transcending our egotism and putting down
                  the baggage we are carrying. The fifty nine slogans have been
                  used by Tibetan Buddhists for centuries in order to help
                  Buddhist practitioners focus on what’s important in our
                  efforts to train and tame our minds. Sometimes on the Buddhist
                  path we can tend to forget why we’re doing this and what’s
                  important.
                </p>
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
