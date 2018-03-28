
const printToDom = (domString, divID) => {
    document.getElementById(divID).innerHTML += domString;

};

const builddomString = (animalArray) => {
    let domString = "";
     animalArray.forEach((animal) => {
        if (animal.isCarrier){
        domString += `<div class="animal carnivore">`;

        } else  {
        domString += `<div class="animal vegetable">`;
        }
    
    domString += `<h1>${animal.name}</h1>`;
    domString += `<h3>${animal.number}</h1>`;
    domString += `<img class="animal-image" src=${animal.imageUrl}>`;
    domString +=  `<div class="button-container">`;
    domString +=    `<button class="escaped">Escape</button>`;
    domString +=  `</div>`;
    domString += `</div>`;


    });

    printToDom(domString, "animal-container");
};

const addEscapedEventListeners = () => {
    const escapedButtons = document.getElementsByClassName('escaped');
    for (let i=0; i < escapedButtons.length; i++){
        escapedButtons[i].addEventListener('click', animalEscaped);


    }

};

const animalEscaped = () =>{
    showCarnivores();
    showVegetables();
};

const showCarnivores = () =>{
    const carnivores = document.getElementsByClassName('carnivore');
    for(let j =0; j < carnivores.length; j++) {
        carnivores[j].children[3].innerHTML = '';
        
        carnivores[j].classList.add('red');
    }    


};


const showVegetables = () => {
    const vegetables = document.getElementsByClassName('vegetable');
    for(let k =0; k < vegetables.length; k++) {
        vegetables[k].children[3].innerHTML = `<button>eat me</button>`;
        vegetables[k].classList.add('green');

    }


};








function executeThisFunctionAfterFileLoads(){

    const data = JSON.parse(this.responseText);
    console.log("data", data);
    builddomString(data.animals);
    addEscapedEventListeners();
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