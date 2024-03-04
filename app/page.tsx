import Image from "next/image";
import Catagories from "./components/Catagories";
import PropertieList from "./components/properties/PropertieList";

export default function Home() {
  return (
      <div>
        <Catagories />
        <PropertieList />
      </div>
  );
}
