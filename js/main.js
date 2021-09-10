// import { fetchAPI } from "./fetch";

// fetchAPI();

let allData = [];
let isLoaded = false;

function fetchAPI() {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(data => {
        allData = data
        renderHomepage()
        isLoaded = true
    })
    // .then(() => isLoaded = true)
}

fetchAPI();

let cardPage = document.querySelector('.characters')

function renderCards(allData, targetElement){
    let section = document.createElement('div')
    section.classList.add('cards')
    targetElement.appendChild(section)

    let leftContainer = document.createElement('div')
    leftContainer.classList.add('img__container')
    section.appendChild(leftContainer)

    let containerImage = document.createElement('img')
    containerImage.src = allData.image
    leftContainer.appendChild(containerImage)

    let rightContainer = document.createElement('div')
    rightContainer.classList.add('content__container')
    section.appendChild(rightContainer)

    let ueberschrift = document.createElement('h2')
    ueberschrift.textContent = allData.name
    rightContainer.appendChild(ueberschrift)

    let Actor = document.createElement('p')
    Actor.textContent = allData.actor
    rightContainer.appendChild(Actor)

    let House = document.createElement('p')
    House.textContent = allData.house
    rightContainer.appendChild(House)

    let liked = document.createElement('img')
    liked.src = './images/icons/favorite_border_black_24dp.svg'
    section.appendChild(liked)
}

function renderHomepage() {
    // cardPage.innerHTML = ''
    allData.forEach(el => {
        renderCards(el, cardPage)
    });
}

// renderHomepage();

// let startButton = document.querySelector('.startButton')

// startButton.addEventListener('click', () => {
//     renderHomepage();
// })