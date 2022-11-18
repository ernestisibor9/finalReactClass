import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { createStore } from "redux";
import { Provider } from "react-redux";

import "./components/style.css";
import itemReducer from "./reducers/itemReducer";
import SingleItem from "./components/SingleItem";

function App() {
  const store = createStore(itemReducer);
  return (
    <BrowserRouter>
      <div>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="single-product/:name" element={<SingleItem />} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
