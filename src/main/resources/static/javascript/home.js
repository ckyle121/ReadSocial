//book Posters
const postUrls = [
    "https://books.google.com/books/content?id=JHEkAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api", // HP
    "http://books.google.com/books/content?id=ia7xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", // CAT
    "https://books.google.com/books/content?id=G6COQfzW08QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", // alice
    "http://books.google.com/books/content?id=M9lKHhLy1y0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", // mockingbird
    "https://books.google.com/books/content?id=c8FhuwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api", // caterpillar
    "http://books.google.com/books/content?id=gnQJEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", // gatsby
    "https://books.google.com/books/content?id=Z2q_1A0nlvIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", // cage bird
    "https://books.google.com/books/content?id=UB74EoKvVfsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", // hamlet
    "https://books.google.com/books/content?id=xqRPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" // vanishing half
]

const posterUrls = [
    "https://imgur.com/a/1NAFtgT",
    "https://imgur.com/Vq3uU1m"

]

const bookPosters = [
    './bookPosters/451.jpg'
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

createCarousel(postUrls);