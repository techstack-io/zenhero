import EventItem from "../components/EventItem";
import {API_URL} from "../config/index"

export default function Home({events}) {
  
  return (
    <>
      <section className="container px-2 lg:my-12 mx-auto">
      <section class="bg-white dark:bg-gray-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <video className="lg:mx-2 lg:w-full rounded-lg border" autoplay controls>
  <source src="/img/consciousness2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Are you ready to start your meditation journey?</h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
            <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>
      
        <div className="lg:flex flex-row lg:gap-12 py-24">
          <div className="">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  src="img/icon-1.svg"
                  className="w-full p-20"
                  alt="image"
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </a>
              <hr />
              <div className="p-6">
                <h5 className="text-xl font-medium mb-2">Mind Consciousness</h5>
                <p className="text-gray-700 text-base mb-4">
                The first kind of consciousness. It uses up most of our
                energy. Mind consciousness is our “working”
                consciousness...
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
          {/* Sense Consciousness */}
          <div className="">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  src="img/icon-2.svg"
                  className="w-full p-20"
                  alt="image"
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </a>
              <hr />
              <div className="p-8">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Sense Consciousness
                </h5>
                <p className="text-gray-700 text-base mb-4">
                Consciousness that comes from our five senses: sight,
                hearing, taste, touch, and smell...
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  src="img/icon-3.svg"
                  className="w-full p-20"
                  alt="image"
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </a>
              <hr />
              <div className="p-6">
                <h5 className="text-xl font-medium mb-2">Store Consciousness</h5>
                <p className="text-gray-700 text-base mb-4">
                The first kind of consciousness. It uses up most of our
                energy. Mind consciousness is our “working”
                consciousness...
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
          {/* Manas Consciousness */}
          <div className="">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  src="img/icon-4.svg"
                  className="w-full p-20"
                  alt="image"
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </a>
              <hr />
              <div className="p-6">
                <h5 className="text-xl font-medium mb-2">Manas Consciousness</h5>
                <p className="text-gray-700 text-base mb-4">
                Manas arises from store consciousness and takes a part of store consciousness to be the object of its love, the object of itself.
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: {events},
  }
}
