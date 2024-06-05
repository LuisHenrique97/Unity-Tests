import Login from "@/components/Login/Login";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/Button/Button";

describe("container test", () => {
	test("button", () => {
		const user = userEvent.setup();

		render(<Login />);

		user.click(screen.getByRole("button", { name: "Get Results" }));
	});

	test("input", async () => {
		const user = userEvent.setup();
		render(<Login />);

		//Captura do input a ser testado
		const entrada = screen.getByPlaceholderText("Nome do item");
		//Simulação de entrada de dados
		await user.type(entrada, "Luis");

		//Espera-se que a entrada tenha o valor Luis
		expect(entrada).toHaveValue("Luis");
	});

	test("render test", () => {
		render(<Login />);

		//Verifica se existe a palavra Welcome em algum lugar do componente
		//Esse valor é passado dentro de um regex
		screen.getByText(/Welcome/i);
	});

	test("test alter message", async () => {
		//Nesse teste verificamos se a mensagem exibida na tela foi alterado
		//1 - renderização do componente
		render(<Login />);

		//Declaração de setup para simular ações do usuário
		const user = userEvent.setup();

		//verificando se existe o texto descrito
		// screen.getByText(/description/i);

		//Aguardando o click em um botão com essa mensagem
		// await user.click(screen.getByText("Add Item"));

		//Verificando se a nova mensagem está sendo exibida
		// screen.getByText(/altered/i);
	});

	test("verify called function", async () => {
		const onClick = jest.fn();
		const user = userEvent.setup();

		//Testando se uma função é chamada em um componente que
		//recebe uma função como parametro
		render(<Button onClick={onClick}>Click</Button>);

		await user.click(screen.getByText("Click"));

		expect(onClick).toHaveBeenCalled();

		//Para testar chamada a API é necessário o uso de mock
		//O Testing library não testa alteração de estado interno do componente
		//mas sim comportamento da DOM através da interção do usuário
		//quando o usuário clica em um botão ou envia um formulário
		//bem como as mensagens que estão sendo exibidas na tela.

		//Para testa mudanças de estado, verifique se esse está sendo exibido na tela ou não
		//Caso seja uma função interna de mudaça de estado, defina critérios para saber
		//Se a função foi chamada, caso seja necessário faça o uso de mocks
	});

	test("Verufy attribute", () => {
		render(<Login />);

		//Verificando se dentro do componente login
		//possui um elemendo com o texto welcome, e se esse elemento possui um atributo class
		//definido com 'test'
		expect(screen.getByText(/welcome/i)).toHaveAttribute("class", "test");
	});
});
