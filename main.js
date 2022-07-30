let btns = document.querySelectorAll(".calculateBtn");
let prices = document.querySelectorAll(".price");
let qntys = document.querySelectorAll(".qnty");
let amnt = document.querySelectorAll(".amt");
let totalOut = document.getElementById("total");
let products = document.querySelectorAll(".product")
let total = 0;

function calculate() {

    if (prices[this.index].value >= 0 && qntys[this.index].value >= 0) {
        let amt = prices[this.index].value * qntys[this.index].value;
        amnt[this.index].innerText = amt;

        amnt.forEach((amt) => {
            total = total + parseInt(amt.innerText);
        })

        totalOut.innerText = total;
        total = 0;
    }else{
        alert("Please Enter Valid Input for "+products[this.index].innerText)
        prices[this.index].value = 0;
        qntys[this.index].value = 0;
    }
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", calculate)
    btn.index = i;
});

// clear Button

let clearBtn = document.getElementById("clearBtn")

clearBtn.addEventListener("click", () => {
    prices.forEach((price) => {
        price.value = "0"
    })

    qntys.forEach((qnty) => {
        qnty.value = "0"
    })

    amnt.forEach((amt) => {
        amt.innerText = "0"
    })

    totalOut.innerText = "0"
})

// calculate Button

let calcAllBtn = document.getElementById("calcAllBtn")

calcAllBtn.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.click()
    })
})

//...............................................