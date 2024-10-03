import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./pages/Mainpage";
import MiniMap from "./pages/MiniMap";
import GaussianMap from "./pages/GaussianMap";
import Driving from "./pages/Driving";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/minimap" element={<MiniMap />} />
        <Route path="/gaussianmap" element={<GaussianMap />} />
        <Route path="/driving" element={<Driving />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
