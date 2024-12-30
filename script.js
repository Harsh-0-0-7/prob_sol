document.addEventListener('DOMContentLoaded', function () {
    const solutionForm = document.getElementById("solution-form");
    const solutionsList = document.getElementById("solutions-list");

    // Navigation Links
    const homeLink = document.getElementById("home-link");
    const solutionsLink = document.getElementById("solutions-link");

    // Sections
    const homeSection = document.getElementById("home-section");
    const solutionsSection = document.getElementById("solutions-section");

    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");

    // Load existing solutions on page load
    loadSolutions();

    // Handle form submission
    solutionForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const solution = {
            name: document.getElementById("user-name").value.trim(),
            title: document.getElementById("problem-title").value.trim(),
            language: document.getElementById("language").value.trim(),
            code: document.getElementById("code-solution").value.trim(),
            timestamp: new Date().toLocaleString()
        };

        saveSolution(solution);
        renderSolution(solution);
        solutionForm.reset();
        alert('Solution posted successfully!'); // Confirmation alert
    });

    // Save a solution to localStorage
    function saveSolution(solution) {
        let solutions = JSON.parse(localStorage.getItem('codeSolutions')) || [];
        solutions.push(solution);
        localStorage.setItem('codeSolutions', JSON.stringify(solutions));
    }

    // Load all solutions from localStorage
    function loadSolutions() {
        let solutions = JSON.parse(localStorage.getItem('codeSolutions')) || [];
        solutionsList.innerHTML = ""; // Clear existing list
        solutions.forEach(renderSolution);
    }

    // Render a single solution card
    function renderSolution(solution) {
        const solutionCard = document.createElement("div");
        solutionCard.classList.add("solution");

        solutionCard.innerHTML = `
            <h3>${solution.title}</h3>
            <p><strong>Posted by:</strong> ${solution.name}</p>
            <p><strong>Language:</strong> ${solution.language}</p>
            <p><strong>Posted:</strong> ${solution.timestamp}</p>
            <pre>${solution.code}</pre>
        `;

        solutionsList.appendChild(solutionCard);
    }

    // Handle navigation between Home and Solutions sections
    homeLink.addEventListener("click", function () {
        homeSection.classList.remove("hidden");
        solutionsSection.classList.add("hidden");
    });

    solutionsLink.addEventListener("click", function () {
        homeSection.classList.add("hidden");
        solutionsSection.classList.remove("hidden");

        // Reload solutions when navigating to the Solutions section
        loadSolutions();
    });

    // Handle theme toggle (Dark/Light Mode)
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
        }
    });
});
