let number = Math.floor(Math.random() * 99);

if (number >= 0 && number <= 19) {
    document.getElementById('text').innerHTML =
        'Why would Kim Jong-un insult me by calling me old, when I would never call him short and fat? Oh well, I try so hard to be his friend and maybe someday that will happen.';
} else if (number >= 20 && number <= 29) {
    document.getElementById('text').innerHTML =
        'I’m an environmentalist. A lot of people don’t understand that. I think I know more about the environment than most people.';
} else if (number >= 30 && number <= 59) {
    document.getElementById('text').innerHTML =
        'We have it totally under control. It’s one person coming in from China. It’s going to be just fine.';
} else if (number >= 60 && number <= 74) {
    document.getElementById('text').innerHTML =
        'We are up BIG, but they are trying to STEAL the Election. We will never let them do it. Votes cannot be cast after the Polls are closed!';
} else if (number >= 75 && number <= 99) {
    document.getElementById('text').innerHTML =
        'He only won in the eyes of the FAKE NEWS MEDIA. I concede NOTHING! We have a long way to go. This was a RIGGED ELECTION!';
}

let time = new Date();

switch (true) {
    case time.getHours() <= 5:
        document.body.style.backgroundColor = 'purple';
        break;
    case time.getHours >= 6 && time.getHours() <= 11:
        document.body.style.backgroundColor = 'orange';
        break;
    case time.getHours >= 12 && time.getHours() <= 17:
        document.body.style.backgroundColor = 'blue';
        break;
    case time.getHours >= 18 && time.getHours() <= 23:
        document.body.style.backgroundColor = 'red';
        break;
}
