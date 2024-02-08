
document.addEventListener('DOMContentLoaded', function () {
    const setOfWords = ["A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic", "Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.", "It is a simple dummy text generator with basic settings. Users can adjust the number of words, paragraphs, or bytes of the dummy text. It also has a setting to create bulleted lists.", "The Free Image Placeholder Service Favoured By Designers", "Using these dummy text generators is very convenient, as you can set exactly how many paragraphs you need to fit your mock-up. These tools come in handy"];

    const msg = document.getElementById('msg');
    const typeWords = document.getElementById('mywords');
    const btn = document.getElementById('btn');
    let startTime, endTime;

    const playGame = () => {
        let randomNumber = Math.floor(Math.random() * setOfWords.length);
        msg.innerText = setOfWords[randomNumber];
        let date = new Date();
        startTime = date.getTime();
        btn.innerText = "Done";
    }

    const endPlay = () => {
        let date = new Date();
        endTime = date.getTime();
        let totalTime = ((endTime - startTime) / 1000);  // in seconds
        let totalStr = typeWords.value;
        let wordCount = wordCounter(totalStr);
        let speed = Math.round((wordCount / totalTime) * 60);
        let finalMsg = "You typed at " + speed + " words per min. ";
        finalMsg += compareWords(msg.innerText, totalStr);
        msg.innerText = finalMsg;
    }

    const compareWords = (str1, str2) => {
        let words1 = str1.split(" ");
        let words2 = str2.split(" ");
        let cnt = 0;
        words1.forEach(function (item, index) {
            if (item == words2[index]) {
                cnt++;
            }
        })
        let errorWords = (words1.length - cnt);
        return (cnt + " correct out of " + words1.length + " words and total errors are " + errorWords + ".");
    }

    const wordCounter = (str) => {
        return str.split(" ").length;
    }

    btn.addEventListener('click', function () {
        if (this.innerText === 'Start') {
            typeWords.disabled = false;
            playGame();
        } else if (this.innerText === "Done") {
            typeWords.disabled = true;
            btn.innerText = "Start";
            endPlay();
        }
    });
});