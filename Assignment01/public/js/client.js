window.onload = function () {
  console.log("we are loaded");
  const buttonCall = document.querySelector("#search");
  const responseA = document.querySelector("#responseA");
const responseB = document.querySelector("#responseB");
const responseC = document.querySelector("#responseC");
const responseD = document.querySelector("#responseD");
const responseE = document.querySelector("#responseE");
//     const results = document.getElementById("results");

//     let responseText = await response.text();
    // results.innerHTML = responseText;
//     // Add a blank space between each line of the response text

// console.log("the response::: ", responseText);

// results.innerHTML = responseText;

//   });//click
  function getJSONFromServerUsingFetch(fileNameLink) {
    // use ES6 fetch API, which return a promise
    return fetch(fileNameLink).
    then(function(r) 
    { 
      //what is returned here is ALSO A PROMISE 
      return r.text()
    })
  }

  buttonCall.addEventListener("click", function () {
    console.log("clicked");
    let returnedFruit = checkAuth_A(
      document.querySelector("#user-string-A").value
    );
    changeString_A(returnedFruit);
    });
  

function checkAuth_A(userString) {
  setTimeout(() => {
    let answer = "";
    if (userString === "PayPal") {
      getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`)
      .then(
        function (resultFromFetchA) {
          console.log(resultFromFetchA);
          let sRes =  resultFromFetchA;
          responseA.innerHTML = sRes;
          var img = document.createElement("img"); 
          img.src = "images/fox.jpg"; 
          var src = document.getElementById("responseA"); 
          src.appendChild(img);
            
          console.log("works")
          return  getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`+resultFromFetchA.linkToNext)
      }) .then(
        function (resultFromFetchB) {
          console.log(resultFromFetchB);
          let sRes =  resultFromFetchB;
          responseB.innerHTML = sRes;
          return  getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`+resultFromFetchB.linkToNext)
        })
        .then(
          function (resultFromFetchC) {
            console.log(resultFromFetchC);
            let sRes =  resultFromFetchC;
            responseC.innerHTML = sRes;
            return  getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`+resultFromFetchC.linkToNext)
          })
          .then(
            function (resultFromFetchD) {
              console.log(resultFromFetchD);
              let sRes =  resultFromFetchD;
              responseD.innerHTML = sRes;
              return  getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`+resultFromFetchD.linkToNext)
            })
            .then(
              function (resultFromFetchE) {
                console.log(resultFromFetchE);
                let sRes =  resultFromFetchE;
                responseE.innerHTML = sRes;
              })
    } else if(userString === "paypal"){
      answer = "You're close!! You just need to write it with its right spelling:)";
      let almostThere = answer;
      responseA.innerHTML = almostThere;

    } else {
      answer = "Wrong answer, try again";
    let wrongAnswer = answer;
    responseA.innerHTML = wrongAnswer;
    }
    console.log("time-out one-a complete " + answer);
    return answer;
  }, 2000); // let 5 secs go past then send back
}

function changeString_A(fruitString) {
  //console.log(userString);
  setTimeout(() => {
    let userFruitwithstars = fruitString.split("").join("*");
    console.log("time-out two-a complete " + fruitString);
    return answer;
  }, 2000); // let 5 secs go past then send back
}

 // format json object - helper :)
// function formatJSObj(data) {
//   return `
//         ${data.title}
//          <br />
//          Description: ${data.description} <br /> `;
// } 
}

