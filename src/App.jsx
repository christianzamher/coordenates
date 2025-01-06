import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RoutePlanner } from "./components/RoutePlanner";
import { Header } from "./components/Header";
import { Footer } from "./components/UI/Footer";
import { About } from "./components/About";
import { AboutRuta } from "./components/AboutRuta";

function App() {
  return (
    
      <>
        <Header />
        <Routes>
          <Route path="/" element={<RoutePlanner />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructions" element={<AboutRuta />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        {/* <Footer /> */}
      </>
    
  );
}

export default App;
