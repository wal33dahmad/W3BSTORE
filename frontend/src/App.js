import Banner from "./components/Banner";
import Benefit from "./components/Benefit";
import BestSellers from "./components/BestSellers";
import Blogs from "./components/Blogs";
import DealOfWeek from "./components/DealOfWeek";
import MainSlider from "./components/MainSlider";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <MainSlider />
      <Banner />
      <NewArrivals />
      <DealOfWeek />
      <BestSellers />
      <Benefit />
      <Blogs />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
