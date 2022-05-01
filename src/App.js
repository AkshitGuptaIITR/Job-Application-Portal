import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route element={<Home />} index />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
