import Link from "next/link";
import Image from "next/image";

export default function EventItem({ evt }) {
  return (
    <>
      <div role="status" className="space-y-8 my-28 lg:my-16 md:space-y-0 md:space-x-8 md:flex md:items-center">
        <div class="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
          <Image
            src={evt.image ? evt.image : "/image/default.png"}
            width={100}
            height={100}
            alt="default"
          />
        </div>
        <div class="w-full">
          <div class="font-zen-antique-soft font-bold h-2.5 w-full mb-4">
              {evt.name} 
          </div>
          <div className="whitespace-nowrap text-left text-sm text-gray-500">
                    <time dateTime={evt.date}>{evt.time}</time>
                  </div>
          <div class="h-2 max-w-[480px] mb-2.5">
              {evt.description}
          </div>

        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </>
  );
}
