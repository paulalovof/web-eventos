let listaAnimais = [
    {
        idAnimal: 1,
        nome: "Barão",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diamnisl dapibus quis dictum quis, facilisis non risus. Aliquam temponisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis",
        img: "./img/img1.webp"
    },
    {
        idAnimal: 2,
        nome: "Nami",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diamnisl dapibus quis dictum quis, facilisis non risus. Aliquam temponisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis",
        img: "./img/img2.jpg"
    },
    {
        idAnimal: 3,
        nome: "Leozinho",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diamnisl dapibus quis dictum quis, facilisis non risus. Aliquam temponisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis",
        img: "./img/img3.webp"
    },
    {
        idAnimal: 4,
        nome: "Tiquinha",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diamnisl dapibus quis dictum quis, facilisis non risus. Aliquam temponisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis",
        img: "./img/img4.jpg"
    },
    {
        idAnimal: 5,
        nome: "Senna",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diamnisl dapibus quis dictum quis, facilisis non risus. Aliquam temponisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis",
        img: "./img/img5.webp"
    }
];

let container = document.querySelector('.container');

const criarCards = () => {
    listaAnimais.forEach((elemento) => {
        let card = 
        `
        <div class="card">
            <img class="card-img" src="${elemento.img}" />
            <h2 class="card-titulo">${elemento.nome}</h2>
            <p class="card-descricao">${elemento.descricao}
            </p>
            <a class="card-botao" idAnimal="${elemento.idAnimal}"> ADOTAR </a>
        </div>
        `;
        container.innerHTML += card;
    });
};

window.addEventListener("load", () => {
    criarCards();

    let cards = document.querySelectorAll('.card');
    cards.forEach((elemento) => {
        elemento.addEventListener("mouseover", () => {
            elemento.classList.add('change-scale');
        });

        elemento.addEventListener("mouseout", () => {
            elemento.classList.remove('change-scale');
        });

        elemento.lastElementChild.addEventListener("click", (event) => {
            event.preventDefault();
            let animalSelecionado = elemento.lastElementChild.getAttribute('idAnimal');

            alert(animalSelecionado);

            sessionStorage.setItem("idAnimal", animalSelecionado);
            //document.cookie = `idAnimal=${animalSelecionado}`;
            
            window.location.href = "./adotar.html";
            
        });
    });
});


