

export default function Pubs() {
  return (
    <>
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <div className="relative bg-pure-blue border-4 border-pure-blue">
              <div className="h-56 bg-white sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                  className="h-full w-full object-cover"
                  src="img/articles-img.svg"
                  alt=""
                />
              </div>
              <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                  <h2 className="text-lg font-semibold text-gray-300">
                    Insightful Articles
                  </h2>
                  <p className="font-barlow-condensed mt-2 text-3xl tracking-normal lg:leading-normal text-white sm:text-4xl">
                    Sign Up For <em>Insightful Articles</em> 
                  </p>
                  <p className="mt-3 text-lg text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    egestas tempus tellus etiam sed. Quam a scelerisque amet
                    ullamcorper eu enim et fermentum, augue. Aliquet amet
                    volutpat quisque ut interdum tincidunt duis.
                  </p>
                  <div className="mt-8">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        Visit the help center
                        {/* <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
    </>
  )
}
