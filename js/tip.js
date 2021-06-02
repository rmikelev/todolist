const input = document.querySelector("#input");
const calcButton15 = document.querySelector("#calcButton15");
const calcButton20 = document.querySelector("#calcButton20");
const calcButton25 = document.querySelector("#calcButton25");
const tip = document.querySelector("#tip");
const warning = document.querySelector("#warning");

console.log(input);
console.log(calcButton15);
console.log(calcButton20);
console.log(calcButton25);
console.log(tip);
console.log(warning);

calcButton15.addEventListener("click",calculateTip);
calcButton20.addEventListener("click",calculateTip);
calcButton25.addEventListener("click",calculateTip);

function calculateTip (event) {
    // do some error checking first
    if(isNaN(input.value)){
      warning.hidden = false;
      // alert("That's not a number!");
    } else if (input.value === ""){
      warning.hidden = false;
      // alert("Enter a number!");
    } else {
      // multiply input by 15% and then output that number to the tip span
      console.log(event);
      console.log(event.target.id);
      
      if(event.target.id === "calcButton15")
      tip.innerText = (input.value * .15).toFixed(2);
      else if (event.target.id === "calcButton20")
      tip.innerText = (input.value * .20).toFixed(2);
      else if (event.target.id === "calcButton25")
      tip.innerText = (input.value * .25).toFixed(2);
      
      warning.hidden = true;
    }
  }
  