import Link from "next/link";
import Image from "next/image";

export default function EventItem({ evt }) {
  return (
    <>
      <div
        role="status"
        class="space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center p-2"
      >
        <div class="flex justify-center items-center w-full h-48 bg-gray-200 rounded sm:w-96 object-cover">
          <Image
            src={evt.image ? evt.image : "/image/default.png"}
            className="object-cover w-full h-48"
            width={100}
            height={100}
            alt="default"
          />
        </div>
        <div class="w-full">
          <div class="h-2.5 rounded-full lg:w-1/2 mb-4 break-all">{evt.name}</div>
          <div class="h-2 max-w-[480px] mb-2.5">
            {evt.date} - {evt.time}
          </div>
          <div class="h-2 my-6 mb-2.5">{evt.description}</div>
          
          <div class="h-2 max-w-[440px] mb-2.5"></div>
          <div class="h-2 max-w-[460px] mb-2.5"></div>
          <div class="h-2 max-w-[360px]"></div>
        </div>
      </div>
    </>
  );
}
