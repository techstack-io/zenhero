import EventItem from "../components/EventItem";
import Link from "next/link";
import { API_URL } from "../config/index";

export default function Home({ events }) {
  return (
    <>
      <section className="container px-2 lg:my-12 mx-auto">
        <section className="bg-transparent">
          <div className="items-center mx-auto my-10 lg:-my-20 max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              src="img/zhhero.svg"
              className="w-full lg:p-0 "
              alt="image"
              loading="lazy"
              width="100"
              height="100"
            />
            <section class="">
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@company.com"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="confirm-password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Confirm password
                        </label>
                        <input
                          type="confirm-password"
                          name="confirm-password"
                          id="confirm-password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            aria-describedby="terms"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            for="terms"
                            className="font-light text-gray-500 dark:text-gray-300"
                          >
                            I accept the{" "}
                            <a
                              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                              href="#"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Create an account
                      </button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?
                        <Link legacyBehavior href="/account/login">
                          <a className="font-medium text-primary-600 hover:underline">
                            {" "}
                            Login here
                          </a>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                Are you ready to start your meditation journey?
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Flowbite helps you connect with friends and communities of
                people who share your interests. Connecting with your friends
                and family as well as discovering new ones is easy with features
                like Groups.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <div className="lg:flex flex-row lg:gap-12 py-24">
          <div className="">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <video
                  classNameName="lg:mx-2 lg:w-full rounded-lg border"
                  autoplay
                  controls
                >
                  <source src="/img/graditude.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </a>
              <hr />
              <div className="p-6">
                <h5 className="text-xl font-medium mb-2">Mind Consciousness</h5>
                <p className="text-gray-700 text-base mb-4">
                  The first kind of consciousness. It uses up most of our
                  energy. Mind consciousness is our “working” consciousness...
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
                  Consciousness that comes from our five senses: sight, hearing,
                  taste, touch, and smell...
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
                <h5 className="text-xl font-medium mb-2">
                  Store Consciousness
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  The first kind of consciousness. It uses up most of our
                  energy. Mind consciousness is our “working” consciousness...
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
                <h5 className="text-xl font-medium mb-2">
                  Manas Consciousness
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Manas arises from store consciousness and takes a part of
                  store consciousness to be the object of its love, the object
                  of itself.
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
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
