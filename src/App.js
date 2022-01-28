import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Homepage from "./Components/Homepage";
import Article from "./Components/Article";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
