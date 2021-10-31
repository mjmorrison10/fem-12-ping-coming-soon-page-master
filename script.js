const form = document.querySelector(".email-form"); //selects the form
const formz = document.querySelector(".email-form"); 
const input = document.querySelector(".email"); //email input

formz.addEventListener("submit", (e) => { 
  e.preventDefault(); // prevent the default action of the form
  const email = input.value; // get the value of the input
  const emailRegex = 
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
  if (emailRegex.test(email)) {
    input.parentElement.children[0].style.display = "none"; //hide the error message
    input.parentElement.children[1].classList.remove("error"); //remove error class
  } else {
    input.parentElement.children[0].style.display = "flex"; //show the error message
    input.parentElement.children[1].classList.add("error"); //add error class
  } 
});  

