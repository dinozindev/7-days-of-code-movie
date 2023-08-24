import { movies } from "./modules/movies.js";
const movieSection = document.querySelector(".movie__container")

movies.forEach(movie => renderMovie(movie))

function renderMovie(movie) {
    const div = document.createElement('div');
    div.className = 'movie__item'
    div.innerHTML = `
    <div class="movie__item-info">
        <img class="movie__item-img" src=${movie.image} alt=${movie.title}>
        <div class="movie__item-maininfo">
            <h3 class="movie__item-title">${movie.title} (${movie.year})</h3>
            <div class="movie__item-stats">
                <div class="movie__item-rating">
                    <i class="fa-solid fa-star"></i>
                    <span>${movie.rating}</span>
                </div>
                <div class="movie__item-favorite">
                    <i class="fa-regular fa-heart"></i>
                    <span>Favoritar</span>
                </div>
            </div>
        </div>
    </div>
    <p class="movie__item-resume">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen book.</p>
    `
    movieSection.appendChild(div)
}