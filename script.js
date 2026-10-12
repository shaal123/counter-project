
let count = 0;

const countDisplay = document.getElementById("count");
const error = document.getElementById("error");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const clearBtn = document.getElementById("clear");

function updateCount() {
    countDisplay.textContent = count;
    clearBtn.style.display = count === 0 ? "none" : "inline-block";
}

incrementBtn.addEventListener("click", function () {
    count++;
    error.textContent = "";
    updateCount();
});

decrementBtn.addEventListener("click", function () {
    if (count === 0) {
        error.textContent = "Error : Cannot go below 0";
    } else {
        count--;
        error.textContent = "";
        updateCount();
    }
});

clearBtn.addEventListener("click", function () {
    count = 0;
    error.textContent = "";
    updateCount();
});

updateCount();
