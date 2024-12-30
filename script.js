// Select the form and solutions list
const solutionForm = document.getElementById("solution-form");
const solutionsList = document.getElementById("solutions-list");

// Handle form submission
solutionForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const problemTitle = document.getElementById("problem-title").value.trim();
    const language = document.getElementById("language").value.trim();
    const codeSolution = document.getElementById("code-solution").value.trim();

    // Create a new solution card
    const solutionCard = document.createElement("div");
    solutionCard.classList.add("solution");

    solutionCard.innerHTML = `
        <h3>${problemTitle}</h3>
        <p><strong>Language:</strong> ${language}</p>
        <pre>${codeSolution}</pre>
    `;

    // Append the solution card to the solutions list
    solutionsList.appendChild(solutionCard);

    // Clear the form fields
    solutionForm.reset();
});