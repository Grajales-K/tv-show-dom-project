//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  for(const episode of episodeList){
    const episodeName = episode.name;
    const episodeNameDiv = document.createElement("div");
    episodeNameDiv.textContent = episodeName;
    rootElem.appendChild(episodeNameDiv);

    const episodeSeason = episode.season;
    // const episodeSeasonDiv = document.createElement("div");
    // episodeSeasonDiv.textContent = episodeSeason;
    // rootElem.appendChild(episodeSeasonDiv);

    const episodeNumber = episode.number;
    // const episodeNumberDiv = document.createElement("div");
    // episodeNumberDiv.textContent = episodeNumber; //here we can put only plain text
    // rootElem.appendChild(episodeNumberDiv);

    const episodeCodeDiv = document.createElement("div");
    
    if(episodeNumber < 10){ //we are checking that the number is less
      episodeCodeDiv.textContent = `S0${episodeSeason}E0${episodeNumber}`;
    rootElem.appendChild(episodeCodeDiv)
    }
    else if(episodeNumber >= 10){
      episodeCodeDiv.textContent = `S0${episodeSeason}E${episodeNumber}`;
    rootElem.appendChild(episodeCodeDiv)
    }

    const episodeImage = episode.image.medium;
    const episodeImageDiv = document.createElement("img");
    episodeImageDiv.src = episodeImage; //now we can put the img in the div
    rootElem.appendChild(episodeImageDiv);

    const episodeSummary = episode.summary;
    const episodeSummaryDiv = document.createElement("div");
    episodeSummaryDiv.innerHTML = episodeSummary; //now we go inside the <p> and take only the text
    rootElem.appendChild(episodeSummaryDiv);

}
const bodyElement = document.getElementById ("body")
const footerElement = document.createElement("footer")
footerElement.textContent = "the data come from TVMaze.com";
bodyElement.appendChild(footerElement);


}






window.onload = setup;
