import Image from "next/image";
import Catagories from "./components/Catagories";
import PropertieList from "./components/properties/PropertieList";

export default function Home() {
  return (
    <main style={{border:'2px solid green'}} className="px-5 mt-[80px] sm:mt-[222px] lg:mt-[148px] sm:px-[40px] 3xl:px-[80px] max-w-[1680px]">
     <div>
     <Catagories />
       <PropertieList/>
     </div>
    </main>
  );
}
