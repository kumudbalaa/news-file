const searchForm = document.querySelector('#search-form');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputbox');

const getMovieInfo = async (movie) => {
    const apiKey = "28b9bcb3"; 
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;

    // Loading message
    movieContainer.innerHTML = "<p>Fetching movie details...</p>";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            showMovieData(data);
        } else {
            movieContainer.innerHTML = "<p>Movie not found. Please try again.</p>";
        }
    } catch (error) {
        movieContainer.innerHTML = "<p>Error fetching movie details.</p>";
    }
}

const showMovieData = (data) => {
    const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = data;

    movieContainer.innerHTML = `
        <div class="movie-card">
            <img src="${Poster}" alt="${Title}">
            <h2>${Title}</h2>
            <p><strong>Rating:</strong> ⭐ ${imdbRating}</p>
            <p><strong>Genre:</strong> ${Genre}</p>
            <p><strong>Released:</strong> ${Released}</p>
            <p><strong>Runtime:</strong> ${Runtime}</p>
            <p><strong>Actors:</strong> ${Actors}</p>
            <p><strong>Plot:</strong> ${Plot}</p>
        </div>
    `;
}

// Search event listener
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movieName = inputBox.value.trim();
    if (movieName !== '') {
        getMovieInfo(movieName);
    }
});
