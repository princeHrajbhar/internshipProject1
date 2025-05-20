import Image from "next/image";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Hero2 from "@/components/Hero2"
import ProductDetail from "@/components/ProductDetail";
import ListPage from "@/components/ListPage";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Hero2/>
    <div className="pt-30 mx-5">
    <ProductDetail/>
 <div className="my-20">
     
    <ListPage/>
 </div>
    </div>
    </div>
  );
}
