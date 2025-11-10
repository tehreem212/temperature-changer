// let temperature = document.querySelector("#temperature").value;


function convertTemp() {
    let temperature = parseFloat(document.querySelector("#temperature").value);
    let unit = document.querySelector("#unit").value;

    if (isNaN(temperature)) {
        document.getElementById("result").innerHTML = "Enter a valid number";
        return;
    }

    if (unit === "c") {
        let result = (temperature * 9/5) + 32;
        document.getElementById("result").innerHTML = result.toFixed(2) + " °F";
    } else {
        let result = (temperature - 32) * (5/9);
        document.getElementById("result").innerHTML = result.toFixed(2) + " °C";
    }
}
