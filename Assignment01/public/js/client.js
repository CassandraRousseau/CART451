window.onload = function () {
  console.log("we are loaded");

  //GET
  document.querySelector("#findData").addEventListener('click', 
  
  async function(){
    const results = document.getElementById("results");
    let  response = await fetch(`http://localhost:4200/sendSearch?${new URLSearchParams()}`);
    let responseText = await response.text(response)+ "\n\n";;
    
    // results.innerHTML = responseText;
    // Add a blank space between each line of the response text
responseText = responseText.replace(/\n/g, '');

console.log("the response::: ", responseText);

results.innerHTML = responseText;
// // Split the response text into separate paragraphs
// let paragraphs = responseText.split('<br/>');

// // Create an array of paragraph elements
// let paragraphElements = paragraphs.map(paragraph => {
//   let p = document.createElement('p');
//   p.textContent = paragraph;
//   return p;
// });

// // Append the paragraph elements to the response container
// paragraphElements.forEach(p => {
//   results.appendChild(p);
// });

  });//click

}
