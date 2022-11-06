import Link from "next/link";
import Image from "next/image";

export default function EventItem({ evt }) {
  return (
    <>
      <div role="status" className="space-y-8 my-16 md:space-y-0 md:space-x-8 md:flex md:items-center">
        <div class="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
          <Image
            src={evt.img ? evt.img : "/img/default.png"}
            width={100}
            height={100}
            alt="default"
          />
        </div>
        <div class="w-full">
          <div class="font-zen-antique-soft font-bold h-2.5 w-full mb-4">
              {evt.name}
          </div>
          <div class="h-2 max-w-[480px] mb-2.5">
              {evt.description}
          </div>
          <div class="h-2 mb-2.5"></div>
          <div class="h-2 max-w-[440px] mb-2.5"></div>
          <div class="h-2 max-w-[460px] mb-2.5"></div>
          <div class="h-2 max-w-[360px]"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </>
  );
}
