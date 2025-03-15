import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <Header />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;