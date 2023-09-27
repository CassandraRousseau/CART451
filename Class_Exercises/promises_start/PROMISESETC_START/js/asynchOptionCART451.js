 /*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 //asynch / await -> available in es8
 //return promises just like before
 //USEs promises behind the scenes
 //looks LIKE synchronous code ... no need for .then() - 
 //you though can ONLY await INSIDE asynch functions...

*/
//window.onload = function () {
    const buttonCallJ = document.querySelector("#callbackJ");
    const responseJ = document.querySelector("#responseJ");

    buttonCallJ.addEventListener("click", async function () {
      console.log("clicked");
      let userStr = document.querySelector("#user-string-J").value;
      let res = await checkAuth_A(userStr);
      let finalRes = await changeString_A(res);
      console.log(finalRes);

});

function checkAuth_A(userString) {

  return new Promise((resolve, reject)=>{
    console.log(userString);
    setTimeout(() => {
      let userFruit = "";
      if (userString === "Sabine") {
        userFruit = "pineapple";
      } else {
        userFruit = "noFruit";
        reject("error no fruit");
      }
      console.log("time-out one-a complete " + userFruit);
      resolve(userFruit);
    }, 5000); 
  })
}

function changeString_A(fruitString) {

  return new Promise ((resolve, reject)=>{
    setTimeout(() => {
      let userFruitwithstars = fruitString.split("").join("");
      console.log("time-out two-a complete " + fruitString);
      resolve (userFruitwithstars);
    }, 5000); 
  })
 
}

