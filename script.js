const addBtn = document.querySelector("#add-btn");
const nameEl = document.querySelector("#input-name");
const dateEl = document.querySelector("#input-date");
const amountEl = document.querySelector("#input-amount");
const tabelEl = document.querySelector("#tabeltb");

let delBtns = document.querySelectorAll(".delBtn");
let trEl = document.querySelectorAll(".item");

let itemName, itemDate, itemAmount;

let newTd = document.createElement("td");
if (trEl.length == 0) {
  newTd.innerText = "No expenses added yet!";
  newTd.style.backgroundColor = "rgba(206, 202, 202, 0.452)";

  document.querySelector(".tabel").appendChild(newTd);
} else {
  newTd.remove();
}

addBtn.addEventListener("click", () => {
  itemName = nameEl.value;
  itemDate = dateEl.value;
  itemAmount = "$" + amountEl.value;

  let newTr = document.createElement("tr");
  newTr.classList.add("item");
  let newTdName = document.createElement("td");
  newTdName.innerText = itemName;
  let newTdDate = document.createElement("td");
  newTdDate.innerText = itemDate;
  let newTdAmount = document.createElement("td");
  newTdAmount.innerText = itemAmount;
  let newTdBtn = document.createElement("td");
  let newDelBtn = document.createElement("button");
  newTdBtn.appendChild(newDelBtn);
  newDelBtn.classList.add("delBtn");
  newDelBtn.innerText = "X";

  tabelEl.appendChild(newTr);
  newTr.appendChild(newTdName);
  newTr.appendChild(newTdDate);
  newTr.appendChild(newTdAmount);
  newTr.appendChild(newTdBtn);

  delBtns = document.querySelectorAll(".delBtn");
  trEl = document.querySelectorAll(".item");
  for (let i = 0; i < delBtns.length; ++i) {
    delBtns[i].addEventListener("click", () => {
      trEl[i].remove();
      //   delBtns = document.querySelectorAll(".delBtn");
      //   trEl = document.querySelectorAll(".item");
      console.log(trEl);

      if (trEl.length == 0) {
        newTd = document.createElement("td");
        newTd.innerText = "No expenses added yet!";
        newTd.style.backgroundColor = "rgba(206, 202, 202, 0.452)";

        document.querySelector(".tabel").appendChild(newTd);
      } else {
        newTd.remove();
      }
    });
    delBtns = document.querySelectorAll(".delBtn");
    trEl = document.querySelectorAll(".item");
  }

  if (trEl.length == 0) {
    newTd = document.createElement("td");
    newTd.innerText = "No expenses added yet!";
    newTd.style.backgroundColor = "rgba(206, 202, 202, 0.452)";

    document.querySelector(".tabel").appendChild(newTd);
  } else {
    newTd.remove();
  }
});

// for (let i = 0; i < delBtns.length; ++i) {
//   delBtns[i].addEventListener("click", () => {
//     trEl[i].remove();
//     delBtns = document.querySelectorAll(".delBtn");
//     trEl = document.querySelectorAll(".item");
//     console.log(trEl);

//     if (trEl.length == 0) {
//       document.querySelector(".tabel").appendChild(newTd);
//     } else {
//       newTd.remove();
//     }
//   });
// }
