//Botao de pesquisa
const searchMusica = document.querySelector("#searchMusica");

searchMusica.onclick = el => {
  el.preventDefault();
  submeter();
};

function findLyrics(cantor, musica) {
  return fetch(
    `https://api.vagalume.com.br/search.php?art=${cantor.value}&mus=${musica.value}&apikey={62f32b2b71147070761aaf085fa0172d}`
  );
}

async function submeter() {
  let nomeCantor = document.querySelector("#cantor");
  let nomeMusica = document.querySelector("#musica");
  const letraContent = document.querySelector("#lyrics");

  //Async Await
  const lyricsResponse = await findLyrics(nomeCantor, nomeMusica);
  const data = await lyricsResponse.json();

  //Adicionando letra na página
  if (data.mus) {
    letraContent.textContent = data.mus[0].text;
  } else {
    letraContent.textContent = data.type;
  }
}
