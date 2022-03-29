import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { connect } from "react-redux";

import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import SingleItem from "./Components/SingleItem/SingleItem";

function App({ current }) {
  return (
    <Router>
      <div className="App">
        {/* <h1>Hello World</h1> */}

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          {/* {true ? (
            <Navigate to="/" />
          ) : (
            <Route exact path="/product/:id" element={<SingleItem />} />
          )} */}
          <Route exact path="/product/:id" element={<SingleItem />} />
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shoppingCartReducer.currentItem,
  };
};

export default connect(mapStateToProps)(App);
