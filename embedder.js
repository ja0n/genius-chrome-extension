const embedder = document.createElement('div');
embedder.style = `
  /* display: flex; */
  display: block;
  position: fixed;
  top: 56px;
  right: 0;
  width: 20vw;
  height: 100vh;
  background: white;
  z-index: 100;
  overflow-y: scroll;
`;

document.body.appendChild(embedder);
