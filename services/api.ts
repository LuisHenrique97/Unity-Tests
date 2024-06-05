export const baseUrl = "http://localhost:4000/";

export const getData = () =>
	fetch(`${baseUrl}users`)
		.then((response) => response.json())

		.catch((error) => console.error(error));

export const postData = (name: string) =>
	fetch(`${baseUrl}users`, {
		method: "POST",
		body: JSON.stringify({ name }),
	})
		.then((response) => response.json())
		.then((user) => console.log("User added:", user));

export const deleteData = (id: string) =>
	fetch(`${baseUrl}users/${id}`, {
		method: "DELETE",
	})
		.then((response) => response.json())
		.then((user) => console.log("User deleted:", user));

//Fazer a tipagem dos dados e refatorar o código
//Implementar testes nessas requisições
//Criar um layout amigavel
