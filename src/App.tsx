import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/products/Products";
import ExclusiveSection from "./components/ExclusiveSection/ExclusiveSection";
import Testimonials from "./components/Testimonial/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <Header />
          <Products />
        </main>
        < ExclusiveSection />
        < Testimonials />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;