const embedder = document.createElement('div');
embedder.style = 'display: none; position: absolute; top: 50%; left: 50%; width: 20vw; height: 30vh; z-index: 100;';
const iframe = document.createElement('iframe');
embedder.append(iframe);

document.body.appendChild(embedder);
