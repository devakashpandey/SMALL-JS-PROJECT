
// function detail()
// {
//   var name = document.querySelector("#text").value;
//   var flavour = document.querySelector("#flavour").value;
//   let result = document.querySelector(".result");

//   result.innerHTML = ` <b> Mr. ${name} Choose ${flavour} Flavour. </b>`
//   result.style.color = "red";


//   var name = document.querySelector("#text").value = "";
//   var flavour = document.querySelector("#flavour").value = "";

// }

let flavour = document.querySelector("#flavour");

flavour.addEventListener("change", function()
{
  var name = document.querySelector("#text").value;
  var flavour = document.querySelector("#flavour").value;
  let result = document.querySelector(".result");

  result.innerHTML = ` <b> Mr. ${name} Choose ${flavour} Flavour. </b>`
  result.style.color = "red";

  var name = document.querySelector("#text").value = "";
  var flavour = document.querySelector("#flavour").value = "";

})