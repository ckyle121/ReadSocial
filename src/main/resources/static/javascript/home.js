import { images } from './bookPosters';


const bookPosters = [
    images.HarryPotter, 
    images.RedFern,
    images.Caterpillar,
    images.lifeOfPi,
    images.Fahrenheit
]

// DOM Element 
const homeDiv = document.getElementById('HomeDiv')


const createCarousel = (posters) => {
    homeDiv.innerHTML = ''
    posters.forEach(poster => {
        let posterDiv = document.createElement("div")
        posterDiv.classList.add("carousel__face")
        posterDiv.setAttribute("style", `background-image: url(${poster})`)
        homeDiv.appendChild(posterDiv)
    });
}

createCarousel(bookPosters);