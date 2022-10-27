export default function EventsPage() {
    return (
      <>
        <section class="relative pt-16">
          <div class="container mx-auto">
            <div class="flex flex-wrap items-center">
              <div class="lg:w-1/4 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg border rounded-2xl">
                  <center>
                    <img
                      src="img/events-img.svg"
                      className="inline-block rounded-t-2xl w-1/2 p-4 lg:p-6"
                      alt="image"
                      loading="lazy"
                    />
                  </center>
                  <hr />
                  <blockquote class="relative p-8 mb-4">
                    <h4 class="text-xl text-black-900">Check Out Our Events!</h4>
                    <p class="text-md font-light mt-2 text-black">
                      Putting together a page has never been easier than matching
                      together pre-made components. From landing pages
                      presentation to login areas, you can easily customise and
                      built your pages.
                    </p>
                  </blockquote>
                </div>
              </div>
  
              <div class="w-full md:w-6/12 px-4">
                <div class="flex flex-wrap">
                  <div class="w-full md:w-6/12 px-4">
                    <div class="relative flex flex-col mt-4">
                      <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="red"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                            />
                          </svg>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold">
                          Insight Meditation
                        </h6>
                        <p class="mb-4 text-blueGray-500">
                          Notus JS comes with a huge number of Fully Coded CSS
                          components.
                        </p>
                      </div>
                    </div>
                    <div class="relative flex flex-col min-w-0">
                      <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i class="fas fa-drafting-compass"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold">
                          JavaScript Components
                        </h6>
                        <p class="mb-4 text-blueGray-500">
                          We also feature many dynamic components for React,
                          NextJS, Vue and Angular.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-6/12 px-4">
                    <div class="relative flex flex-col min-w-0 mt-4">
                      <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i class="fas fa-newspaper"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold">
                          Tonglen Meditation
                        </h6>
                        <p class="mb-4 text-blueGray-500">
                          This extension also comes with 3 sample pages. They are
                          fully coded so you can start working instantly.
                        </p>
                      </div>
                    </div>
                    <div class="relative flex flex-col min-w-0">
                      <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i class="fas fa-file-alt"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold">Documentation</h6>
                        <p class="mb-4 text-blueGray-500">
                          Built by developers for developers. You will love how
                          easy is to to work with Notus JS.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  