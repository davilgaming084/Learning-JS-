// way 1 =>
// 1 => Select start button and add click event
// 2 => On click, start interval to generate random color every 1 second
// 3 => Hold interval in a variable for global scope to stop it
// 4 => If interval is null, start it; otherwise, do nothing

let interval; // Variable to hold the interval ID

// Start button event listener
document.querySelector('#start').addEventListener('click', () => {
    if (!interval) { // Check if interval is not already running
        interval = setInterval(() => {
            // Generate a random color
            let colorCode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            console.log(colorCode); // Log the color code
            document.body.style.backgroundColor = colorCode; // Change background color
        }, 1000); // Every 1 second
    }
});

// Stop button event listener
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(interval); // Clear the interval
    interval = null; // Reset interval variable
});

// ------------------------------------------------------------------------------------------

// way 2
// 1 => Create a function to generate a random color
// 2 => Select start button and add click event
// 3 => On button click, start interval to change background color every second

// Function to generate random color
// function generateColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// let interval;
// // Start button event listener for way 2
// document.querySelector('#start').addEventListener('click', () => {
//     if (interval === undefined) {
//         interval = setInterval(() => {
//             console.log(generateColor()); // Log the generated color
//             document.body.style.backgroundColor = generateColor(); // Change background color
//         }, 1000); // Every 1 second
//     }

// });

// // Stop button event listener for way 2
// document.querySelector('#stop').addEventListener('click', () => {
//     clearInterval(interval); // Clear the interval
//     interval = undefined
// });
