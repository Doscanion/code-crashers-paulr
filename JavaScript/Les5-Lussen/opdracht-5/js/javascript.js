const courses = {
    HTML: [
        'Inleiding HTML',
        'Teksten',
        'Lijsten',
        'Hyperlinks',
        'Afbeeldingen',
    ],
    CSS: ['Inleiding CSS', 'Selectors 1', 'Box model', 'Typografie', 'Flexbox'],
    SEO: [
        'Inleiding SEO',
        'Semantiek',
        'Meta tags',
        'Webcrawlers',
        'Local SEO',
    ],
};

for (const code in courses) {
    console.log(code);
    document.body.innerHTML += `<h3>${code}</h3>`;
    var ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (const les of courses[code]) {
        var li = document.createElement('li');
        li.innerText = les;
        ul.appendChild(li);
    }

    // if (Object.hasOwnProperty.call(courses, code)) {
    //     const element = courses[code];
    //     console.log(element);
    // }
}
