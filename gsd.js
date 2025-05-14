// Prompt user to enter a number
let input = prompt("Enter a number:");

// Convert the input to a number
let number = parseInt(input);

// Check if the input is a valid number
if (isNaN(number)) {
  alert("Please enter a valid number.");
} else {
  // Check if the number is even or odd
  if (number % 2 === 0) {
    alert(number + " is an Even number.");
    console.log(number + " is an Even number.");
  } else {
    alert(number + " is an Odd number.");
    console.log(number + " is an Odd number.");
  }
}
