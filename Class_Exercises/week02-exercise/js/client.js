window.onload =  function(){
    // get the myFavs element and add an event listener (click) to it:
      document.getElementById("myFavs").addEventListener("click", async function(){
        // get the values of the two input fields
        let favFruit =   document.getElementById("fruit").value;
        let favVeg =   document.getElementById("veg").value;
        console.log(favVeg);
        console.log(favFruit);

        let jsonVals = {fruits : favFruit, vegs : favVeg}


        let response = await fetch("http://localhost:4200/passTheFood?"+new URLSearchParams(jsonVals));
console.log(await response.text());

       // let  response = await fetch('http://localhost:4200?' + new URLSearchParams(jsonVals));
    //    let  response = await fetch(`http://localhost:4200/fruits/${favFruit}/vegs/${favVeg}`);
    //     console.log("the response::: ")
    //     console.log(await response.text());
        

      })//click function
    }