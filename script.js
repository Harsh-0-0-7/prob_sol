// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const solutionForm = document.getElementById("solution-form");
    const solutionsList = document.getElementById("solutions-list");

    // Load existing solutions from localStorage when the page loads
    loadSolutions();

    // Handle form submission
    solutionForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Create a solution object with form data
        const solution = {
            title: document.getElementById("problem-title").value.trim(),
            language: document.getElementById("language").value.trim(),
            code: document.getElementById("code-solution").value.trim(),
            timestamp: new Date().toLocaleString()
        };

        // Save the solution to localStorage
        saveSolution(solution);

        // Render the new solution on the page
        renderSolution(solution);

        // Clear the form fields
        solutionForm.reset();
    });

    // Function to save a solution to localStorage
    function saveSolution(solution) {
        let solutions = JSON.parse(localStorage.getItem('codeSolutions')) || [];
        solutions.push(solution);
        localStorage.setItem('codeSolutions', JSON.stringify(solutions));
    }

    // Function to load all solutions from localStorage and display them
    function loadSolutions() {
        let solutions = JSON.parse(localStorage.getItem('codeSolutions')) || [];
        solutions.forEach(renderSolution);
    }

    // Function to render a single solution on the page
    function renderSolution(solution) {
        const solutionCard = document.createElement("div");
        solutionCard.classList.add("solution");

        solutionCard.innerHTML = `
            <h3>${solution.title}</h3>
            <p><strong>Language:</strong> ${solution.language}</p>
            <p><strong>Posted:</strong> ${solution.timestamp}</p>
            <pre>${solution.code}</pre>
        `;

        solutionsList.appendChild(solutionCard);
    }
});