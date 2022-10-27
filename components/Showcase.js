

export default function Showcase() {
  return (
    <>
    <div class="flex h-screen">
  <div class="flex-1 flex flex-col overflow-hidden">
    <header class="flex justify-between items-center p-8">
    </header>
    <div class="flex h-full">
      <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
        <div class="flex lg:w-3/4 mx-auto px-6 py-8">
          <div class="flex flex-col w-full h-full">
          <div className="relative bg-gray-800">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="img/zenbt.svg"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300">Award winning support</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
          <p className="mt-3 text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Visit the help center
             
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>


    </>
  )
}
