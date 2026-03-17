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

    var name = document.getElementById("studentName").value.trim();
    var roll = document.getElementById("rollNumber").value.trim();
    var year = document.getElementById("academicYear").value.trim();
    var valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Student Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (roll === "") {
        document.getElementById("rollError").innerText = "Roll Number is required";
        valid = false;
    } else {
        document.getElementById("rollError").innerText = "";
    }

    if (year === "") {
        document.getElementById("yearError").innerText = "Academic Year is required";
        valid = false;
    } else {
        document.getElementById("yearError").innerText = "";
    }

    var subjects = [
        {id: "dsa", error: "dsaError"},
        {id: "oop", error: "oopError"},
        {id: "sem", error: "semError"},
        {id: "dbms", error: "dbmsError"},
        {id: "os", error: "osError"}
    ];

    var total = 0;

    subjects.forEach(function(sub) {
        var value = document.getElementById(sub.id).value;
        if (!validateInput(value, sub.error)) {
            valid = false;
        }
        total += Number(value);
    });

    if (!valid) return;

    var percentage = total / 5;
    var grade;

    if (percentage >= 90) grade = "A";
    else if (percentage >= 80) grade = "B";
    else if (percentage >= 65) grade = "C";
    else if (percentage > 50) grade = "D";
    else if (percentage > 35) grade = "E";
    else grade = "F";

    var resultBox = document.getElementById("result");
    resultBox.style.display = "block";

    if (grade === "A") {
        resultBox.style.background = "#28a745";
    } else if (grade === "B") {
        resultBox.style.background = "#17a2b8";
    } else if (grade === "C" || grade === "D") {
        resultBox.style.background = "#ffc107";
    } else {
        resultBox.style.background = "#dc3545";
    }

    resultBox.innerHTML =
        "Student Name: " + name +
        "<br>Roll Number: " + roll +
        "<br>Academic Year: " + year +
        "<br>Total Marks: " + total + " / 500" +
        "<br>Percentage: " + percentage.toFixed(2) + "%" +
        "<br>Final Grade: " + grade;
}