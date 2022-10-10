const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];


// Função para filtrar os personagens na barra de pesquisa
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});


// Função para requisitar os personagens pela API do Harry Potter
const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        console.log(hpCharacters)
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};


// Função para exibir os personagens na página por uma lista html
const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            // Aqui pode adicionar mais informações porém tem limitações da API
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>Casa: ${character.house!=""? character.house : "no-data"}</p>
                <p>Data de Nascimento: ${character.dateOfBirth!=""? character.dateOfBirth : "no-data"}</p>              
                <img src="${character.image!=""? character.image : '../assets/img/no-img.png'}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
