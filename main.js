let btns = document.querySelectorAll(".calculateBtn");
let prices = document.querySelectorAll(".price");
let qntys = document.querySelectorAll(".qnty");
let amnt = document.querySelectorAll(".amt");
let totalOut = document.getElementById("total");
let products = document.querySelectorAll(".product");
let delBtns = document.querySelectorAll(".delBtn")

function calculate(){
    let total = 0;
    // console.log(this);
    if (prices[this.index].value >= 0 && qntys[this.index].value >= 0) {
        let amt = prices[this.index].value * qntys[this.index].value;
        amnt[this.index].innerText = amt;
        products[this.index].style.color = "black"

        amnt.forEach((amt) => {
            total = total + parseInt(amt.innerText);
        })
        totalOut.innerText = total;

    } else {
        alert("Please Enter Valid Input for " + products[this.index].innerText);
        prices[this.index].value = 0;
        qntys[this.index].value = 0;
        products[this.index].style.color = "red"
    }
}

function addEvent() {
    btns.forEach((btn, i) => {
        btn.addEventListener("click", calculate);
        btn.index = i;
    });

    delBtns.forEach((delBtn, i) => {
        delBtn.addEventListener("click", deleteProduct)
        delBtn.index = i;
    })
}

addEvent()

// clear Button

let clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
    prices.forEach((price) => {
        price.value = "0";
    })

    qntys.forEach((qnty) => {
        qnty.value = "0";
    })

    amnt.forEach((amt) => {
        amt.innerText = "0";
    })

    totalOut.innerText = "0";

    products.forEach((product) => {
        product.style.color = "black"
    })
})

// calculate All Button

let calcAllBtn = document.getElementById("calcAllBtn");

calcAllBtn.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.click();
    })
})

// Create Button

let createBtn = document.getElementById("createBtn")
let table = document.getElementById("table")
let ProductData = document.getElementById("ProductData")
let data = ProductData.innerHTML

function addProduct() {

    let newProduct = document.getElementById("newProduct")
    let newProductName = newProduct.value
    // console.log(newProductName);

    if (newProductName != "") {
        let newRow = document.createElement("tr")
        newRow.setAttribute("class", "data")
        newRow.innerHTML = data
        newRow.querySelector(".product").innerText = newProductName;

        table.appendChild(newRow)

        btns = document.querySelectorAll(".calculateBtn");
        prices = document.querySelectorAll(".price");
        qntys = document.querySelectorAll(".qnty");
        amnt = document.querySelectorAll(".amt");
        totalOut = document.getElementById("total");
        products = document.querySelectorAll(".product");
        delBtns = document.querySelectorAll(".delBtn");

        newProduct.value = ""

        addEvent()

    } else {
        alert("Please enter a Product Name")
    }

}

createBtn.addEventListener("click", addProduct)

// delete Button

function deleteProduct() {

    let product = this.parentNode.parentNode;

    product.remove()

    btns = document.querySelectorAll(".calculateBtn");
    prices = document.querySelectorAll(".price");
    qntys = document.querySelectorAll(".qnty");
    amnt = document.querySelectorAll(".amt");
    totalOut = document.getElementById("total");
    products = document.querySelectorAll(".product");
    delBtns = document.querySelectorAll(".delBtn");

    addEvent();

    calcAllBtn.click();
}

//...............................................