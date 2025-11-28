import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Content from "./Components/content";

function App() {
  const data = {
    name: "mahintha",
    age: "30",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/about" element={<About data={data} />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
