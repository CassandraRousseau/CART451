window.onload = function () {
  console.log("we are loaded");
  const buttonCall = document.querySelector("#search");
  const responseA = document.querySelector("#responseA");
//   });//click
  function getJSONFromServerUsingFetch(fileNameLink) {
    // use ES6 fetch API, which return a promise
    return fetch(fileNameLink).
    then(function(r) 
    { 
      //what is returned here is ALSO A PROMISE 
      return r.json()
    })
  }

  buttonCall.addEventListener("click", function () {
    console.log("clicked");
    let returnedSearch = checkAuth_A(
      document.querySelector("#user-string-A").value
    );
    changeString_A(returnedSearch);
    });
  

function checkAuth_A(userString) {
  setTimeout(() => {
    let answer = "";
    if (userString === "art") {
      getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams({label:"art"})}`)
      .then(
        function (resultFromFetchA) {
          console.log(resultFromFetchA);
          let sResA =  resultFromFetchA;
          for(let i=0; i<sResA.length;i++){
            var srcA = document.getElementById("responseA"); 
            const imgA = [
              'images/pop.jpg',
              'images/private.png',
              'images/123go.jpg',
              'images/private.png',
              'images/deleted.jpg'
                      ];
                      imgA.forEach(image => {
                          const img = document.createElement('img');
                          img.src = image;
                          img.innerHTML = imgA[i];  
                          srcA.appendChild(img);
                               //  // Create anchor element. 
               var a_n = document.createElement('a');  
                  
               //  // Create the text node for anchor element. 
                var linkA = document.createTextNode(srcA[i].link); 
                  
               //  // Append the text node to anchor element. 
               a_n.appendChild(linkA); 
               srcA.appendChild(a_n);   
                          var YTtitleA = document.createElement('p');  
                          // Set the title. 
                          YTtitleA.innerHTML = sResA[i].title;  
                          srcA.appendChild(YTtitleA);   
                               
               var YTdescriptionA = document.createElement('p');  
               // Set the title. 
               YTdescriptionA.innerHTML = sResA[i].description;  
               srcA.appendChild(YTdescriptionA);  
             

                      })
      
    }
  }) }else if(userString === "history"){
   
      getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams({label:"history"})}`)
      .then(
        function (resultFromFetchB) {
          console.log(resultFromFetchB);
          let sResB =  resultFromFetchB;
          for(let i=0; i<sResB.length;i++){
            var srcB = document.getElementById("responseA"); 
     var imgB = document.createElement("img"); 
          imgB.src = "images/deleted.jpg"; 
          var srcB = document.getElementById("responseA"); 
          srcB.appendChild(imgB);
                  
              //  // Create anchor element. 
              //  var b_n = document.createElement('a');  
                  
              //  // Create the text node for anchor element. 
              //  var linkB_n = document.createTextNode(sResB[i].link); 
                 
              //  // Append the text node to anchor element. 
              //  b_n.appendChild(linkB_n); 
              //  srcB.appendChild(b_n);   
              var linkB = document.createElement('p');  
              // Set the title. 
              linkB.innerHTML = sResB[i].link;  
              srcB.appendChild(linkB);   

               var YTtitleB = document.createElement('p');  
               // Set the title. 
               YTtitleB.innerHTML = sResB[i].title;  
               srcB.appendChild(YTtitleB);   
               
               
               var YTdescriptionB = document.createElement('p');  
               // Set the title. 
               YTdescriptionB.innerHTML = sResB[i].description;  
               srcB.appendChild(YTdescriptionB);   

    }}) }
    else if(userString === "food"){

      getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams({label:"food"})}`)
      .then(
        function (resultFromFetchC) {
          console.log(resultFromFetchC);
          let sResC =  resultFromFetchC;
          for(let i=0; i<sResC.length;i++){
            var srcC = document.getElementById("responseA"); 
            const imgC = [
              'images/deleted.jpg',
              'images/mealworms.jpg',
              'images/deleted.jpg'
                      ];
               
                      imgC.forEach(image => {
                          const img = document.createElement('img');
                          img.src = image;
                          img.innerHTML = imgC[i];  
                          srcC.appendChild(img);
                            //  // Create anchor element. 
              //  var c_n = document.createElement('a');  
                  
              //  // Create the text node for anchor element. 
              //  var linkC_n = document.createTextNode(srcC[i].link); 
                 
              //  // Append the text node to anchor element. 
              //  c_n.appendChild(linkC_n); 
              //  srcC.appendChild(c_n);   
              var linkC = document.createElement('p');  
              // Set the title. 
              linkC.innerHTML = sResC[i].link;  
              srcC.appendChild(linkC); 

               var YTtitleC = document.createElement('p');  
               // Set the title. 
               YTtitleC.innerHTML = sResC[i].title;  
               srcC.appendChild(YTtitleC);   
               
               
               var YTdescriptionC = document.createElement('p');  
               // Set the title. 
               YTdescriptionC.innerHTML = sResC[i].description;  
               srcC.appendChild(YTdescriptionC);   
                      })
          
            

    }}) }
    else if(userString === "travel"){
      getJSONFromServerUsingFetch(`http://localhost:4200/sendSearch?${new URLSearchParams({label:"travel"})}`)
      .then(
        function (resultFromFetchD) {
          console.log(resultFromFetchD);
          let sResD =  resultFromFetchD;
          // responseA.innerHTML = sRes;
          for(let i=0; i<sResD.length;i++){
            var srcD = document.getElementById("responseA"); 
            const imgD = [
              'images/purulia.jpg',
              'images/alaska.jpg',
              'images/200.jpg'
                      ];
               
                      imgD.forEach(image => {
                          const img = document.createElement('img');
                          img.src = image;
                          img.innerHTML = imgD[i];  
                          srcD.appendChild(img);
                          //  // Create anchor element. 
              //  var d_n = document.createElement('a');  
                  
              //  // Create the text node for anchor element. 
              //  var linkD_n = document.createTextNode(sResD[i].link); 
                 
              //  // Append the text node to anchor element. 
              //  d_n.appendChild(linkD_n); 
              //  srcD.appendChild(d_n);   

              var linkD = document.createElement('p');  
              // Set the title. 
              linkD.innerHTML = sResD[i].link;  
              srcD.appendChild(linkD); 

               var YTtitleD = document.createElement('p');  
               // Set the title. 
               YTtitleD.innerHTML = sResD[i].title;  
               srcD.appendChild(YTtitleD);   
               
               
               var YTdescriptionD = document.createElement('p');  
               // Set the title. 
               YTdescriptionD.innerHTML = sResD[i].description;  
               srcD.appendChild(YTdescriptionD);   
                      })
              

    }}) }
    else {
      answer = "Error, try again (you need to type the words without caps)";
    let wrongAnswer = answer;
    responseA.innerHTML = wrongAnswer;
    }
    console.log("time-out one-a complete " + answer);
    return answer;
  }, 2000); // let 5 secs go past then send back
}

function changeString_A(searchString) {
  //console.log(userString);
  setTimeout(() => {
    let userSearch = searchString.split("").join("*");
    console.log("time-out two-a complete " + searchString);
    return answer;
  }, 2000); // let 5 secs go past then send back
}
}

