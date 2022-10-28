const posts = [
  {
    title: "Mindfulness To Reduce Stress",
    href: "#",
    category: {
      name: "Mindfulness",
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "Mindful or conscious breathing is another great way to eliminate stress and tension. Take at least five minutes in a convenient location, like the shower or subway and shift your concentration to breathing in and out. To concentrate during the exercise, you can pick one aspect to focus on.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Dessie Ryan",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "4 min",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: {
      name: "Case Study",
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Easer Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "11 min",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Articles() {
  return (
    <>
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <div className="relative bg-gray-800 rounded-2xl">
              <div className="h-56 bg-white sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                  className="h-full w-full object-cover border-2 rounded-2xl"
                  src="img/articles-img.svg"
                  alt=""
                />
              </div>
              <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                  <h2 className="text-lg font-semibold text-gray-300">
                    Insightful Articles
                  </h2>
                  <p className="font-barlow-condensed mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Sign Up For Our Publications!
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
            <br />

            <h2 className="font-barlow-condensed text-3xl text-gray-800 tracking-tight lg:pt-2 sm:text-4xl">
              Recent Publications
            </h2>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <div>
                  <a href={post.category.href} className="inline-block">
                    <span
                      className={classNames(
                        post.category.color,
                        "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                      )}
                    >
                      {post.category.name}
                    </span>
                  </a>
                </div>
                <a href={post.href} className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
