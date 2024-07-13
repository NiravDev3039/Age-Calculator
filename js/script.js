const formContainer = document.getElementById('formContainer');
const ageForm = document.getElementById('ageForm');
const dobInput = document.getElementById('dob');
const resultDiv = document.getElementById('result');
const clearButton = document.getElementById('clearButton');
const themeToggle = document.getElementById('themeToggle');
const title = document.getElementById('title');
const dobLabel = document.getElementById('dobLabel');

function calculateAge(event) {
    event.preventDefault();
    const dob = new Date(dobInput.value);
    const today = new Date();

    if (dob > today) {
        resultDiv.textContent = "Date of Birth cannot be in the future.";
        return;
    }

    const ageYears = today.getFullYear() - dob.getFullYear();
    const ageMonths = today.getMonth() - dob.getMonth();
    const ageDays = today.getDate() - dob.getDate();
    const totalDays = Math.floor((today - dob) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    let years = ageYears;
    let months = ageMonths;
    let days = ageDays;

    if (ageDays < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        years--;
        months += 12;
    }

    resultDiv.textContent = `You are ${years} years, ${months} months, and ${days} days old. (${totalDays} days or ${totalWeeks} weeks)`;
}

function clearForm() {
    dobInput.value = '';
    resultDiv.textContent = '';
}

function toggleTheme() {
    document.body.classList.toggle('bg-gradient-dark');
    document.body.classList.toggle('bg-gradient-light');
    formContainer.classList.toggle('dark');
    dobInput.classList.toggle('dark');
    title.classList.toggle('text-light');
    title.classList.toggle('text-dark');
    dobLabel.classList.toggle('text-light');
    dobLabel.classList.toggle('text-dark');
    resultDiv.classList.toggle('text-light');
    resultDiv.classList.toggle('text-dark');
}

ageForm.addEventListener('submit', calculateAge);
clearButton.addEventListener('click', clearForm);
themeToggle.addEventListener('click', toggleTheme);