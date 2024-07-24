import Hero from "@/components/Hero";
import NewCollection from "@/components/NewCollection";
import OurProduct from "@/components/OurProduct";
import Newest from "@/components/Newest";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'


export default async function Home() {


  return (
    <>

      <Hero />
      <OurProduct />
      <NewCollection />
      <Newest />
      <Footer />

    </>

  );
}
