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

export default function Home({
  imagesRower,
  przegladRower,
  cenyRower,
  cenyNarty,
  treningi,
  blog,
}) {
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
      <BikeService
        przegladRower={przegladRower}
        cenyRower={cenyRower}
        imagesRower={imagesRower}
      />
      <SkiService cenyNarty={cenyNarty} />
      {/* <Accesories /> */}
      <AboutUs />
      <Workout treningi={treningi} />
      <Blog blog={blog} />
      <Contact />
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  let data;
  let imagesRower;
  let przegladRower;
  let cenyRower;
  let cenyNarty;
  let treningi;
  let blog;
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData);

  try {
    const res = await fetch(
      "https://veloway-2bfd1-default-rtdb.europe-west1.firebasedatabase.app/.json"
    );
    data = await res.json();
  } catch (error) {
    data = localData;
  }

  if (data.imagesRower) {
    imagesRower = data.imagesRower;
  } else {
    imagesRower = localData.imagesRower;
  }
  if (data.przegladRower) {
    przegladRower = data.przegladRower;
  } else {
    przegladRower = localData.przegladRower;
  }
  if (data.cenyRower) {
    cenyRower = data.cenyRower;
  } else {
    cenyRower = localData.cenyRower;
  }
  if (data.cenyNarty) {
    cenyNarty = data.cenyNarty;
  } else {
    cenyNarty = localData.cenyNarty;
  }
  if (data.treningi) {
    treningi = data.treningi;
  } else {
    treningi = localData.treningi;
  }
  if (data.blog) {
    blog = data.blog;
  } else {
    blog = localData.blog;
  }

  return {
    props: {
      imagesRower,
      przegladRower,
      cenyRower,
      cenyNarty,
      treningi,
      blog,
    },
    revalidate: 60,
  };
}
