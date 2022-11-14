import Contact from "components/Contact";
import Differences from "components/Differences";
import Divider from "components/Divider";
import Faq from "components/Faq";
import Footer from "components/Footer";
import HeroCard from "components/HeroCard";
import Navbar from "components/Navbar";
import Section from "components/Section";
import Slider from "components/Slider";
import Testimonials from "components/Testimonials";
import Why from "components/Why";
import Head from "next/head";

export default function HomePage() {
  return (
    <div className="font-light">
      <Head>
        <title>Pole Pole</title>
        <meta
          name="description"
          content="Bienvenidos a una revolucionaria nueva forma de seguir educando a tus hijos mientras se lo pasan bien y disfrutan, en un entorno de naturaleza, y sin tecnología de por medio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <HeroCard />

      <Why />

      <Divider />

      <Section />

      <Slider />

      <Divider />

      <Differences />

      <Divider />

      <Testimonials />

      <Faq />

      <Contact />

      <Divider />

      <Footer />
    </div>
  );
}
