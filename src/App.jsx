import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ColorGenerator from "./components/color-generator/ColorGenerator";
import StarRating from "./components/star-rating/StarRating";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Accordion</Link> | <Link to="/color-generator">ColorGenerator</Link> | <Link to="/star-rating">StarRating</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accordion />} />
        <Route path="/color-generator" element={<ColorGenerator />} />
        <Route path="/star-rating" element={<StarRating />} />
      </Routes>
    </>
  );
}

export default App;
