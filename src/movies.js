// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((currentElement) =>{
    return currentElement.director});
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevensMovies = movies.filter((currentElement) => {
    return currentElement.director === 'Steven Spielberg'
  });
  const drama = stevensMovies.filter((currentElement)=> {
    return currentElement.genre.includes('Drama')});
  return drama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0) {
    return 0;
  }
  
  const sum = movies.reduce((accElement, currentElement) => {
    if(currentElement.score) {
      return accElement += currentElement.score
    } else {
      return accElement
    }  
  },0)
  return +((sum/movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if(movies.length === 0) {
    return 0;
  }
  const dramaMovie = movies.filter((currentMovie) => {
    return currentMovie.genre.includes('Drama')
    
  });
  const movieScore = dramaMovie.filter((currentScore)=> {
    return currentScore.genre.includes('Drama')
  });
  const sum = movieScore.reduce((currentMovie, currentScore)=> {
    if(currentScore.score) {
      return currentMovie += currentScore.score
    } else return currentMovie
  }, 0)
  return +((sum/movies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
