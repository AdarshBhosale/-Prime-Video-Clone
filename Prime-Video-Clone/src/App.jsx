import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LiveTv from "./pages/LiveTv";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import Header from "./components/header/header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/live-tv" element={<LiveTv />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
