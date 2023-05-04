const btns = document.querySelectorAll("button");
const display = document.querySelector("#display");

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function () {

        let value = this.innerHTML;

        if (value === "AC") {
            display.value = "";
        } else if (value === "x") {
            value = "*"
            display.value += value
        }
        else if (value === "÷") {
            value = "/"
            display.value += value
        }
        else if (value === "=") {
            display.value = eval(display.value);
        }
        else if (value === "CE") {
            display.value = display.value.toString().slice(0, -1);
        }
        else {
            display.value += value;
        }
    })
}
