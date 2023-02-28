import "./home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}
