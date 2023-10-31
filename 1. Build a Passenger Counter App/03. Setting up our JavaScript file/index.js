let count = 0;

let countNum = document.getElementById("count-el")

function clickBtn() {
  console.log("the button is clicked!")
  count++;
  countNum.innerHTML = count
}
