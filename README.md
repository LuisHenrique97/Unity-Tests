## How to run the project

Use `npm run dev` to run the NextJs project
Use `npx json-server --watch db.json --port 4000` to run the JSON Server in the port 4000

_If JSON Server runs in the port 3000 will generate a conflict with NEXTJS, that executes in the same port_

## Descrição do projeto

Fazer uma cadastro de produtos utilizando o JSON Server e o fetch API
para simular as requisições a uma api

- Testes de sucesso
- Testes de erro
- Teste de estresse (Caracteres aleatorios)

1. Cadastro de Produtos
2. Listagem de produtos

## Cenário de teste

### Tests de sucesso

1. usar toToHaveBeenCalledWith(args) para verificar se a função de handleSubmit está sendo chamada com um argumento do tipo string
2. usar toBeLessThan() para verificar se o valor passado como argumento na função handleSubimit
   possui um tamanho de caracteres dentro do limite esperado
3. usar toHaveBeenCalled() para verificar se a função deleteData está sendo chamada
4. usar toHaveReturned() para verificar se a função deleteData possui um retorno de sucesso
5. usar toThrow(error?) para verificar se a função deleteData lança um erro
6. usar toHaveBeenCalled() para verificar se a função getData está sendo chamada
7. usar toHaveReturned() para verificar se a função getData possui um retorno de sucesso

## Advertência

Não testar a implementação da função, mas a sua funcionalidade
# Unity-Tests
