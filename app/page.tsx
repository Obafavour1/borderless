import Country from "@/components/Country";
import Download from "@/components/Download";
import Feature from "@/components/Feature";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="maxContainer">
      {/* <Navbar/> */}
      <Header/>
      <Download/>
      <Feature/>
      <Country/>
    </main>
  );
}
