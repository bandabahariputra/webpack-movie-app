function main() {

    const baseUrl = "http://www.omdbapi.com/?apikey=4883f890&";

    const keyword = document.querySelector("#keyword");
    const modalPoster = document.querySelector("#modal-poster");
    const modalTitle = document.querySelector("#modal-title");
    const modalRating = document.querySelector("#modal-rating");
    const modalYear = document.querySelector("#modal-year");
    const modalReleased = document.querySelector("#modal-released");
    const modalGenres = document.querySelector("#modal-genres");
    const modalWriter = document.querySelector("#modal-writer");
    const modalActors = document.querySelector("#modal-actors");
    const modalPlot = document.querySelector("#modal-plot");

    const checkMovies = () => {
        if (keyword.value.length === 0) {
            favMovies();
        } else {
            getMovies();
        }
    }

    const getMovies = () => {
        try {
            let timerGetMovies = setInterval(async () => {
                const response = await fetch(`${baseUrl}s=${keyword.value}`);
                if (response.status == 200) {
                    clearInterval(timerGetMovies);
                    const responseJson = await response.json();
                    const movies = responseJson.Search;
                    if (responseJson.Response == "True") {
                        renderAllMovies(movies);
                    } else {
                        renderNotFound();
                    }
                }
            }, 1000);
        } catch (error) {
            renderNotFound();
        }
    }

    const getMovie = async imdbID => {
        const response = await fetch(`${baseUrl}i=${imdbID}`);
        if (response.status == 200) {
            const movie = await response.json();
            toggleModal(movie);
        }
    }

    const favMovies = () => {
        let timerFavMovies = setInterval(async () => {
            const favoriteMovies = [];
            const imdbId = ["tt6468322", "tt4633694", "tt7653254", "tt4158110", "tt0088763"];
            for (let i = 0; i < imdbId.length; i++) {
                const response = await fetch(`${baseUrl}i=${imdbId[i]}`);
                const responseJson = await response.json();
                favoriteMovies.push(responseJson)
            }
            if (favoriteMovies.length > 0) {
                clearInterval(timerFavMovies);
                renderAllMovies(favoriteMovies);
            }
        }, 1000);
    }

    const movieListElement = document.querySelector("#movie-list");

    const renderAllMovies = (movies) => {
        let cards = "";

        movies.forEach(movie => {
            cards += loopCard(movie);
        });

        movieListElement.innerHTML = movieList(cards);

        const showMovieDetail = md => {
            md.addEventListener("click", e => {
                const imdbID = e.target.id;
                getMovie(imdbID);
            })
        }

        const movieTitle = document.querySelectorAll(".movie-title");
        movieTitle.forEach(mt => showMovieDetail(mt));

        const moviePoster = document.querySelectorAll(".movie-poster");
        moviePoster.forEach(mp => showMovieDetail(mp));
    }

    const movieList = cards => {
        let title = "";
        if (keyword.value.length === 0) {
            title = "Favorite Movies";
        } else {
            title = "Result Search:"
        }
        return `
            <div class="px-4 text-base sm:text-lg md:text-xl lg:text-2xl">${title}</div>
            <div class="flex flex-wrap -mb-4">${cards}</div>
        `;
    }

    const loopCard = movie => {
        return `
            <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4 p-4 flex justify-center">
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <div class="bg-black movie-poster">
                    <img class="w-full border-solid border-b-2 border-black cursor-pointer hover:opacity-75"
                    src="${movie.Poster}"
                    alt="${movie.Title}"
                    id="${movie.imdbID}">
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-base mb-2 cursor-pointer hover:text-blue-700 movie-title" id="${movie.imdbID}">${movie.Title}</div>
                        <p class="text-gray-700 text-base">${movie.Year}</p>
                    </div>
                </div>
            </div>
        `;
    }

    const renderNotFound = () => {
        movieListElement.innerHTML = `<div class="flex justify-center text-base sm:text-lg md:text-xl lg:text-4xl">Movie Not Found!</div>`;
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.addEventListener("keydown", e => {
            if (e.keyCode == 191) {
                e.preventDefault();
                keyword.focus();
            }
        })

        keyword.addEventListener("keyup", e => {
            if (e.keyCode == 13) {
                checkMovies();
            }
        })

        setTimeout(() => {
            checkMovies();
        }, 500);

    });


    // Modal Movie Detail
    const toggleModal = movieDetail => {
        if (typeof movieDetail == "undefined") {
            modalPoster.setAttribute("src", "");
            modalTitle.innerHTML = "";
            modalRating.innerHTML = "";
            modalYear.innerHTML = "";
            modalReleased.innerHTML = "";
            modalGenres.innerHTML = "";
            modalWriter.innerHTML = "";
            modalActors.innerHTML = "";
            modalPlot.innerHTML = "";
        } else {
            modalPoster.setAttribute("src", movieDetail.Poster);
            modalTitle.innerHTML = movieDetail.Title;
            modalRating.innerHTML = movieDetail.imdbRating;
            modalYear.innerHTML = movieDetail.Year;
            modalReleased.innerHTML = movieDetail.Released;
            modalGenres.innerHTML = movieDetail.Genre;
            modalWriter.innerHTML = movieDetail.Writer;
            modalActors.innerHTML = movieDetail.Actors;
            modalPlot.innerHTML = movieDetail.Plot;
        }


        const body = document.querySelector("body");
        const modal = document.querySelector(".modal");
        modal.classList.toggle("opacity-0");
        modal.classList.toggle("pointer-events-none");
        body.classList.toggle("modal-active");
    }

    const overlay = document.querySelector(".modal-overlay");
    overlay.addEventListener("click", () => toggleModal());

    const closeModal = document.querySelectorAll(".modal-close");
    for (let i = 0; i < closeModal.length; i++) {
        closeModal[i].addEventListener("click", () => toggleModal());
    }

}

export default main;