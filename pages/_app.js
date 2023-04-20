import "@/styles/globals.css";
import Nav from "@/comps/Nav";
import Footer from "@/comps/Footer";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
