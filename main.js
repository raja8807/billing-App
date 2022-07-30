// let btns = document.querySelectorAll(".calculateBtn");
// function calculate(){
//     let qty = parseInt(this.parentNode.previousElementSibling.firstChild.value);
//     let price = parseInt(this.parentNode.previousElementSibling.previousElementSibling.firstChild.value);
//     let amount = qty * price;
//     this.parentNode.nextElementSibling.firstChild.innerText = amount;
// }
// btns.forEach((btn)=>{
//     btn.addEventListener("click" , calculate)
// });

//.................................................................

let btns = document.querySelectorAll(".calculateBtn");
let prices = document.querySelectorAll(".price")
let qntys = document.querySelectorAll(".qnty")
let amnt = document.querySelectorAll(".amt")
let totalOut = document.getElementById("total")
let total = 0;

function calculate(){
    let amt = prices[this.i].value * qntys[this.i].value;
    amnt[this.i].innerText = amt;
    total = total + amt;
    totalOut.innerText = total;
}
btns.forEach((btn,index)=>{
    btn.addEventListener("click" , calculate)
    btn.i = index;
});

//...............................................