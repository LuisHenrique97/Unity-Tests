"use client";

import { baseUrl, deleteData, getData, postData } from "@/services/api";
import { useState } from "react";

export default function Login() {
	const [name, setName] = useState("");
	const [itemRemove, setItemRemove] = useState("");
	const [data, setDate] = useState([]);

	const getResults = () => {
		getData().then((response) => setDate(response));
	};

	const handleSubmit = () => {
		postData(name);
		setTimeout(() => {
			getResults();
		}, 1000);

		setName("");
	};

	const handleDelete = () => {
		deleteData(itemRemove);
		setItemRemove("");
		setTimeout(() => {
			getResults();
		}, 1000);
	};

	return (
		<div>
			<h1 className="test">Welcome to test jest</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: 10,
					marginBottom: 10,
				}}
			>
				<button onClick={() => getResults()}>Get Results</button>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: 30,
					marginBottom: 10,
				}}
			>
				<input
					type="text"
					id="item"
					value={name}
					placeholder="Nome do item"
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={() => handleSubmit()}>Add Item</button>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginBottom: 30,
				}}
			>
				<input
					type="text"
					id="remove"
					placeholder="Id do Item"
					onChange={(e) => setItemRemove(e.target.value)}
				/>
				<button onClick={() => handleDelete()}>Remove Item</button>
			</div>

			<div>
				{data?.map((item: any, index) => (
					<>
						<p key={item.id}>
							{" "}
							{index} | {item.id} - {item.name}
						</p>
					</>
				))}
			</div>
		</div>
	);
}
