let ppCount = document.getElementById("ppcount");
let saveR = document.getElementById("saver");
let count = 0;

function increment() {
    count++;
    ppCount.innerText = count;
}

function save() {
    let previousStep = count + " - ";
    saveR.textContent += previousStep;
    ppCount.innerText -= count;
    count -= count;
}

