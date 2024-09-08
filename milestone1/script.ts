// Get the elements
const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

// Add click event listener to toggle button
toggleSkillsButton.addEventListener('click', () => {
    // Toggle the visibility of the skills section
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block'; // Show the skills section
        toggleSkillsButton.textContent = 'Hide Skills'; // Update button text
    } else {
        skillsSection.style.display = 'none'; // Hide the skills section
        toggleSkillsButton.textContent = 'Show Skills'; // Update button text
    }
});
