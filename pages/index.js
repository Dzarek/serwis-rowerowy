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

// export default function Home({ thumbnails }) {
export default function Home() {
  // console.log(thumbnails);
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
      {/* <Footer thumbnails={thumbnails} /> */}
    </>
  );
}
// export async function getStaticProps() {
//   const response = await fetch(
//     "https://data.focuseye.pl/wp-json/wp/v2/media?media_folder=59&per_page=100"
//   );
//   const data = await response.json();
//   const thumbnails = data.map((image) => {
//     const smallImg = image.media_details.sizes.full.source_url;
//     return smallImg;
//   });

//   return {
//     props: {
//       thumbnails,
//     },
//   };
// }
