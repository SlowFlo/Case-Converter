let btn_upper = document.getElementById("upper-case");
let btn_lower = document.getElementById("lower-case");
let btn_proper = document.getElementById("proper-case");
let btn_sentence = document.getElementById("sentence-case");
let btn_save = document.getElementById("save-text-file");

btn_upper.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toUpperCase();
});

btn_lower.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toLowerCase();
});

btn_proper.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    let words = text.toLowerCase().split(" ");
    words.forEach((word, index) => {
        words[index] = word.substr(0, 1).toUpperCase() + word.substr(1);
    });
    document.querySelector("textarea").value = words.join(" ");
});

btn_sentence.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    let sentences = text.toLowerCase().split(". ");
    sentences.forEach((sentence, index) => {
        sentences[index] = sentence.substr(0, 1).toUpperCase() + sentence.substr(1);
    });
    document.querySelector("textarea").value = sentences.join(". ");
});

btn_save.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    download("text.txt", text);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}