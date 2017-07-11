var $ = document.querySelector.bind(document);
var songName = $('#eow-title').innerText;
var formattedSongName = songName.replace(/\((\s|\S)*\)/, '');

geniusQuery(formattedSongName)
  .then(data => {
    console.log('de', data);
    var result = data.response.hits[0];
    if (result) {
      var anchor = document.createElement('a');
      anchor.style = 'display: inline-block; width: 20%; float: right;';
      anchor.target = '_blank';
      anchor.href = result.result.url;
      var img = document.createElement('img');
      img.style = 'width: 100%';
      img.src = 'https://docs.genius.com/images/snarly_wordmark_hires.png';

      anchor.appendChild(img);
      $('#watch-headline-title').appendChild(anchor);
    }
  })
;
