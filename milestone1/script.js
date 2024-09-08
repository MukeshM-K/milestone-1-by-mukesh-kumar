// Get the elements
var toggleSkillsButton = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills-section');
// Add click event listener to toggle button
toggleSkillsButton.addEventListener('click', function () {
    // Toggle the visibility of the skills section
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block'; // Show the skills section
        toggleSkillsButton.textContent = 'Hide Skills'; // Update button text
    }
    else {
        skillsSection.style.display = 'none'; // Hide the skills section
        toggleSkillsButton.textContent = 'Show Skills'; // Update button text
    }
});
