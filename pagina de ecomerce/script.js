const span = document.querySelector("span");
const classes = span.classList;
span.addEventListener("click", () => {
  const result = classes.toggle("c");
  span.textContent = `${
    result ? "Compre agora" : "Detalhes dos cursos"
  }`;
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("menu").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menu").style.marginLeft= "0";
}

let products = [
    {id: 1, name: 'Introdução ao JavaScript', price: 10.99, description: "&rarr; O que é JavaScript e sua importância no desenvolvimento web.<br />.&rarr; Diferenças entre JavaScript, HTML e CSS.<br />&rarr; Como o JavaScript funciona em navegadores e servidores.<br />&rarr; Configuração do ambiente de desenvolvimento.", image:"img/product1.png"},
    {id: 2, name: 'Sintaxe e Tipos de Dados', price: 20.99,description: "&rarr; Variáveis, operadores, tipos de dados (números, strings, booleanos, etc.).<br />.&rarr; Estruturas de controle: condicionais (if, else), loops (for, while).<br /> &rarr;Funções: definição, parâmetros, retorno de valores.<br /> &rarr;Escopo de variáveis e closures.", image:'img/product2.png'},
    {id: 3, name: 'DOM (Document Object Model):', price: 30.99,description: "&rarr; A estrutura do HTML como uma árvore de objetos.<br />.&rarr; Selecionando elementos HTML com JavaScript.<br /> &rarr; Criando e removendo elementos dinamicamente.", image:'img/product3.png'},
    {id: 4, name: 'Eventos', price: 40.99,description: "&rarr; O conceito de eventos (cliques, mouseover, envio de formulários).<br />.&rarr; Adicionando ouvintes de eventos a elementos HTML.<br /> &rarr; Manipulando eventos e seus dados.", image:'img/product4.png'},
    {id: 5, name: 'Formulários', price: 50.99,description: "&rarr; Capturando dados de formulários HTML com JavaScript.<br />.&rarr; Validando dados de formulários no lado do cliente.<br /> &rarr; Enviando dados de formulários para o servidor.", image:'img/product5.png'},
    {id: 6, name: 'Objetos e Arrays', price: 60.99,description: "&rarr; Criação e manipulação de objetos literais e construtores.<br />.&rarr; Propriedades e métodos de objetos.<br /> &rarr; Arrays: criação, acesso a elementos, métodos (push, pop, etc.)<br />&rarr; Iterando sobre arrays com loops e métodos funcionais.", image:'img/product6.png'},
    {id: 7, name: 'Programação Orientada a Objetos (POO)', price: 70.99,description: "&rarr; Os princípios da POO: herança, polimorfismo, encapsulamento.<br />.&rarr; Classes e objetos em JavaScript (ES6+).<br /> &rarr; Protótipos e herança prototipada.", image:'img/product7.png'},
    {id: 8, name: 'Assincronismo e Promises', price: 80.99,description: "&rarr; O modelo de execução assíncrona do JavaScript.<br />.&rarr; Funções de callback e seus problemas.<br /> &rarr; Promises: criação, estados (pending, fulfilled, rejected).<br /> &rarr; async/await: simplificando o código assíncrono.", image:'img/product8.png'},
    {id: 9, name: 'APIs e Requisições HTTP', price: 90.99,description: "&rarr; O que são APIs e como consumi-las com JavaScript.<br />.&rarr; O objeto XMLHttpRequest e o método fetch.<br /> &rarr; Requisições GET, POST, PUT, DELETE.<br /> &rarr; Tratamento de respostas JSON.", image:'img/product9.png'},
];

let cart =[];

let c = 1;

function botao(){
    c++
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML='';
    if(c%2==0){
        products.forEach((product)=>
            {
            let productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML=`
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
            productGrid.appendChild(productDiv);
        });
    }else{
        renderProducts();
        };
    }

function renderProducts()
{
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML='';
    products.forEach((product)=>
        {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML=`
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Adicionar ao carrinho</button>
        `;
        productDiv.querySelector('button').addEventListener('click',() => addToCart(product.id));
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productId){
    let product = products.find((product) => product.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart()
{
    let cartTable = document.querySelector('.cart, table, tbody');
    cartTable.innerHTML =' ';
    cart.forEach((product) => 
    {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML=`
            <td>${product.name}</td>
            <td>1</td>
            <td>$${product.price}</td>
            <td>$${product.price}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal(

){
    let total = cart.reduce((acc, product)=> acc + product.price,0);
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

let currentProduct =0;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

document.getElementById('checkout').addEventListener('click', () => {
    if( cart.length===0)
    {
        alert('Carrinho vazio');
    }else
    {
        alert('Pedido realizado com sucesso');
        cart=[];
        renderCart();
    }
});
renderProducts();