let btns = document.querySelectorAll(".calculateBtn")

function calculate(){
    let qty = parseInt(this.parentNode.previousElementSibling.firstChild.value);
    let price = parseInt(this.parentNode.previousElementSibling.previousElementSibling.firstChild.value);
    let amount = qty * price;
    console.log(amount);
    this.parentNode.nextElementSibling.firstChild.innerText = amount;
}

function addEvent(btn) {
    btn.addEventListener("click" , calculate)
}

btns.forEach(addEvent)