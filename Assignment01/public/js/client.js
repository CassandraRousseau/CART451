window.onload = function () {
  console.log("we are loaded");
  const buttonCall = document.querySelector("#search");
  const responseA = document.querySelector("#responseA");
const responseB = document.querySelector("#responseB");
const responseC = document.querySelector("#responseC");
const responseD = document.querySelector("#responseD");
const responseE = document.querySelector("#responseE");
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
          var imgA = document.createElement("img"); 
          imgA.src = "images/pop.jpg"; 
          var srcA = document.getElementById("responseA"); 
          srcA.appendChild(imgA);
               // Create anchor element. 
               var a = document.createElement('a');  
                  
               // Create the text node for anchor element. 
               var link = document.createTextNode("NSYNC - Pop (Official HD Video)"); 
                 
               // Append the text node to anchor element. 
               a.appendChild(link);  
                 
               // Set the title. 
               a.title = "NSYNC - Pop (Official HD Video)";  
                 
               // Set the href property. 
               a.href = "https://www.youtube.com/watch?v=TWZKw_MgUPI&ab_channel=NSYNCVEVO";  
                 
               // Append the anchor element to the body. 
               srcA.appendChild(a).style.;  
          console.log("works")
          return  getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`+resultFromFetchA.linkToNext)
      }) .then(
        function (resultFromFetchB) {
          console.log(resultFromFetchB);
          // let sRes =  resultFromFetchB;
          // responseB.innerHTML = sRes;
          var imgB = document.createElement("img"); 
          imgB.src = "images/private.png"; 
          var srcB = document.getElementById("responseB"); 
          srcB.appendChild(imgB);
           // Create anchor element. 
           var b = document.createElement('a');  
                  
           // Create the text node for anchor element. 
           var linkB = document.createTextNode("POP IT! FUNNY PRANKS ON FRIENDS || Crazy And Awesome Pranks by 123 GO!"); 
             
           // Append the text node to anchor element. 
           b.appendChild(linkB);  
             
           // Set the title. 
           b.title = "POP IT! FUNNY PRANKS ON FRIENDS || Crazy And Awesome Pranks by 123 GO!";  
             
           // Set the href property. 
           b.href = "https://www.youtube.com/watch?v=VjWuclkaLOk";  
             
           // Append the anchor element to the body. 
           srcB.appendChild(b);  
          return  getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`+resultFromFetchB.linkToNext)
        })
        .then(
          function (resultFromFetchC) {
            console.log(resultFromFetchC);
            // let sRes =  resultFromFetchC;
            // responseC.innerHTML = sRes;
            var imgC = document.createElement("img"); 
            imgC.src = "images/123go.jpg"; 
            var srcC = document.getElementById("responseC"); 
            srcC.appendChild(imgC);
             // Create anchor element. 
             var c = document.createElement('a');  
                  
             // Create the text node for anchor element. 
             var linkC = document.createTextNode("FUNNY DRAWING CHALLENGE FOR 24 HOURS || DIY Painting Hacks! Easy Crazy Art At School By 123 GO! BOYS"); 
               
             // Append the text node to anchor element. 
             c.appendChild(linkC);  
               
             // Set the title. 
             c.title = "FUNNY DRAWING CHALLENGE FOR 24 HOURS || DIY Painting Hacks! Easy Crazy Art At School By 123 GO! BOYS";  
               
             // Set the href property. 
             c.href = "https://www.youtube.com/watch?v=AIVrTmyhLjg&ab_channel=123GO%21TRENDS";  
               
             // Append the anchor element to the body. 
             srcC.appendChild(c);  
            return  getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`+resultFromFetchC.linkToNext)
          })
          .then(
            function (resultFromFetchD) {
              console.log(resultFromFetchD);
              // let sRes =  resultFromFetchD;
              // responseD.innerHTML = sRes;
              var imgD = document.createElement("img"); 
              imgD.src = "images/private.png"; 
              var srcD = document.getElementById("responseD"); 
              srcD.appendChild(imgD);
               // Create anchor element. 
               var d = document.createElement('a');  
                  
               // Create the text node for anchor element. 
               var linkD = document.createTextNode("POP IT! Lucky VS Unlucky! 100+ Best Challenges With Friends! Funny Dares by 123 GO! CHALLENGE"); 
                 
               // Append the text node to anchor element. 
               d.appendChild(linkD);  
                 
               // Set the title. 
               d.title = "POP IT! Lucky VS Unlucky! 100+ Best Challenges With Friends! Funny Dares by 123 GO! CHALLENGE";  
                 
               // Set the href property. 
               d.href = "https://www.youtube.com/watch?v=KdY_gzsmHCE";  
                 
               // Append the anchor element to the body. 
               srcD.appendChild(d);  
              return  getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`+resultFromFetchD.linkToNext)
            })
            .then(
              function (resultFromFetchE) {
                console.log(resultFromFetchE);
                // let sRes =  resultFromFetchE;
                // responseE.innerHTML = sRes;
                var imgE = document.createElement("img"); 
                imgE.src = "images/deleted.jpg"; 
                var srcE = document.getElementById("responseE"); 
                srcE.appendChild(imgE);
                 // Create anchor element. 
               var e = document.createElement('a');  
                  
               // Create the text node for anchor element. 
               var linkE = document.createTextNode("Top 15 Arijit Singh 8D Songs | LATEST BOLLYWOOD | 8D Bollywood Songs"); 
                 
               // Append the text node to anchor element. 
               e.appendChild(linkE);  
                 
               // Set the title. 
               e.title = "Top 15 Arijit Singh 8D Songs | LATEST BOLLYWOOD | 8D Bollywood Songs";  
                 
               // Set the href property. 
               e.href = "https://www.youtube.com/watch?v=PF8iM-jaJag";  
                 
               // Append the anchor element to the body. 
               srcE.appendChild(e);  
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

