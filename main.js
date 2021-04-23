const start = () => {
  let str = "play";
  const body = document.querySelector("body");
  // remove the last body inner
  body.innerHTML = "";
  let x = 7;
  // the counter for chances
  const counter = document.createElement("h1");
  counter.id = "h";
  counter.innerHTML = x;
  body.append(counter);

  const div = document.createElement("div");
  div.id = "div";
  body.append(div);

  const divWord = document.createElement("div");
  divWord.id = "divWord";
  div.append(divWord);

  for (let x = 0; x < str.length; x++) {
    const alph = document.createElement("p");
    alph.id = "alph" + x;
    alph.innerHTML = str[x];
    divWord.append(alph);
  }

  const divSpace = document.createElement("div");
  divSpace.id = "divSpace";
  div.append(divSpace);

  for (let x = 0; x < str.length; x++) {
    const Space = document.createElement("p");
    Space.id = "Space";
    Space.innerHTML = "_";
    divSpace.append(Space);
  }

  const divChar = document.createElement("div")
  divChar.id = "divChar"
  div.append(divChar);
  
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let z = 0 ; z < alphabet.length ; z++ ){
      const char = document.createElement("button")
      char.id = "char" + z ;
      char.innerHTML = alphabet[z]
      divChar.append(char);
  }
};
