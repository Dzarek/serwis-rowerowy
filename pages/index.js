import fsPromises from "fs/promises";
import path from "path";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BikeService from "../components/BikeService";
import SkiService from "../components/SkiService";
// import Accesories from "../components/Accesories";
import AboutUs from "../components/AboutUs";
import Workout from "../components/Workout";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home({ przegladRower }) {
  // export default function Home() {
  console.log(przegladRower);
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
      <BikeService przegladRower={przegladRower} />
      <SkiService />
      {/* <Accesories /> */}
      <AboutUs />
      <Workout />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  let data;
  let przegladRower;
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData);

  try {
    const res = await fetch(
      "https://rowery-9b90a-default-rtdb.europe-west1.firebasedatabase.app/.json"
    );
    data = await res.json();
  } catch (error) {
    data = localData;
  }

  if (data && data.przegladRower) {
    przegladRower = data.przegladRower;
  } else {
    przegladRower = localData.przegladRower;
  }

  return {
    props: {
      przegladRower,
    },
    revalidate: 60,
  };
}
