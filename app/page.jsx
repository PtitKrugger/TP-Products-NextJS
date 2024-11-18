'use client'
import { useState } from "react";
import { CheckBox } from "./components/forms/Checkbox.jsx";
import { Input } from "./components/forms/Input.jsx";
import { InputRange } from "./components/forms/InputRange.jsx";
import { ProductCategoryRow } from "./components/products/productCategoryRow.jsx";
import { ProductRow } from "./components/products/productRow.jsx";

const products = [
	{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
	{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
	{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
	{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
	{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
	{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

export default function HomePage() {
	const [showStockedOnly, setShowStockedOnly] = useState(false);
	const [search, setSearch] = useState('');
	const [priceRange, setPriceRange] = useState(10);

	const visibleProducts = products.filter(product => {
		if (showStockedOnly && !product.stocked) {
			return false;
		}

		if (search && !product.name.toLowerCase().includes(search)) {
			return false;
		}

		if (priceRange < parseFloat(product.price.replace("$", ""))) {
			return false;
		}

		return true;
	})

	return (
		<div id="root" className="d-flex justify-content-center align-items-center vh-100">
			<div className="d-flex flex-column vw-20">
				<SearchBar 
					search={search}
					onSearchChange={setSearch}
					priceRange={priceRange}
					onPriceRangeChange={setPriceRange}
					showStockedOnly={showStockedOnly} 
					onStockedOnlyChange={setShowStockedOnly} 
				/>

				<ProductTable products={visibleProducts} />
			</div>
		</div>
	);
}

function SearchBar({ search, onSearchChange, priceRange, onPriceRangeChange, showStockedOnly, onStockedOnlyChange }) {
	return (
		<div>
			<Input value={search} onChange={onSearchChange} placeholder="Rechercher" />
			<InputRange id="priceRange"
						value={priceRange}
						onChange={onPriceRangeChange}
						label={'Rechercher les produits compris entre 0 et ' + priceRange + '$'} />
			<CheckBox id="stock" 
					  checked={showStockedOnly} 
					  onChange={onStockedOnlyChange} 
					  label="N'afficher que les produits disponibles" />
		</div>
	);
}

function ProductTable({ products }) {
	const rows = [];
	let lastCategory;

	for (let product of products) {
		if (product.category !== lastCategory) {
			rows.push(<ProductCategoryRow key={product.category} categoryName={product.category} />)
			lastCategory = product.category;
		}
		rows.push(<ProductRow key={product.name} product={product} />)
	}

	return (
		<table className="table align-middle mt-2 table-striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	);
}