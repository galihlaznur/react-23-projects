import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ColorGenerator from "./components/color-generator/ColorGenerator";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";

function App() {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const selectedPath = e.target.value;
    navigate(selectedPath);
  };

  return (
    <>
      <nav>
        <select onChange={handleSelectChange}>
          <option value="/">Accordion</option>
          <option value="/color-generator">ColorGenerator</option>
          <option value="/star-rating">StarRating</option>
          <option value="/image-slider">ImageSlider</option>
          <option value="/load-more-data">LoadMoreData</option>
        </select>
      </nav>

      <Routes>
        <Route path="/" element={<Accordion />} />
        <Route path="/color-generator" element={<ColorGenerator />} />
        <Route path="/star-rating" element={<StarRating noOfStars={10} />} />
        <Route
          path="/image-slider"
          element={
            <ImageSlider
              url={"https://picsum.photos/v2/list"}
              page={"1"}
              limit={"10"}
            />
          }
          
        />
        <Route path="/load-more-data" element={<LoadMoreData />} />
      </Routes>
    </>
  );
}

export default App;
