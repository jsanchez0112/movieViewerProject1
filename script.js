//Movie array
movies = [];

// Element References
let $title = $("#title");
const $runTime = $(".runTime");
const $ratings = $(".ratings");
const $plot = $(".plot");
const $genre = $(".genre");
const $actors = $(".actors");
const URL = "https://omdbapi.com/?apikey=160ba6d8&t=";


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

// Random Generator Function

function getMovieTitle(event) {
  event.preventDefault();
  const name = movies[Math.floor(Math.random() * movies.length)];
  $.ajax(URL + name).then(function (info) {
//     console.log("data is coming through");
    $title.text(info.Title);
    $ratings.text(info.Ratings[1].Value);
    $runTime.text(info.Runtime);
    $plot.text(info.Plot);
    $genre.text(info.Genre);
    $actors.text(info.Actors);
    $(".moviePoster").html(`<img src="${info.Poster}" />`);
  });
}


// Removing clicked movie function.
function movieRemoval() {
  $(this).remove();
  const moveMovie = $(this).html();
  let newItem = document.createElement("li");
  newItem.innerText = moveMovie;
  document.querySelector(".removedList").appendChild(newItem);
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

// Remove permanently from list.
function permRemoval () { 
      $(this).remove();
}




// Event Listeners
$("#addingButton").on("click", addingMovie);
$("#generateRandom").on("click", getMovieTitle);
$(".movieList").on("click", "li", movieRemoval);
$(".addToLibrary").on("click", imgAdd);
$('.removedList').on('click' , 'li' , permRemoval);



// // remove from list in the content piece.  - work in progress

//       function removingButton() {
//       getMovieTitle(undefined);
//  }
//  $('.removal').on('click', removingButton);



//Styling


//jQuery

      //Top 
$('.header').css('text-align' , 'center');
$('.header').css('font-size' , '3rem');

//Content Container
$('.content-container').css('display' , 'inline-flex');
$('.content-container').css('width' , '100%');
$('.content-container').css('height' , '450px');


      //Movie List 
$('.active-list').css('width' , '20%');
$('.active-list').css('height' , '450ox');
$('.active-list').css('display' , 'flex');
$('.active-list').css('flex-direction' , 'column');
$('.active-list').css('justify-content' , 'flex-start');
$('.active-list').css('align-items' , 'center');

$('.addMovieSection').css('margin' , "10px 0px 0px 0px");

$('#movie-box').css('margin' , '10px 0px 0px 0px');

      //Movie Details 
$('.movieInfo').css('width' , '60%');
$('.movieInfo').css('height' , '450px');
$('.movieInfo').css('display' , 'flex');

$('.movieDetails').css('height' , '450px');
$('.movieDetails').css('width' , '65%');
$('.movieDetails').css('display' , 'flex');
$('.movieDetails').css('flex-direction' , 'column');
$('.movieDetails').css('flex-wrap' , 'nowrap');
$('.movieDetails').css('align-content' , 'flex-start');
$('.movieDetails').css('justify-content' , 'flex-start');
$('.movieDetails').css('align-items' , 'flex-start');

$('.moviePoster').css('height' , '450px');
$('.moviePoster').css('width' , '35%');
$('.moviePoster').css('display' , 'flex');
$('.moviePoster').css('flex-direction' , 'column');
$('.moviePoster').css('flex-wrap' , 'nowrap');
$('.moviePoster').css('align-content' , 'center');
$('.moviePoster').css('justify-content' , 'center');
$('.moviePoster').css('align-items' , 'center');

      //Removed Movies
$('.removed-div').css('width' , "20%");
$('.removed-div').css('height' , "450px");
$('.removed-div').css('display' , "flex");
$('.removed-div').css('flex-direction' , "column");
$('.removed-div').css('flex-wrap' , "wrap");
$('.removed-div').css('align-content' , "center");
$('.removed-div').css('justify-content' , "flex-start");
$('.removed-div').css('align-items' , "flex-start");

$('.deleted-title').css('margin' , '15px 0px 10px 0px');


      //Library Title 
$('.libraryTitle').css('font-size' , '2rem');
$('.libraryTitle').css('text-decoration' , 'underline');
$('.libraryTitle').css('text-align' , 'center');
$('.libraryTitle').css('justify-content' , 'flex-start');
$('.libraryTitle').css('align-items' , 'flex-start');


      // Movie Library 
$('.movieLibrary').css('width' , '100%');
$('.movieLibrary').css('height' , '400px');
$('.movieLibrary').css('display' , 'flex');
$('.movieLibrary').css('flex-direction' , 'row');
$('.movieLibrary').css('flex-wrap' , 'wrap');
$('.movieLibrary').css('justify-content' , 'center');


// //Media Queries 

// // First Media Query for small screens



// let mediaQ = window.matchMedia('(max-width: 1000px)');

// function responsive(mediaQ) { 
//       if (mediaQ.matches){
//             // Content Continer for Media
//             $('.content-container').css('display' , 'flex');
//             $('.content-container').css('flex-direction' , 'column');
//             $('.content-container').css('flex-wrap' , 'nowrap');
//             $('.content-container').css('align-content' , 'center');
//             $('.content-container').css('justify-content' , 'flex-start');
//             $('.content-container').css('align-items' , 'flex-end');
//             $('.content-container').css('padding-bottom' , '250px');

//             //Active List 
//             $('.active-list').css('width' , '100%');

//             //Movie Details
//             $('.movieDetails').css('width' , '100%');

//             // Movie Info
//             $('.movieInfo').css('width' , '100%');
//             $('.movieInfo').css('display' , 'flex');
//             $('.movieInfo').css('flex-direction' , 'column');
//             $('.movieInfo').css('flex-wrap' , 'nowrap');

//             // Movie Poster
//             $('.moviePoster').css('width' , '50%');

//             // Removed Div
//             $('.removed-div').css('display' , 'flex');
//             $('.removed-div').css('width' , '50%');

//             //Library Title
//             $('.libraryTitle').css('padding' , '15px 0px 10px 0px');

//             // Movie Library
//             $('.movieLibrary').css('display' , 'flex');
//             $('.movieLibrary').css('flex-direction' , 'row');
//             $('.movieLibrary').css('flex-wrap' , 'wrap');
//             $('.movieLibrary').css('align-content' , 'flex-start');
//             $('.movieLibrary').css('align-items' , 'flex-start');
//       } else {
//             console.log('working')
//       }};

//       responsive(mediaQ);
//       mediaQ.addEventListener(responsive);