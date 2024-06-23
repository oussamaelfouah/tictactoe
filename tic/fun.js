// Get elements from the HTML (assuming class "i" represents the cells)
const ticBoxesDomElements = document.getElementsByClassName("i");
const ticBoxesCells = Array.from(ticBoxesDomElements);
const winnerMessage = document.getElementById("winner-message")
const ticBoxesResults = new Array(9).fill(null);
let currentSymbol = "x";

// Predefined winning conditions
const winConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
];

// Function to check if there's a winner

const checkWinner = (currentSymbol) => {
    let result = false
    winConditions.forEach((condition) => {
        if (ticBoxesResults[condition[0]] === currentSymbol && ticBoxesResults[condition[1]] === currentSymbol && ticBoxesResults[condition[2]] === currentSymbol) {
            result = true
        }
    })
    return result
};

// Add event listeners to each cell
ticBoxesCells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (cell.textContent) {
            return; // Cell already filled, ignore the click
        } else {
            // Update cell DOM with the current symbol
            cell.textContent = currentSymbol;

            // Save player's movement in results array
            ticBoxesResults[index] = currentSymbol;

            // Check if the current player has won
            if (checkWinner(currentSymbol)) {
                // Update DOM with winner message (e.g., "Player X wins!")
                // You can also disable further clicks on cells here
                winnerMessage.textContent = ("the winner is  " + `${currentSymbol}`)
                console.log(winnerMessage)
                // Add more logic (e.g., reset the game) if needed
                return;
            }

            // Switch to the other player's symbol
            currentSymbol = currentSymbol === "x" ? "o" : "x";

            console.log("ticBoxesResults =>", ticBoxesResults);
        }
    });
});
