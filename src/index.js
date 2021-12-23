import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// delete element
const deleteInCompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

// add incomplete func
const createIncompleteList = (text) => {
  // div
  const div = document.createElement("div");
  div.className = "list-row";

  // li
  const li = document.createElement("li");
  li.innerText = text;

  // button complete
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    // get targetdiv
    deleteInCompleteList(completeBtn.parentNode);

    const addTarget = completeBtn.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // div
    addTarget.textContent = null; // init
    // li
    const li = document.createElement("li");
    li.innerText = text;
    // button
    const returnBtn = document.createElement("button");
    returnBtn.innerText = "戻す";
    returnBtn.addEventListener("click", () => {
      // complete-list delete
      deleteCompleteList(returnBtn.parentNode);

      // target get
      const target = returnBtn.parentNode;

      // text get
      const text = target.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // div > li
    addTarget.appendChild(li);
    // div > btn
    addTarget.appendChild(returnBtn);

    // HTML
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button complete
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    deleteInCompleteList(deleteBtn.parentNode);
  });

  // div > li
  div.appendChild(li);
  // div > btn
  div.appendChild(completeBtn);
  // div > btn
  div.appendChild(deleteBtn);

  // HTML
  document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add").addEventListener("click", () => onClickAdd());
