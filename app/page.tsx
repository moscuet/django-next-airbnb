import Image from "next/image";
import Catagories from "./components/Catagories";
import PropertieList from "./components/properties/PropertieList";

export default function Home() {
  return (
    <main className="px-5 mt-[92px] sm:mt-[254px] lg:mt-[242px] xl:mt-[178px]  sm:px-[40px] 3xl:px-[80px] max-w-[1680px]">
      <div>
        <Catagories />
        <PropertieList />
      </div>
    </main>
  );
}
