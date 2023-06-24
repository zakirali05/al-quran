import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Chapter from "../src/pages/Chapter";
import Verse from "../src/pages/Verse";
import Range from "../src/pages/Range";
import Word from "../src/pages/Word";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter" element={<Chapter />} />
          <Route path="/verse" element={<Verse />} />
          <Route path="/range" element={<Range />} />
          <Route path="/word" element={<Word />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
