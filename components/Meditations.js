import Link from "next/link";
import Image from "next/image";

export default function Meditations() {
  return (
    <>
      <div className="lg:flex flex-row lg:gap-12 py-24 lg:px-48">
      <div className="">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <video
                  className="lg:mx-2 lg:w-full rounded-lg border"
                  // autoPlay
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
        </div>
    </>
  )
}
