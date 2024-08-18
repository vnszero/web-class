// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

class AudioSingleton {
  static declared = false;
  static audio = null;

  constructor()
  {
    if (!AudioSingleton.declared)
    {
      AudioSingleton.audio = new Audio('../audio/tema-sw.mp3');
      AudioSingleton.audio.play();
      AudioSingleton.declared = true;

      AudioSingleton.audio.addEventListener('ended', () => {
        this.currentTime = 0
        AudioSingleton.declared = false;
      })
    }
  }
}

function intToRomanStr(value /*:int*/, 
  nine_reference /*:int*/, five_reference /*:int*/, four_reference /*:int*/, one_reference /*:int*/,
  simbol10th /*:string*/, simbol5th /*:string*/, simbol1st /*:string*/)
{
  out = "";
  if (value == nine_reference)
  { // 9th
    out = simbol1st + simbol10th;
  }
  else if (value >= five_reference)
  { // 8th -> 5th
    out = simbol5th;
    value -= five_reference;
    times = value/one_reference;
    for (i = 0; i < times; i++)
    {
      out += simbol1st;
    }
  }
  else if (value == four_reference)
  { // 4th
    out = simbol1st + simbol5th;
  }
  else
  { // 3rd -> 1st
    times = value/one_reference;
    for (i = 0; i < times; i++)
    {
      out += simbol1st;
    }
  }
  return out;
}

$(document).ready(() => {
  function fetchAndPopulateMovies() {
    $.ajax({
      url: 'https://swapi.dev/api/films/',
      method: 'GET',
      success: (data) => {
        $('#filmes ul').empty();
        
        /**
          * A SWAPI segue ordem cronologica para indexar os filmes
          * Ex.: https://swapi.dev/api/films/1 se refere ao filme 4
          * entao eh necessario usar contador separado para numerar data-id-episodio
          */
        var counter = 1;
        
        var movieList = [];
        data.results.forEach((movie) => {
          episode_id_roman = intToRomanStr(movie.episode_id, 9, 5, 4, 1, "X", "V", "I");
          var listItem = $('<li>').attr('data-id-episodio', counter).text("Episode " + episode_id_roman + ": " + movie.title);
          movieList[movie.episode_id] = listItem;
          counter += 1;
        });
        
        movieList.forEach((item) => {
          $('#filmes ul').append(item);
        });
      },
      error: function(xhr, status, error) {
        console.error('Error fetching movie data:', error);
      }
    });
  }
  fetchAndPopulateMovies();

  $('#filmes').on('click', 'li', function() {
    let callAudio = new AudioSingleton();
    var movieId = $(this).data('id-episodio');
    $.ajax({
      url:'https://swapi.dev/api/films/' + movieId + '/',
      method: 'GET',
      success: (data) => {
        episode_id_roman = intToRomanStr(data.episode_id, 9, 5, 4, 1, "X", "V", "I");
        $('#intro').text('Episode ' + episode_id_roman + '\n' + data.title.toUpperCase() + '\n\n' + data.opening_crawl);
      },
      error: (xhr, status, error) => {
        console.error('Error fetche movie data: ', error);
      }
    });
  });
});
