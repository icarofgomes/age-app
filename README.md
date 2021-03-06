# Instalação

## Antes da instaçao

### Clone do projeto

- Em um diretório de sua preferência, use o comando para clonar o projeto

    ```
    git clone git@github.com:icarofgomes/age-app.git
- Altere para a pasta age-app

## Instalação passo a passo


### Ativar o banco de dados:
- Para ativar o MySQL no seu sistema operacional:
    - No Linux: No terminal digite
        ```
        sudo systemctl start mysql
    - No Docker:
        ```
        docker container run --name mysql -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql
        
        Obs 1: Executar o comando acima caso seja a primeira vez a executar o programa.
        - caso já tenha executado e queria retormar o serviços:
            docker container start mysql
        - caso querida parar o serviço
            docker container stop mysql

        Obs 2: O campo MYSQL_ROOT_PASSWORD=password pode ser alterado para a senha de sua preferência, atenção na hora de configurar o arquivo .env no backend.

- Copiar a Query presente na raiz do projeto, e executar no MySQL.
    - Pode ser executado em algum gerenciador como por exemplo o MySQL Workbench.
    - Obs: O arquivo possui alguns dados comentados, apenas como referência, caso desejar criar o Banco de Dados já populado.

###  Configurar e ativar o Backend:

- Primeiramente entre na pasta backend é execute o comando npm install para instalar as dependências do projeto.
- Ainda na pasta do backend existe um arquivo ".env.example", é necessário criar um arquivo ".env" baseado no 
exemplo para configurar o ambiente com as informações do banco de dados.
- Após configurado o backend, é necessário executar o comando npm run dev dentro da pasta do backend.
### Configurar o ativar o Frontend:

- Entre na pasta do frontend e execute o comando npm install para instalar as dependências do projeto.
- Depois para ativar o frontend, digite o comando npm start.

# Backend

## Retorno das rotas do backend

- Foram criadas duas rotas no backend:
    - http://localhost:3001/users : Rota do tipo get, com ela é retornado uma lista com todos os usuários cadastrados
    - http://localhost:30001/users: Rota do tipo post, essa rota recebe o nome e a data de nascimento do usuário e ele é criado no banco de dados. O retorno dessa rota é o id, nome e a data de nascimento do usuário criado.

## Informações sobre o Backend

- O backend foi criado utilizando o NodeJS, com algumas bibliotecas para possibilitar a criação de rotas, validar dados, permitir a comunicação com o frontend, permitir a comunicação com o banco de dados, entre outros.
- Foi utilizado o TypeScript para trazer alguns recursos extra.
- Foi utilizado o padrão MSC (Model Service Control) para estruturar o código.


# Frontend

## Comportamento frontend

- O Frontend se comunica com o backend da seguinte forma:
    - Existe um formulário na página superior do site que capta o nome de uma pessoa e sua data de nascimento e ao clicar no botão as informações são enviadas para o banco de dados através da API.
    - Existe um componente na página que se comunica com o backend para buscar as informações de todas as pessoas e retorna o nome e a idade de cada pessoa em um card.
    - Tanto o nome quanto a data de nascimento é obrigatório para o envio formulário.
- Em caso do banco de dados estar vazio é retornada uma mensagem.
- No caso de problema de comunicação com o banco de dados ou algum erro com o servidor é retonarda uma mensagem.

## Informações sobre o Frontend

- O frontend foi criado com ReactJS, com o axios para comunicação com o backend.
- Foi utilizado os Hooks do React para controlar tanto o estado dos componentes quanto o ciclo de vida. 
- Dada a simplicidade da aplicação decidi não usar bibliotecas como o Redux para gerenciar o estado global da aplicação e nem o TypeScript.
- Foram utilizados arquivos do tipo JSX, para renderização de HTML dentro do código JavaScript.
- Para estilização dos componentes foi utilizado css puro.