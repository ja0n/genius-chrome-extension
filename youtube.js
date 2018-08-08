const geniusBadgeId = 'genius-badge';

setupTitleObserver();
fetchSong(document.title);

function getGeniusBadge () {
  let anchor = document.getElementById(geniusBadgeId);

  if (anchor)
    return anchor;

  anchor = document.createElement('a');
  anchor.id = geniusBadgeId;
  anchor.style = 'display: inline-block; width: 20%; float: right;';
  anchor.target = '_blank';
  const img = document.createElement('img');
  img.style = 'width: 100%';
  img.src = 'https://docs.genius.com/images/snarly_wordmark_hires.png';

  anchor.appendChild(img);

  const container = document.querySelector('#primary #container');
  if (container) container.prepend(anchor);

  return anchor;
}

function setupDOM (song) {
  const geniusBadge = getGeniusBadge();
  geniusBadge.href = song.url;
  const ytApp = document.querySelector('ytd-app');
  if (ytApp) ytApp.style.width = '80vw';
}

function fetchSong (songName) {
  const formatRegex = /\((\s|\S)*\)|\[(\s|\S)*\]|youtube|ft\. (\s|\S)*$|"/gi
  const formattedSongName = songName.replace(formatRegex, '');
  return geniusQuery(formattedSongName)
    .then(data => data.response.hits[0].result)
    .then(song => {
      setupDOM(song);
      return fetchLyrics(song.url);
    })
  ;
}

function setupTitleObserver() {
  const target = document.querySelector('head > title');
  const observer = new window.MutationObserver((mutations) => {
    const lastMutation = mutations.slice(-1)[0];
    const newTitle = lastMutation.target.textContent;
    fetchSong(newTitle);
  });
  observer.observe(target, { subtree: true, characterData: true, childList: true });
  return observer;
}
