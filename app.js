let input = document.querySelector("input");
let btn = document.querySelector(".btn1");
let list = document.querySelector("li");
let ol = document.querySelector("ol");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.classList.add("list-item");
  li.innerText = input.value;
  ol.appendChild(li);
  let i = document.createElement("i");
  i.classList.add("fa-solid");
  i.classList.add("fa-xmark");

  li.appendChild(i);
  input.value = "";
});

ol.addEventListener("click", function (event) {
  // console.dir(event.target);
  // console.log(event.target.nodeName);

  if (event.target.nodeName == "I") {
    event.target.parentElement.remove();
  }
});
