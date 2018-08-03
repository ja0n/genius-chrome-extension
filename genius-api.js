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

function testCors (url) {
  var headers = new Headers();
  headers.append("Origin", "https://genius.com");
  const config = { headers, mode: 'cors' };
  fetch(url, config)
    .then(response => response.text())
    .then(text => {
      const div = document.createElement('div');
      div.innerHTML = text;
      const lyrics = div.querySelector('.lyrics');
      embedder.appendChild(lyrics);
      // embedder.firstChild.src = "data:text/html;charset=utf-8," + text;
      embedder.style.display = 'block';
    });
}
