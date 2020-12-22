import "./App.css";
import React, { Component } from "react";
import Products from "./components/Products";
import Form from "./components/Form";
const ids = require("short-id");

export class App extends Component {
	state = {
		products: [],
	};

	handleSubmit = (price, name) => {
		let id = ids.generate();
		const newProducts = [...this.state.products, { id, price, name }];
		this.setState({ products: newProducts });
	};

	handleDelete = (deleteItem) => {
		const cleanProducts = this.state.products.filter(
			(product) => product.id !== deleteItem.id
		);
		this.setState({ products: cleanProducts });
	};

	render() {
		return (
			<div className="App">
				<hr />
				<Products
					products={this.state.products}
					handleDelete={this.handleDelete}
				/>
				<hr />
				<Form handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default App;
