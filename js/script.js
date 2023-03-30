const input = document.querySelector("input");
const button = document.querySelector(".btn");
const ul = document.querySelector(".myul");
const li = ul.children;
const cross = document.getElementsByClassName("cross");
button.addEventListener("click", (event) => {
  event.preventDefault();
  let task = document.createTextNode(input.value);
  let li = document.createElement("li");
  let span = document.createElement("span");
  if (input.value === "") {
    alert("Please!Write some task");
  } else {
    li.appendChild(task);
    const myclasses = ["list", "list:hover"];
    li.classList.add(...myclasses);
    let txt = document.createTextNode("x");
    span.appendChild(txt);
    const classes = ["cross", "cross:hover"];
    span.classList.add(...classes);
    li.appendChild(span);
    ul.appendChild(li);
    input.value = "";
  }
  span.onclick = function () {
    li.style.display = "none";
  };
  li.onclick = function () {
    li.classList.toggle("checked");
  };
});
for (let i = 0; i < cross.length; i++) {
  cross[i].onclick = function (e) {
    e.target.parentElement.style.display = "none";
  };
}
for (let i = 0; i < li.length; i++) {
  li[i].onclick = function (event) {
    event.target.classList.toggle("checked");
  };
}
