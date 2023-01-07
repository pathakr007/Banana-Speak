var btntranslate = document.querySelector("#btn-translate");

var txtinput = document.querySelector("#txt-input");

var txtoutput = document.querySelector("output-text");

var url = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(input) {
    var input = url + "?" + "text" + txtinput;
    return input;

}

function errorHandler() {
    console.log("Some errro occured" + error);
}

function clickHandler() {
    var textinput = txtinput.value;

    fetch(constructUrl(textinput))
        .then (response => response.json())
        .then (json=> {outputDiv.innertext=json.contents.translated
        }).catch (errorHandler)
};

btntranslate.addEventListener("click",clickHandler);