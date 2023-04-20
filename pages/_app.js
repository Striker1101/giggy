import "@/styles/globals.css";
import Nav from "@/comps/Nav";
import Footer from "@/comps/Footer";
export default function App({ Component, pageProps }) {
  return (
    <div class="wrapper">
      <nav class="nav">
        <Nav />
      </nav>
      <main class="main">
        <Component {...pageProps} />
      </main>
      <footer class="footer">
        <Footer />
      </footer>
    </div>
  );
}
