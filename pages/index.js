import Head from "next/head";
import Header from "../components/homePage/Header";
import FirstInfo from "../components/homepage/FirstInfo";

export default function Home() {
  return (
    <>
      <Head>
        <title>VeloWay - Pracownia Rowerów</title>
        <meta name="description" content="serwis rowerowy...." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Header />
      <FirstInfo />
    </>
  );
}
