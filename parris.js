





const nameDiv = document.querySelector(".nameDiv");


const titubaButton = document.createElement("button");
titubaButton.textContent = "Tituba";
titubaButton.addEventListener("click", () => populateTitubaPersonDiv);
nameDiv.appendChild(titubaButton);

function populateTitubaPersonDiv() {

    let personDiv = document.createElement("div");
    let titubaHeader = document.createElement("h3");
    let titubaBlurb = document.createElement("p");
    titubaHeader.textContent = "Accused in March 1692";
    titubaBlurb.textContent = "survived after a year in prison when she was released as a slave to an unknown person";
    personDiv.appendChild(titubaHeader);
    personDiv.appendChild(titubaBlurb);

}