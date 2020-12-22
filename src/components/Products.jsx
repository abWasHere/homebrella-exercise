import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class Products extends Component {
	render() {
		const { products, handleDelete } = this.props;
		return (
			<div>
				<h2>Products List</h2>
				<ul>
					{products.map((product) => (
						<li key={product.id}>
							<p>product : {product.name}</p>
							<p>price : {product.price}</p>
							<Button
								variant="primary"
								type="submit"
								onClick={() => handleDelete(product)}
							>
								Delete item
							</Button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Products;
