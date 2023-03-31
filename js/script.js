const input = document.querySelector("input");
const button = document.querySelector(".btn");
const ul = document.querySelector(".myul");

// Cache frequently used elements
const li = ul.children;
const cross = ul.getElementsByClassName("cross");

button.addEventListener("click", (event) => {
  event.preventDefault();
  let task = document.createTextNode(input.value);
  let li = document.createElement("li");
  let span = document.createElement("span");
  if (input.value === "") {
    alert("Please!Write some task");//if input field is empty
  } else {
    li.appendChild(task);
    const myclasses = ["list", "list:hover"];
    li.classList.add(...myclasses);//using spread operator 
    let txt = document.createTextNode("x");
    span.appendChild(txt)
    const classes = ["cross", "cross:hover"];
    span.classList.add(...classes);
    li.appendChild(span);
    ul.appendChild(li);
    input.value = "";//make empty for another task
  }
});

// event delegation for li and cross button
ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("cross")) {
    event.target.parentElement.style.display = "none";//span is parentelement
  } else if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});


