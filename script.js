const BASE_URL = 'https://superheroapi.com/api.php/3459238007694045'
let getHerobtn = document.getElementById('get-hero')
let imgAreaDiv = document.getElementById('img-area')
let searchHerotext = document.getElementById('hero-input')
let searchHeroBtn = document.getElementById('search-hero')
let superheroName = document.getElementById('heroNameText')
let powerStatsDiv = document.getElementById('powerStats')

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`
  const img = `<img src="${character.image.url}" height=200 width=200/>`
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p><b>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}<b></p>`
  }).join('')
  imgAreaDiv.innerHTML = `${name}${img}${stats}`
}

const getSuperhero = () => {
  let randomId = Math.ceil(Math.random() * 731);
  fetch(`${BASE_URL}/${randomId}`).
    then(response => response.json()).
    then(json => {

      let character = json;
      showHeroInfo(character);
    })
}

getHerobtn.addEventListener('click', () => {
  getSuperhero();
})

const getSearchedHero = () => {
  let heroName = searchHerotext.value
  fetch(`${BASE_URL}/search/${heroName}`).
    then(response => response.json()).
    then(json => {
      let hero = json.results[0];
      showHeroInfo(hero)
    })
}

searchHeroBtn.addEventListener('click', () => {
  getSearchedHero();
})
