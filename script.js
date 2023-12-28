document.addEventListener("DOMContentLoaded", function () {
    const photosData  = [
        "img/photo1.jpg",
        "img/photo2.jpg",
        "img/photo3.jpg",
        "img/photo4.jpg",
        "img/photo5.jpg",
        "img/photo6.jpg",
        "img/photo7.jpg",
        "img/photo8.jpg",
        "img/photo9.jpg",
        "img/photo10.jpg",
        "img/photo11.jpg",
        "img/photo12.jpg",
        "img/photo13.jpg",
        "img/photo14.jpg",
        "img/photo15.jpg",
        "img/photo16.jpg"
    ];

    const photoGrid = document.getElementById("photoGrid");

    const numColumns = Math.ceil(Math.sqrt(photosData.length));

    photoGrid.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;

    photosData.forEach(photo => {
        const photoCard = document.createElement("div");
        photoCard.classList.add("photo-card");

        const photoImage = document.createElement("img");
        photoImage.src = photo;
        photoImage.alt = "Photo";
        photoImage.classList.add("photo-image");

        photoCard.appendChild(photoImage);
        photoGrid.appendChild(photoCard);
    });
});

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "inline-flex";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
document.addEventListener("DOMContentLoaded", function () {

    const movieListsData = [
        "Action Movies",
        "Comedy Movies",
        "Drama Movies",
        "Sci-Fi Movies",
        "Fantasy Movies",
        "Thriller Movies",
        "Romance Movies",
        "Horror Movies",
        "Documentary Movies",
        "Family Movies",
        "Animated Movies",
        "Classic Movies"
    ];

    const movieListsContainer = document.getElementById("movieLists");

    movieListsData.forEach(movieList => {
        const movieListElement = document.createElement("div");
        movieListElement.classList.add("movie-list");
        movieListElement.textContent = movieList;
        movieListsContainer.appendChild(movieListElement);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imdbMoviesData = [
        { rank: 1, title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
        { rank: 2, title: "The Godfather", year: 1972, rating: 9.2 },
        { rank: 3, title: "The Dark Knight", year: 2008, rating: 9.0 },
        { rank: 4, title: "The Godfather: Part II", year: 1974, rating: 9.0 },
        { rank: 5, title: "Pulp Fiction", year: 1994, rating: 8.9 },
        { rank: 6, title: "The Lord of the Rings: The Return of the King", year: 2003, rating: 8.9 },
        { rank: 7, title: "Schindler's List", year: 1993, rating: 8.9 },
        { rank: 8, title: "12 Angry Men", year: 1957, rating: 8.9 },
        { rank: 9, title: "Inception", year: 2010, rating: 8.8 },
        { rank: 10, title: "Fight Club", year: 1999, rating: 8.8 }
    ];

    const imdbTableBody = document.querySelector('#imdbTable tbody');

    
    imdbMoviesData.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.rank}</td>
            <td>${movie.title}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
        `;

        imdbTableBody.appendChild(row);
    });
});


function subscribe() {
    alert("Subscribed successfully!");

}
