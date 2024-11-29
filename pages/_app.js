import "../styles/globals.css";
// import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      {/* <SimpleReactLightbox> */}
      <Component {...pageProps} />
      {/* </SimpleReactLightbox> */}
    </div>
  );
}

export default MyApp;
