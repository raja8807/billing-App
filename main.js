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
    let amt = prices[this.index].value * qntys[this.index].value;
    amnt[this.index].innerText = amt;
    
    amnt.forEach((amt)=>{ 
        total = total + parseInt(amt.innerText);
    })

    totalOut.innerText = total;
    total = 0;

}
btns.forEach((btn,i)=>{
    btn.addEventListener("click" , calculate)
    btn.index = i;
});

let clearBtn = document.getElementById("clearBtn")

function clear(){
    prices.forEach((price)=>{
        price.value = ""
    })

    qntys.forEach((qnty)=>{
        qnty.value = ""
    })
    
    amnt.forEach((amt)=>{
        amt.innerText = ""
    })

    totalOut.innerText = ""
}

clearBtn.addEventListener("click", clear)
//...............................................