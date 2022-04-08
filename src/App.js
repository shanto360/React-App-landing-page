import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Features from "./Components/Features/Features";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Pricing from "./Components/Pricing/Pricing";
import Review from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer"
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/features" element={<Features></Features>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
