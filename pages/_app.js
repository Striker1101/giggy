import "@/styles/globals.css";
import Nav from "@/comps/Nav";
import Footer from "@/comps/Footer";
export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <div className="wrapper">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
