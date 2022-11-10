import EventItem from "../components/EventItem";
import {API_URL} from "../config/index"
import Pubs from "../components/Pubs"

export default function Home({events}) {
  
  return (
    <>
      <section className="container px-4 mx-auto">
      <Pubs />
      <h1 class="font-medium font-zen-antique-soft justify-center leading-tight text-4xl mt-12 -mb-20 lg:mb-2 text-blue-800">upcoming events:</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

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
