import Collections from "@/components/Collections";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src={"/freya_banner.png"}
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen h-[90%]"
      />
      <Collections/>
      <ProductList/>
    </>
  );
}

export const dynamic = "force-dynamic"
