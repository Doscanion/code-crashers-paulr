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
    for (const les of courses[code]) {
        document.body.innerHTML += `<li>${les}</li>`;
    }

    // if (Object.hasOwnProperty.call(courses, code)) {
    //     const element = courses[code];
    //     console.log(element);
    // }
}
