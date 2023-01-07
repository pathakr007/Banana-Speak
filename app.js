var btntranslate = document.querySelector("#btn-translate");

var txtinput = document.querySelector("#txt-input");

var txtoutput = document.querySelector("#output-div");

var url = "https://api.funtranslations.com/translate/minion.json"

function constructUrl(text) {
    var input = url + "?" + "text=" + text;
    return input;

}

function errorHandler(error) {
    console.log("Some errro occured" + error)
}

function clickHandler() {
    var textinput = txtinput.value;

    fetch(constructUrl(textinput))
        .then (response => response.json())
        .then (json=> {txtoutput.innerText=json.contents.translated
        }).catch (errorHandler)
};

btntranslate.addEventListener("click",clickHandler);




