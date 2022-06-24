const textArea = document.getElementById("comment");
const WORD_LIMIT = 140;

textArea.addEventListener("input", () => {
  let textLn = textArea.value;
  document.getElementById("countText").innerHTML =
    "Total words: " + getWordCount(textLn) + "/" + WORD_LIMIT;
});

textArea.addEventListener("keydown", function (e) {
  let textLn = textArea.value;
  if (getWordCount(textLn) > WORD_LIMIT && e.code !== "Backspace") {
    textArea.style.border = "6px double orange";
    e.preventDefault();
    return;
  } else {
    textArea.style.border = "none";
  }
});

function getWordCount(str) {
  return str.split(" ").filter((word) => word !== "").length;
}

document.querySelector("#form").addEventListener("submit", (event) => {
  const displayArea = document.getElementById("displayComment");
  const inputField = document.querySelector("#name");
  let textLn = textArea.value;
  let inputNameValue = inputField.value;
  displayArea.innerHTML = `${textLn}  __by <small>${inputNameValue}</small>`;

  let displayCommentStyle = `
  display: block;
  width: fit-content;
  height:fit-content;
  background: #FFF8DC;
  color: #0e101a;
  font-size: 1.1rem;
  word-spacing: 00.5rem;
  border: 2px darkred dashed;
  border-radius: 12px 0px 12px 0px;
  margin: 25px;
  padding: 15px;
  `;
  displayArea.style = displayCommentStyle;
  event.preventDefault();
});
