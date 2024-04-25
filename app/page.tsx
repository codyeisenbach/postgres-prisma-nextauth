import CardGrid from "./components/cardGrid";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="min-w-full">
        <Navbar />
      </div>
      <CardGrid number={20} />
    </main>
  );
}
