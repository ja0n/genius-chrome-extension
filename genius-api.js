var token  = '<genius-token>';
var endpoint = 'https://api.genius.com/search';

function withQueryString (url, params) {
  var format = window.encodeURIComponent;
  var query = Object.keys(params)
    .map(key => [key, '=', params[key]].join(''))
    .join('&')
  ;

  return [url, '?', query].join('');
}

function geniusQuery (query) {
  var params = {
    q: query,
    access_token: token,
  };

  return fetch(withQueryString(endpoint, params))
    .then((response) => response.json())
  ;
}

function fetchLyrics (url) {
  var headers = new Headers();
  headers.append("Origin", "https://genius.com");
  const config = { headers, mode: 'cors' };

  return fetch(url, config)
    .then(response => response.text())
    .then(text => {
      const div = document.createElement('div');
      div.innerHTML = text;
      const lyrics = div.querySelector('.lyrics');

      if (embedder.firstChild)
        embedder.firstChild.remove();

      embedder.appendChild(lyrics);
      embedder.style.display = 'block';
    });
}
