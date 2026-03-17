function validateInput(value, errorId) {
    if (value === "" || value < 0 || value > 100) {
        document.getElementById(errorId).innerText =
            "Marks must be between 0 and 100";
        return false;
    } else {
        document.getElementById(errorId).innerText = "";
        return true;
    }
}

function calculateGrade() {

    let subjects = [
        {id: "dsa", error: "dsaError"},
        {id: "oop", error: "oopError"},
        {id: "sem", error: "semError"},
        {id: "dbms", error: "dbmsError"},
        {id: "os", error: "osError"}
    ];

    let total = 0;
    let valid = true;

    subjects.forEach(sub => {
        let value = document.getElementById(sub.id).value;
        if (!validateInput(value, sub.error)) {
            valid = false;
        }
        total += Number(value);
    });

    if (!valid) return;

    let percentage = total / 5;
    let grade;

    if (percentage > 90) grade = "O";
    else if (percentage >= 85) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 75) grade = "B+";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    let resultBox = document.getElementById("result");
    resultBox.style.display = "block";

    // Dynamic color
    if (grade === "O" || grade === "A+") {
        resultBox.style.background = "#28a745";
    } else if (grade === "A" || grade === "B+") {
        resultBox.style.background = "#17a2b8";
    } else if (grade === "B" || grade === "C") {
        resultBox.style.background = "#ffc107";
    } else {
        resultBox.style.background = "#dc3545";
    }

    resultBox.innerHTML =
        "Total Marks: " + total +
        "<br>Percentage: " + percentage.toFixed(2) + "%" +
        "<br>Grade: " + grade;
}