
const printToDom = (domString, divID) => {
    document.getElementById(divID).innerHTML += domString;


};

const builddomString = (animalArray) => {
    let domString = "";
    for(let i =0; i < animalArray.length; i++){
    domString += `<div class="card">`;
    domString += `<h1>${animalArray[i].name}</h1>`;
    domString += `<h3>${animalArray[i].number}</h1>`;
    domString += `<img class="animal-image" src=${animalArray[i].imageUrl} >`;
    domString +=  `<div class="button-container">`;
    domString +=    `<button class="card-button">Escape</button>`;
    domString +=  `</div>`;
    domString += `</div>`;

    };

    printToDom(domString, "animal-container");
};

function executeThisFunctionAfterFileLoads(){

    const data = JSON.parse(this.responseText);
    console.log("data", data);
    builddomString(data.animals);
}

function WTF() {
    console.log("something went wrong");
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisFunctionAfterFileLoads);
    myRequest.addEventListener("error", WTF);
    myRequest.open("GET", "animals.json");
    myRequest.send();
    console.log("myrequest", myRequest);
};

startApplication();