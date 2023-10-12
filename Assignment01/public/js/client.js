window.onload = function () {
  console.log("we are loaded");
  const buttonCallA = document.querySelector("#search_art");
  // const buttonCallB = document.querySelector('#search_food');
  // const buttonCallC = document.querySelector("#search_hist");
  //GET
  buttonCallA.addEventListener('click', 
  
  async function(){
    const results = document.getElementById("results");
    let  response = await fetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`);
    let responseText = await response.text();
    
    // results.innerHTML = responseText;
    // Add a blank space between each line of the response text

console.log("the response::: ", responseText);

results.innerHTML = responseText;

  });//click

  function changeString_A(fruitString) {
    return new Promise((resolve, reject) => {
      //console.log(userString);
      setTimeout(() => {
        console.log("time-out two-a complete " + fruitString);
        let userFruitwithstars = fruitString.split("").join("*");
        resolve(userFruitwithstars);
      }, 5000); // let 5 secs go past then send back
    });
  }

//returns a promise

function checkAuth_A(userString) {
    //A:: this function will return the promise
    return new Promise((resolve, reject) => {
      console.log("Checking Auth...");
      console.log("user string:: " + userString);
  
      setTimeout(() => {
        let userFruit = "";
        console.log("time-out one-a complete " + userFruit);
        if (userString === "Sabine") {
          userFruit = "pineapple";
          resolve(userFruit);
        } else {
          userFruit = "noFruit";
          reject("error: no fruit");
        }
      }, 5000);
    });
}

//   buttonCallB.addEventListener('click', 
  
//   async function(){
//     const results = document.getElementById("results");
//     let  response = await fetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`);
//     let responseText = await response.text();
    
//     // results.innerHTML = responseText;
//     // Add a blank space between each line of the response text

// console.log("the response::: ", responseText);

// results.innerHTML = responseText;

//   });//click
 
//   buttonCallC.addEventListener('click', 
  
//   async function(){
//     const results = document.getElementById("results");
//     let  response = await fetch(`http://localhost:4200/sendSearch?${new URLSearchParams('#search_hist')}`);
//     let responseText = await response.text();
    
//     // results.innerHTML = responseText;
//     // Add a blank space between each line of the response text

// console.log("the response::: ", responseText);

// results.innerHTML = responseText;

//   });//click
 
}
