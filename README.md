# Desafio Artemis

É proposto a seguir um desafios de programação. A resposta deve ser implementadas
em React, e será testada com um build local que deve ser reprodutivel com NPM.
Todas as respostas serão avaliadas tanto do ponto de vista funcional, de design e de
qualidade do código produzido (clareza, eficiência, complexidade, etc.).
É importante destacar que o resultado desse desafio não é o código em si, e sim sua
capacidade de explicar e justificar e estruturação do código construido. Portanto a
consulta à fontes externas é liberado para esse teste.
A entrega do desafio deve ser feita por meio do github em um repositório publico cujo
link deve ser enviado por email para nós antes do prazo final da availiação.

# Descrição

O desafio consiste em implementar uma página web que permita buscar repositórios
no GitHub a partir de um campo de texto.

# Funcionalidades

<ul>
  <li>Sempre que o usuário digitar um termo, a aplicação deve exibir os repositórios cujo nome contenha esse termo.</li>
  <li>A lista de resultados devem mostrar, para cada repositório encontrado, o nome, a descrição, a quantidade de estrelas, a data da última atualização e o link direto para o repositório no GitHub.</li>
  <li>Além disso, a página deve oferecer suporte a paginação para que seja possível navegar
entre diferentes páginas de resultados, bem como opções de ordenação que permitam
ao usuário organizar os repositórios exibidos, por exemplo, pelo número de estrelas ou
pela data da última atualização.</li>
</ul>

# Como executar o projeto

### 1. Clone o repositório no seu computador

```sh
git clone https://github.com/italogoes/desafio-artemis.git
```

### 2. Instale as dependências

```sh
npm install
```

### 5. Rode o projeto

```sh
npm run dev
```

### Tudo pronto, você já pode abrir seu navegador na porta

```sh
http://localhost:5173
```

### Opção de build
rode
```
npm run build
```
E depois
```
npm run preview
```