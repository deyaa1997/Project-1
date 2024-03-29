const choose = () => {
  const body = document.querySelector("body");
  body.innerHTML = "";

  const div = document.createElement("div")
  div.className = "main"
  body.append(div)

  const divHalf = document.createElement("div")
  divHalf.className = "half1"
  div.append(divHalf)


  const select = document.createElement("p")
  select.innerHTML = "Please Select Content : "
  select.className = "select"
  div.append(select);



  const humanBody = [  "head" , "neck" , "heart", "stomach" , "throat" ]
  const foods = [  "mansaf" , "brosted" , "shawrma", "burger" , "pizza" ]
  const animals = [  "eagle" , "tiger" , "turtle", "giraffe" , "monkey" ]
  const countries = [  "algeria" , "jordan" , "brazil", "turkey" , "syria" ]
  const fotballPlayer = [  "ronaldo" , "zidane" , "muller", "iniesta" , "cavani" ]
  const jobs = [  "actor" , "chef" , "judge", "nurse" , "writer" ]

  const content = ["Human Body" , "Foods" , "Animals" , "Countries" , "Football Player" , "Jobs"]
  for (let x =0 ; x < 6 ; x++){
    newButton = document.createElement("button")
    newButton.className = "bn632-hover bn19";
    newButton.innerHTML = content[x]
    divHalf.append(newButton);
    newButton.addEventListener("click", () => {
      if (x === 0 ){
        return generateWords(humanBody);
      }
      if (x === 1 ){
        return generateWords(foods);
      }
      if (x === 2 ){
        return generateWords(animals);
      }
      if (x === 3 ){
        return generateWords(countries);
      }
      if (x === 4 ){
        return generateWords(fotballPlayer);
      }
      if (x === 5 ){
        return generateWords(jobs);
      }
    })
  }
  
}






const generateWords = (arr) => {
  return start(arr[Math.floor(Math.random() * arr.length)])
}




const backFun = function(){
  const body = document.querySelector("body");
  body.innerHTML = "";

  const div = document.createElement("div")
  div.className = "main"
  body.append(div)

  const divHalf = document.createElement("div")
  divHalf.className = "half"
  div.append(divHalf)

  const button = document.createElement("button")
  button.className = "button"
  button.innerHTML = "BEGIN"
  divHalf.append(button)

  button.addEventListener("click" , () => {
    return choose ()
  })
}



const start = (rand) => {
  let str = rand;
  const body = document.querySelector("body");
  // remove the last body inner
  body.innerHTML = "";
  body.style.backgroundColor = "rgb(169,91,44)"
  let c = 6;
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
  img1.setAttribute("src", "pic/6.png");
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
        document.getElementById("counter").innerHTML = "You are Winner"
        document.getElementById("counter").style.fontSize = "125px"
        img1.innerHTML = ""
        img1.id = "img"
        img1.setAttribute("src" , "win.png")
        // change divChar if you Win
        divChar.innerHTML= ""
         // add back button 
        const playAgain = document.createElement("img")
        playAgain.id = "img1"
        playAgain.setAttribute("src" , "home.png")
        divChar.appendChild(playAgain)
        const but = document.createElement("button")
        divChar.id = "dd"
        setTimeout(function () {playAgain.appendChild(but)
        document.getElementById("img1").addEventListener("click",function(){
        return backFun();
        }) },400)
        // add try again button
        const back = document.createElement("img")
        back.id = "img2"
        back.setAttribute("src" , "play again.jpg")
        divChar.appendChild(back)
        const but2 = document.createElement("b")
        divChar.id = "dd"
        setTimeout(function () {back.appendChild(but2)
        document.getElementById("img2").addEventListener("click",function(){
        return choose()
        }) },400)
      }

      if (document.getElementById("counter").innerHTML === "You Have   " + 0 + "  Attempts" ){
        document.getElementById("counter").innerHTML = "You are Loser"
        document.getElementById("counter").style.fontSize = "125px"
        img1.innerHTML = ""
        img1.id = "img"
        img1.setAttribute("src" , "pic/loose2.jpg")
        document.getElementById("divWord").style.color = "rgba(246,209,57,1)"
        document.getElementById("divWord").style.textShadow = "rgba(184, 135, 11, 1) 3px 1px"
        // change divChar if you Loose
        divChar.innerHTML = ""
         // add back button 
        const playAgain = document.createElement("img")
        playAgain.id = "img1"
        playAgain.setAttribute("src" , "home.png")
        divChar.appendChild(playAgain)
        const but = document.createElement("button")
        divChar.id = "dd"
        setTimeout(function () {playAgain.appendChild(but)
        document.getElementById("img1").addEventListener("click",function(){
        return backFun();
        }) },400)
        // add try again button
        const back = document.createElement("img")
        back.id = "img2"
        back.setAttribute("src" , "try.jpg")
        divChar.appendChild(back)
        const but2 = document.createElement("b")
        divChar.id = "dd"
        setTimeout(function () {back.appendChild(but2)
        document.getElementById("img2").addEventListener("click",function(){
        return choose()
        }) },400)
      }
    });
  }
};
