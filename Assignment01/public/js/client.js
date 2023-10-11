window.onload = function () {
  console.log("we are loaded");

  //GET
  document.querySelector("#findData").addEventListener('click', 
  
  async function(){
    let search = {cat_send:document.querySelector("#category_type").value};
    let  response = await fetch(`http://localhost:4200/sendSearch?${new URLSearchParams(search)}`);
    console.log("the response::: ")
    console.log(await response.json());
});//click

 
}
   

