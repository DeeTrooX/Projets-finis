// fetch('https://hp-api.herokuapp.com/api/characters')
//     .then(response => response.json())
//     .then(data => { 
//         dataAPI = data
//         console.log(dataAPI)
//     })

// function displayCharacter()
//   function listecharacters(character) {
//     for (character of characters) {
//       display.innerHTML += character + "<br>";
//     }
//   }
let searchBar = document.querySelector('#searchbar')
let HarryPotterChar = []

async function easyFetch(){
    const response = await fetch ("https://hp-api.herokuapp.com/api/characters")
    HarryPotterChar = await response.json();
    display(HarryPotterChar)
}

easyFetch()

function display (data){
// efface tout le contenue qui est injecter de base dans l'HTML
document.querySelector('ul').innerHTML = ''
const harry = data.map((character)=> {
if (character.image)
document.querySelector('ul').innerHTML += 
            `<li>
            <h3>${character.name}</h3>
            <p>${character.house}</p>
            <img src="${character.image}"</img>
            </li>`

})}

searchBar.addEventListener('keyup',(e) => { 
    const search = e.target.value.toLowerCase()
    console.log(search)
    const filtre = HarryPotterChar.filter((char)=>{
        return(char.name.toLowerCase().includes(search)||
        char.house.toLowerCase().includes(search)
        );
    });
    console.log(filtre)
    display(filtre);
})


   // function display (data){
//     for(character of data){
//         console.log(character)
//         document.querySelector('div').innerHTML += 
//         `<li>
//         <h3>${character.name}</h3>
//         <p>${character.house}</p>
//         <img src="${character.image}"</img>
//         </li>`
//     }
//     }