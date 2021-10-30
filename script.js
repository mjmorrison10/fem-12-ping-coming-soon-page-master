const form = document.querySelector(".email-form");
const formz = document.querySelector(".email-form");
const input = document.querySelector(".email");

formz.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = input.value;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email)) {
    input.parentElement.children[0].style.display = "none";
    input.parentElement.children[1].classList.remove("error");
  } else {
    input.parentElement.children[0].style.display = "flex";
    input.parentElement.children[1].classList.add("error");
  }
});

// few