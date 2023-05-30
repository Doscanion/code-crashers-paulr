const config = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-store',
};

let electData;

fetch("./electiondata.php", config)
    .then(response => response.json())
    .then(data => {
    electData = data;
    console.log(data);
    graphElect()
    }).catch(error => {
    console.log('Error:', error);
});

function graphElect() {
    let sortElect = Object.entries(electData).sort((a, b) => a[1] - b[1]);
    console.log(sortElect);
    let randColor = () =>  {
        return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    }
    sortElect.forEach(element => { console.log(element);
        console.log(element);
        let part = document.createElement('span');
        part.style.display = 'block';
        part.style.width = '100px'
        let partText = document.createTextNode(`${element[0]} :`)
        part.appendChild(partText);

        let canv = document.createElement('canvas');
        canv.setAttribute('height', '30px');
        canv.setAttribute('width', `${25*element[1]}px`);
        canv.style.backgroundColor = randColor();

        let partNumber = document.createElement('span');
        partNumber.style.display = 'block';
        partNumber.style.width = '100px'
        partNumber.style.margin = 'auto'
        partNumber.style.marginLeft = '10px';
        let partNumberText = document.createTextNode(element[1])
        partNumber.appendChild(partNumberText);

        let electPart = document.createElement('div');
        electPart.style.display = 'flex';
        electPart.style.marginBottom = '10px';
        electPart.append(part, canv, partNumber);
        // canv.setAttribute('style', `background-color: ${randColor}`);
        document.querySelector('#container').style.display = 'grid';
        document.querySelector('#container').appendChild(electPart);
    });
    
}