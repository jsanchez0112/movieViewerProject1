//Movie array
movies = [];

// Element References
const $title = $("#title");
const $runTime = $(".runTime");
const $ratings = $(".ratings");
const $plot = $(".plot");
const $genre = $(".genre");
const $actors = $(".actors");
const URL = "https://omdbapi.com/?apikey=160ba6d8&t=";

//This is the list to add the movie to the list.

// Functions
// Function to add movie.
function addingMovie() {
  const movieTitle = document.getElementById("movie-box").value;
  movies.push(movieTitle);
  let newItem = document.createElement("li");
  $(newItem).html(movieTitle);
  document.querySelector(".movieList").appendChild(newItem);
  $("#movie-box").val("");
}

// This is going to be the random generator to pick the movies.

function getMovieTitle(event) {
  event.preventDefault();
  const name = movies[Math.floor(Math.random() * movies.length)];
  $.ajax(URL + name).then(function (info) {
    console.log("data is coming through");
    // console.log(info)
    $title.text(info.Title);
    $ratings.text(info.Ratings[1].Value);
    $runTime.text(info.Runtime);
    $plot.text(info.Plot);
    $genre.text(info.Genre);
    $actors.text(info.Actors);
    $(".moviePoster").html(`<img src="${info.Poster}" />`);
  });
}

// Removing of the item.
function movieRemoval() {
  $(this).remove();
  const moveMovie = $(this).html();
  let newItem = document.createElement("li");
  newItem.innerText = moveMovie;
  document.querySelector(".removedList").appendChild(newItem);
  //      console.log(newItem)
  for (let i = 0; i < movies.length; i++) {
    if (movies[i] === moveMovie) {
      movies.splice(i, 1);
    }
  }
}

// Adding movie Poster

function imgAdd(event) {
  event.preventDefault();
  const imgPost = $("#title").html();
  console.log(imgPost);
  $.ajax(URL + imgPost).then(function (images) {
    $(".movieLibrary").append(`<img src="${images.Poster}" />`);
  });
}

// removing an item permantently 
function permRemoval () { 
      $(this).remove();
}




// Event Listeners
$("#addingButton").on("click", addingMovie);
$("#generateRandom").on("click", getMovieTitle);
$(".movieList").on("click", "li", movieRemoval);
$(".addToLibrary").on("click", imgAdd);
$('.removedList').on('click' , 'li' , permRemoval);



// remove from list in the content piece.  - work in progress
$('.removal').on('click', removingButton) 
      function removingButton() {
 $('.plot').defaultValue();

      }