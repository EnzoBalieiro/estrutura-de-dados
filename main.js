'user strict'

const users = [
    {
        nome: 'Ana Coelho',
        id: '123456789',
        email: 'ana@gmail.com',
        celular: '11971657465',
        cidade: 'Osasco',
        image:'./img/ana-coelho.jpg',
        
    },
    {
        nome: 'Hugo Gomes',
        id: '987654321',
        email: 'hugo@gmail.com',
        celular: '11982759612',
        cidade: 'Iatpevi',
        image:'./img/hugo-gomes.jpg',
    },
    {
        nome: 'Joana Pereira',
        id: '654987321',
        email: 'joana@gmail.com',
        celular: '11997853637',
        cidade: 'Barueri',
        image:'./img/joana-pereira.jpg',
    },
    {
        nome: 'José Chaves',
        id: '369852147',
        email: 'jose@gmail.com',
        celular: '11936549821',
        cidade: 'Carapicuiba',
        image:'./img/jose-chaves.jpg',
    },
    {
        nome: 'Mariana Silva',
        id: '789654123',
        email: 'mariana@gmail.com',
        celular: '11956879596',
        cidade: 'Jandira',
        image:'./img/mariana-silva.jpg',
    }
]

const botaoExibir = document.getElementById('exibir')

function criarCard (user) {
    const container = document.getElementById('data-container')
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <img src="${user.image}" alt="Foto da ${user.nome}" class="card__photo"></img>
    <h3 class="card__name">${user.nome}</h3>
    <p class="card__user-id">${user.id}</p>
`
    container.appendChild(card)
}

function limparContainer () {
    const container = document.getElementById('data-container')
    container.textContent = ''
}

function exibir () {
    limparContainer()
    users.forEach(criarCard)
}

botaoExibir.addEventListener('click', exibir)
