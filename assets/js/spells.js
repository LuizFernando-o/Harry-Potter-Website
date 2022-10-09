const spellsList = document.getElementById('spellsList');
const searchBar = document.getElementById('searchBar');
let hpSpells= []


// Função para filtrar as magias na barra de pesquisa
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredSpells = hpSpells.filter((spell) => {
        return (
            spell.name.toLowerCase().includes(searchString) ||
            spell.description.toLowerCase().includes(searchString)
        );
    });
    displaySpells(filteredSpells);
});


// Função para requisitar as magias pela API do Harry Potter
const loadSpells= async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/spells');
        hpSpells = await res.json();
        console.log(hpSpells)
        displaySpells(hpSpells);
    } catch (err) {
        console.error(err);
    }
};


// Função para exibir os personagens na página por uma lista html
const displaySpells = (spells) =>{
    const htmlString = spells
        .map((spell) => {
            return `
            <li class="spell">
                <h2>${spell.name}</h2>
                <p>Description: ${spell.description}</p>
            </li>
        `
        })
        .join('');
        spellsList.innerHTML = htmlString    
}

loadSpells();
