const config = {
  method: 'GET',
  mode: 'cors',
  cache: 'no-store',
};

let fetchData;
let allChar;
let lang = 'en_GB';


fetch("https://codecrashersnl.github.io/json/smash-fighters.json", config)
    .then(response => response.json())
    .then(data => {
      fetchData = data;
    console.log(data);
    smashChar();
});

document.querySelector('select').addEventListener('change', function(){
  document.querySelector('#container').innerHTML = '';
  lang = this.value
  console.log(lang)
  if (allChar) {
    allSmashChar();
  } else {
    smashChar();
  }
})

function smashChar() {
    allChar = false;
    charsInfo = sortData(fetchData.fighters);
    console.log(charsInfo);
    
    charsInfo.forEach(element => {
      console.log(element);
      if(element.dlc == undefined){
        charHtml(element)
      }
    });
};

function allSmashChar() {
  allChar = true;
  charsInfo = sortData(fetchData.fighters);
  console.log(charsInfo);
  charsInfo.forEach(element => {
    console.log(element);
    charHtml(element)
  });
};

function sortData(data){
  charsInfo = data;
  charsInfo.sort((a,b) => (a.series > b.series) ? 1 : ((b.series > a.series) ? -1 : 0));
  return charsInfo;
}

function charHtml(fighterData) {
  let fighter = document.createElement('p');
  let fighterText = document.createTextNode(fighterData.displayName[lang]  + ' ('+ fighterData.series + ')');
  fighter.appendChild(fighterText);
  fighter.style.color = fighterData.color;
  document.querySelector('#container').appendChild(fighter);
}

document.querySelector('#show').addEventListener("click", function(){
  document.querySelector('#container').innerHTML = '';
  allSmashChar();
});

document.querySelector('#hide').addEventListener("click", function(){
  document.querySelector('#container').innerHTML = '';
  smashChar();
});


