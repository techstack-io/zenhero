import Link from "next/link";
import Image from "next/image";

export default function EventItem({ evt }) {
  return (
    <>
      <div
        role="status"
        class="space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center p-2"
      >
        <div class="flex justify-center items-center w-full h-48 bg-gray-200 rounded sm:w-96 object-cover border border-gray">
          <Image
            src={evt.image ? evt.image : "/image/default.png"}
            className="object-cover w-full h-48"
            width={100}
            height={100}
            alt="default"
          />
        </div>
        <div class="w-full p-4">
          <div class="h-2 rounded-full lg:w-2/3 mb-4 break-all font-bold">{evt.name}</div>
          <div class="h-2 max-w-[480px] mb-2.5">
            {evt.date} - {evt.time}
          </div>
          <div class="h-2 my-6 mb-2.5">{evt.description}</div>
          <div class="h-2 max-w-[440px] mb-2.5"></div>
          <div class="h-2 max-w-[460px] mb-2.5"></div>
          <div class="h-8 max-w-[360px] text-lg">Location: {evt.venue} </div>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Details</button>
        </div>
      </div>
      <hr className="p-2"/>
    </>
  );
}
