function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

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
    resultBox.style.background = "";

    var gradeBadgeClass;
    if (grade === "A") {
        gradeBadgeClass = "grade-badge grade-badge-a";
    } else if (grade === "B") {
        gradeBadgeClass = "grade-badge grade-badge-b";
    } else if (grade === "C" || grade === "D") {
        gradeBadgeClass = "grade-badge grade-badge-cd";
    } else {
        gradeBadgeClass = "grade-badge grade-badge-ef";
    }

    resultBox.innerHTML =
        '<h3 class="report-heading">Grade Report</h3>' +
        '<div class="report-row"><span class="report-label">Student Name</span><span class="report-value">' + escapeHtml(name) + '</span></div>' +
        '<div class="report-row"><span class="report-label">Roll Number</span><span class="report-value">' + escapeHtml(roll) + '</span></div>' +
        '<div class="report-row"><span class="report-label">Academic Year</span><span class="report-value">' + escapeHtml(year) + '</span></div>' +
        '<div class="report-row"><span class="report-label">Total Marks</span><span class="report-value">' + total + ' / 500</span></div>' +
        '<div class="report-row"><span class="report-label">Percentage</span><span class="report-value percentage-value">' + percentage.toFixed(2) + '%</span></div>' +
        '<div class="report-row"><span class="report-label">Final Grade</span><span class="' + gradeBadgeClass + '">' + escapeHtml(grade) + '</span></div>';
}