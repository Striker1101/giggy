import "@/styles/globals.css";
import Nav from "@/comps/Nav";
import Footer from "@/comps/Footer";
export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="nav">
          <Nav />
        </div>
        <Component {...pageProps} />
        <div className="fotter">
          <Footer />
        </div>
      </div>
    </div>
  );
}
