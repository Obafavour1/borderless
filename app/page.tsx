import Banking from "@/components/Banking";
import Country from "@/components/Country";
import Download from "@/components/Download";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import More from "@/components/More";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <main className=" relative maxContainer">
      <Navbar/>
      <Header/>
      <Download/>
      <Feature/>
      <Country/>
      <More/>
      <Banking/>
      <Footer/>
    </main>
  );
}
