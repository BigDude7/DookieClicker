// Get the score element
const scoreDisplay = document.querySelector('.score-box');
const clickBox = document.querySelector('.click-box');

if (scoreDisplay && clickBox) {
    console.log(clickBox);

    // Initialize the score
    let score = 0;

    // Add event listener to increment the score on click
    clickBox.addEventListener('click', () => {
        // Increment the score
        score++;

        // Update the score element's text
        scoreDisplay.textContent = "Score: " + score;
    });
} else {
    console.log("Score element or click box not found.");
}
