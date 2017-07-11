var token  = '<genius-token>';
var endpoint = 'https://api.genius.com/search';

function withQueryString (url, params) {
  var esc = encodeURIComponent;
  var query = Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
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
