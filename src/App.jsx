import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ColorGenerator from "./components/color-generator/ColorGenerator";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";
import QrCodeGenerator from "./components/qr-code-generator/QrCodeGenerator";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import TabTest from "./components/custom-tabs/TabTest";
import ModalTest from "./components/custom-modal-popup/ModalTest";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import SearchAutocomplete from "./components/search-autocomplete-with-api/SearchAutocomplete";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlag from "./components/feature-flag/FeatureFlag";
import FeatureFlagsProvider from "./components/feature-flag/context/FeatureFlagsProvider";
import UseFetchHookTest from "./components/use-fetch/UseFetchHookTest";
import UseOutsideClickHookTest from "./components/use-outside-click/UseOutsideClickHookTest";
import UseWindowResizeHookTest from "./components/use-window-resize/UseWindowResizeHookTest";
import ScrollToTopBottom from "./components/scroll-to-top-bottom/ScrollToTopBottom";
import ScrollToSection from "./components/scroll-to-section/ScrollToSection";
import Weather from "./components/[21]-weather-app/Weather";
import FoodRecipeLayout from "./components/[22]-food-recipe-app/FoodRecipeLayout";
import HomeFoodRecipe from "./components/[22]-food-recipe-app/pages/Home";
import Favorites from "./components/[22]-food-recipe-app/pages/Favorites";
import Details from "./components/[22]-food-recipe-app/pages/Details";
import FoodRecipeProvider from "./components/[22]-food-recipe-app/context/FoodRecipeProvider";
import ShoppingCartLayout from "./components/[23]-shopping-cart-app/ShoppingCartLayout";
import HomeShoppingCart from "./components/[23]-shopping-cart-app/pages/Home";
import Cart from "./components/[23]-shopping-cart-app/pages/Cart";
import { Provider } from "react-redux";
import store from "./components/[23]-shopping-cart-app/store";

function App() {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const selectedPath = e.target.value;
    navigate(selectedPath);
  };

  return (
    <>
      <nav>
        <select
          className="bg-indigo-100 text-indigo-800 border border-indigo-400 p-2 rounded-md"
          onChange={handleSelectChange}
        >
          <option value="/">Accordion</option>
          <option value="/color-generator">Color Generator</option>
          <option value="/star-rating">Star Rating</option>
          <option value="/image-slider">Image Slider</option>
          <option value="/load-more-data">Load More Data</option>
          <option value="/tree-view">Tree View</option>
          <option value="/qr-code-generator">QR Code Generator</option>
          <option value="/light-dark-mode">Light Dark Mode</option>
          <option value="/scroll-indicator">Scroll Indicator</option>
          <option value="/custom-tabs">Custom Tabs</option>
          <option value="/custom-modal-popup">Custom Modal Popup</option>
          <option value="/github-profile-finder">Github Profile Finder</option>
          <option value="/search-autocomplete-with-api">
            Search Autocomplete With API
          </option>
          <option value="/tic-tac-toe">Tic Tac Toe</option>
          <option value="/feature-flag">Feature Flag</option>
          <option value="/use-fetch">Use Fetch</option>
          <option value="/use-outside-click">Use Outside Click</option>
          <option value="/use-window-resize">Use Window Resize</option>
          <option value="/scroll-to-top-bottom">Scroll To Top/Bottom</option>
          <option value="/scroll-to-section">Scroll To Section</option>
          <option value="/weather-app">Weather App</option>
          <option value="/food-recipe">Food Recipe</option>
          <option value="/shopping-cart">Shopping Cart</option>
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
        <Route path="/tree-view" element={<TreeView menus={menus} />} />
        <Route path="/qr-code-generator" element={<QrCodeGenerator />} />
        <Route path="/light-dark-mode" element={<LightDarkMode />} />
        <Route
          path="/scroll-indicator"
          element={
            <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
          }
        />
        <Route path="/custom-tabs" element={<TabTest />} />
        <Route path="/custom-modal-popup" element={<ModalTest />} />
        <Route
          path="/github-profile-finder"
          element={<GithubProfileFinder />}
        />
        <Route
          path="/search-autocomplete-with-api"
          element={<SearchAutocomplete />}
        />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route
          path="/feature-flag"
          element={
            <FeatureFlagsProvider>
              <FeatureFlag />
            </FeatureFlagsProvider>
          }
        ></Route>
        <Route path="/use-fetch" element={<UseFetchHookTest />} />
        <Route
          path="/use-outside-click"
          element={<UseOutsideClickHookTest />}
        />
        <Route
          path="/use-window-resize"
          element={<UseWindowResizeHookTest />}
        />
        <Route path="/scroll-to-top-bottom" element={<ScrollToTopBottom />} />
        <Route path="/scroll-to-section" element={<ScrollToSection />} />
        <Route path="/weather-app" element={<Weather />} />
        <Route
          path="/food-recipe"
          element={
            <FoodRecipeProvider>
              <FoodRecipeLayout />
            </FoodRecipeProvider>
          }
        >
          <Route index element={<HomeFoodRecipe />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="recipe-item/:id" element={<Details />} />
        </Route>
        <Route
          path="shopping-cart"
          element={
            <Provider store={store}>
              <ShoppingCartLayout />
            </Provider>
          }
        >
          <Route index element={<HomeShoppingCart />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
