import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class ProductsForm extends Component {
	state = {
		price: "",
		prodName: "",
	};

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	render() {
		const { price, prodName } = this.state;
		return (
			<div>
				<Form
					onSubmit={(evt) => {
						evt.preventDefault();
						this.props.handleSubmit(price, prodName);
					}}
				>
					<Form.Group controlId="">
						<Form.Label>Product Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter name"
							onChange={this.handleChange}
							name="prodName"
							value={prodName}
						/>
					</Form.Group>
					<Form.Group controlId="">
						<Form.Label>Product Price</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter price"
							onChange={this.handleChange}
							name="price"
							value={price}
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default ProductsForm;
