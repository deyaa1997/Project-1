const start = () => {
  let str = "playaa";
  const body = document.querySelector("body");
  // remove the last body inner
  body.innerHTML = "";
  let c = 7;
  // the counter for chances
  const counter = document.createElement("h1");
  counter.id = "counter";
  counter.innerHTML = c;
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

  const divChar = document.createElement("div");
  divChar.id = "divChar";
  div.append(divChar);

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let z = 0; z < alphabet.length; z++) {
    const char = document.createElement("button");
    char.id = "char" + z;
    char.innerHTML = alphabet[z];
    divChar.append(char);
  }

  for (let z = 0; z < alphabet.length; z++) {
    document.getElementById("char" + z).addEventListener("click", function () {
      let sum = 0;
      for (let x = 0; x < str.length; x++) {
        if (
          document.getElementById("char" + z).innerHTML ===
          document.getElementById("alph" + x).innerHTML
        ) {
          document.getElementById("alph" + x).style.color = "rgb(60, 5, 109)";
          document.getElementById("alph" + x).style.textShadow =
            "darkgoldenrod 3px 1px";
          sum++;
        }
      }
      document.getElementById("char" + z).innerHTML = "";
      document.getElementById("char" + z).style.backgroundColor =
        "darkgoldenrod";
      document.getElementById("counter").innerHTML = --c;
      if (sum >= 1) {
        document.getElementById("counter").innerHTML = ++c;
      }
      if (document.getElementById("counter").innerHTML === "0" ){
        alert("Game Over")
      }
    });
  }
};
