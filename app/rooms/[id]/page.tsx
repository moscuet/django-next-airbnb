import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <div className="w-full flex">
        <div className="aspect-3/2 w-full md:w-1/2 rounded-lg relative overflow-hidden">
          <Image
            src="/image/image1.jpeg"
            alt="Image description"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="hidden md:flex flex-wrap w-full md:w-1/2 h-full bg-gray-200">
          <div className="w-1/2 aspect-3/2 rounded-lg relative overflow-hidden">
            <Image
              src="/image/image1.jpeg"
              alt="Image description"
              layout="fill"
              objectFit="cover"
              className="rounded-lg pl-2 pb-2"
            />
          </div>
          <div className="w-1/2 aspect-3/2 rounded-lg relative overflow-hidden">
            <Image
              src="/image/image1.jpeg"
              alt="Image description"
              layout="fill"
              objectFit="cover"
              className="rounded-lg pl-2 pb-2"
            />
          </div>
          <div className="w-1/2 aspect-3/2 rounded-lg relative overflow-hidden">
            <Image
              src="/image/image1.jpeg"
              alt="Image description"
              layout="fill"
              objectFit="cover"
              className="rounded-lg pl-2"
            />
          </div>
          <div className="w-1/2 aspect-3/2 rounded-lg relative overflow-hidden">
            <Image
              src="/image/image1.jpeg"
              alt="Image description"
              layout="fill"
              objectFit="cover"
              className="rounded-lg pl-2"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-5 pr-5 col-span-3">
          <h1 className="mb-1 text-2xl">Entire home in Salo, Finland</h1>

          <span className="mb-4 block text-md text-gray-600">
            6 guests3 bedrooms6 beds2 baths
          </span>

          <div className="py-5 flex items-center space-x-4">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image
                src="/image/image1.jpeg"
                layout="fill"
                objectFit="cover"
                alt="The user name"
              />
            </div>

            <p>
              <strong>Hosted by Josh & Satu</strong>
            </p>
          </div>

          <hr />

          <p className="mt-5 text-lg">
            Vivamus convallis aliquam efficitur. Nulla at purus eget metus
            varius tristique vitae at metus. Mauris vulputate viverra ante.
            Aliquam a auctor diam, ut mollis nisi. Nulla facilisi. Mauris sit
            amet scelerisque ante, id interdum neque. Praesent aliquet erat quis
            est finibus gravida. Pellentesque non tempor quam. Vestibulum sapien
            turpis, fermentum at est ut, maximus suscipit nibh. Maecenas mattis
            mi nisi, ac vulputate tellus gravida et. Vivamus in eros sit amet
            sem luctus sollicitudin quis nec ante. Suspendisse eget orci tellus.
            In in dolor ac nunc porttitor lacinia. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ut
            placerat dui, vitae vestibulum augue. Phasellus maximus magna et
            tincidunt dictum.
          </p>
        </div>

        {/* <ReservationSidebar /> */}
      </div>
    </div>
  );
};

export default Page;
