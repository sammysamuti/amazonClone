import "./App.css";
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Header from "./Components/Header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <CarouselEffect />
    </div>
  );
}

export default App;
