import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import banana from "./assets/banana1.jpg";
import strawberry from "./assets/strawberry.svg";
import apple from "./assets/apple.svg";
import avocado from "./assets/avocado.svg";
import grapes from "./assets/grapes.svg";
import pear from "./assets/pear.jpg";
import pineapple from "./assets/pineapple.svg";
import blueberry from "./assets/blueberry.svg";
import Products from "./components/products/Products";
import "./scss/main.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";



export default class App extends Component {
  state = {
    products: [
      { name: "Banan", id: 1, image: banana, price: 23, unit: "kg", count: 0 },
      {
        name: "Jordgubbar",
        id: 2,
        image: strawberry,
        price: 99,
        unit: "kg",
        count: 0,
      },
      {
        name: "Ananas",
        id: 3,
        image: pineapple,
        price: 15,
        unit: "st",
        count: 0,
      },
      {
        name: "Blåbär",
        id: 4,
        image: blueberry,
        price: 45,
        unit: "kg",
        count: 0,
      },
      {
        name: "Avokado",
        id: 5,
        image: avocado,
        price: 10,
        unit: "st",
        count: 0,
      },
      { name: "Äpple", id: 6, image: apple, price: 24.9, unit: "kg", count: 0 },
      {
        name: "Vindruvor grön",
        id: 7,
        image: grapes,
        price: 30,
        unit: "kg",
        count: 0,
      },
      { name: "Päron", id: 8, image: pear, price: 23, unit: "kg", count: 0 },
    ],
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <main className="allFruits">
                <Products products={this.state.products} />
              </main>
            )}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}
