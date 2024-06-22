import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home(){
  return (
    <>
      <Image src={'/freya_banner.png'} alt="banner" width={2000} height={1000} className="w-screen h-[90%]" />
    </>
  );
}