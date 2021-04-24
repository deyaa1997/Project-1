const arr = ["abruptly" , "absurd" , "abyss" , "affix" , "askew" , "avenue" ,
"awkward" , "axiom" , "azure" , "bagpipes" , "bandwagon" , "banjo" , "bayou","beekeeper"]

let rand = arr[Math.floor(Math.random() * arr.length)]
const start = () => {
  let str = rand;
  const body = document.querySelector("body");
  // remove the last body inner
  body.innerHTML = "";
  body.style.backgroundColor = "rgb(169,91,44)"
  let c = 7;
  // the counter for chances
  


  const div = document.createElement("div");
  div.id = "div";
  body.append(div);

  const div1 = document.createElement("div")
  div1.id="div1"
  div.append(div1)

  const counter = document.createElement("h1");
  counter.id = "counter";
  counter.innerHTML = "You Have   " + c + "  Attempts";
  div1.append(counter);

  const img1 = document.createElement("img")
  img1.setAttribute("src", "pic/7.png");
  img1.id= "img"
  div1.appendChild(img1)

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
    if(str[x] ===" "){
      Space.innerHTML = " ";
      Space.style.marginLeft= "15px"
      Space.style.width = "45px"
    }else{
    Space.innerHTML = "_";}
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

  let s =0;
  for (let z = 0; z < alphabet.length; z++) {
    document.getElementById("char" + z).addEventListener("click", function () {
      let sum = 0;
      for (let x = 0; x < str.length; x++) {
        if (
          document.getElementById("char" + z).innerHTML ===
          document.getElementById("alph" + x).innerHTML
        ) {
          document.getElementById("alph" + x).style.color = "rgb(59,19,5)";
          document.getElementById("alph" + x).style.textShadow =
            "rgb(246,209,57) 3px 1px";
          sum++;
          }
        }
      s += sum;
      document.getElementById("char" + z).innerHTML = "";
      document.getElementById("char" + z).style.backgroundColor =
        "darkgoldenrod";
      document.getElementById("counter").innerHTML = "You Have   " + --c + "  Attempts";
      img1.innerHTML = ""
      img1.id = "img"
      if (sum >= 1) {
        document.getElementById("counter").innerHTML = "You Have   " + ++c + "  Attempts";
      }
      img1.setAttribute("src" , "pic/" + c + ".png")
      if (s === str.length){
        img1.innerHTML = ""
        img1.id = "img"
        img1.setAttribute("src" , "win.png")
        divChar.innerHTML= ""
        const playAgain = document.createElement("img")
        playAgain.id = "img"
        playAgain.setAttribute("src" , "try.jpg")
        divChar.appendChild(playAgain)
        const but = document.createElement("button")
        but.id = "1"
        divChar.appendChild(but)
        document.getElementById("1").addEventListener("click",function(){
          return start()
        })
      }

      if (document.getElementById("counter").innerHTML === "You Have   " + 0 + "  Attempts" ){
        img1.innerHTML = ""
        img1.id = "img"
        img1.setAttribute("src" , "pic/loose2.jpg")
        divChar.innerHTML = ""
        const playAgain = document.createElement("img")
        playAgain.id = "img"
        playAgain.setAttribute("src" , "try.jpg")
        divChar.appendChild(playAgain)
        const but = document.createElement("button")
        but.id = "1"
        divChar.appendChild(but)
        document.getElementById("1").addEventListener("click",function(){
          return start()
        })
      }
    });
  }
};
