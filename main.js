const start = () => {
    let str = "play"
    const body = document.querySelector("body")
    // remove the last body inner
    body.innerHTML = "";
    let x =7
    // the counter for chances
    const counter = document.createElement("h1")
    counter.id= "h";
    counter.innerHTML=x;
    body.append(counter)

    const div = document.createElement("div")
    div.id= "h"
    body.append(div)

    const word = document.createElement("p")
    word.id = "word"

    let strNew = ""
    for (let x =0 ; x <str.length ;x++){
        strNew += str[x] + " " ;
    }
    
    word.innerHTML=strNew;
    div.append(word);


    let _word = ""
    for (let x =0 ; x <str.length ;x++){
        _word += "_ ";
    }

    const underword = document.createElement("p")
    underword.id = "word"
    underword.innerHTML = _word
    div.append(underword);
}