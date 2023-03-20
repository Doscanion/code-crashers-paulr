// sectionMaker = (inputText) => {
//     let result = '<section><p>' + inputText + '</p></section>';
//     return result;
// };

sectionMaker = (inputText) => '<section><p>' + inputText + '</p></section>';

document.body.innerHTML = sectionMaker('De test voor de arrow function');
