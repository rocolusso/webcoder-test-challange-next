import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
          <About />
          <Services />
          <Contact />
      </main>
    </>
  );
}
