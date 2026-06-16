function showPage(page) {

    document.getElementById("home").style.display = "none";
    document.getElementById("measure").style.display = "none";
    document.getElementById("temp").style.display = "none";
    document.getElementById("timer").style.display = "none";

    if (page === "home") {
        document.getElementById("home").style.display = "flex";
    } else {
        document.getElementById(page).style.display = "block";
    }
}

function startApp() {

    document.getElementById("intro").style.display = "none";

    document.getElementById("home").style.display = "flex";
}

function convert() {

    let ingredient = document.getElementById("ingredient").value;

    let amount = parseFloat(
        document.getElementById("amount").value
    );

    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;

    let result = 0;

    // ingredient conversion factors
    let factor = 0;

    if (ingredient === "APflour") {
        factor = 120;
    }

    if (ingredient === "sugar") {
        factor = 200;
    }

    if (ingredient === "butter") {
        factor = 227;
    }

    // cups → grams
    if (from === "cups" && to === "grams") {
        result = amount * factor;
    }

    // grams → cups
    if (from === "grams" && to === "cups") {
        result = amount / factor;
    }

    document.getElementById("result").innerHTML =
        result.toFixed(2) + " " + to;
}

function convertTemp() {

    let temp = parseFloat(
        document.getElementById("tempInput").value
    );

    let from = document.getElementById("tempFrom").value;

    let to = document.getElementById("tempTo").value;

    let result;

    if (from === to) {

        result = temp;

    } else if (from === "c" && to === "f") {

        result = (temp * 9/5) + 32;

    } else if (from === "f" && to === "c") {

        result = (temp - 32) * 5/9;

    }

    document.getElementById("tempResult").innerHTML =
        result.toFixed(2);
}

let timerInterval;

function startTimer() {

    clearInterval(timerInterval);

    let minutes = parseInt(
        document.getElementById("timerMinutes").value
    );

    let timeLeft = minutes * 60;

    timerInterval = setInterval(function () {

        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;

        document.getElementById("countdown").innerHTML =
            mins.toString().padStart(2, "0") +
            ":" +
            secs.toString().padStart(2, "0");

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(timerInterval);

            document.getElementById("countdown").innerHTML =
                "Done! 🍪";

            alert("Your baking timer is finished! 🍪");
        }

    }, 1000);
}

function resetTimer() {

    clearInterval(timerInterval);

    document.getElementById("countdown").innerHTML =
        "00:00";

    document.getElementById("timerMinutes").value = "";
}
