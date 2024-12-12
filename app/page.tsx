import Country from "@/components/Country";
import Download from "@/components/Download";
import Feature from "@/components/Feature";
import Header from "@/components/Header";



export default function Home() {
  return (
    <main className="maxContainer">
    
      <Header/>
      <Download/>
      <Feature/>
      <Country/>
    </main>
  );
}
