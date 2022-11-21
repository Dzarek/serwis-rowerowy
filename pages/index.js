import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BikeService from "../components/BikeService";
import SkiService from "../components/SkiService";
// import Accesories from "../components/Accesories";
// import AboutMe from "../components/AboutMe";
import AboutUs from "../components/AboutUs";
import Workout from "../components/Workout";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>VeloWay - Pracownia Rowerów</title>
        <meta
          name="description"
          content="Veloway to przestrzeń w której zajmujemy się kompleksową obsługą waszych rowerów."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Header />
      <Navbar />
      <BikeService />
      <SkiService />
      {/* <Accesories /> */}
      {/* <AboutMe /> */}
      <AboutUs />
      <Workout />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
