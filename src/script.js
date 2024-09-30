// Get DOM elements
const billAmountInput = document.getElementById('billAmount');
const peopleCountInput = document.getElementById('peopleCount');
const customTipInput = document.getElementById('customTip');
const tipButtons = document.querySelectorAll('.tip-btn');
const calculateBtn = document.getElementById('calculateBtn');
const tipAmountDisplay = document.getElementById('tipAmount');
const totalPerPersonDisplay = document.getElementById('totalPerPerson');

let selectedTip = 0;

// Listen for clicks on tip buttons
tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Set the selected tip percentage from the button
    selectedTip = parseInt(button.getAttribute('data-tip'));

    // Remove active class from all buttons
    tipButtons.forEach(btn => btn.classList.remove('bg-blue-700', 'text-white'));

    // Add active class to the clicked button
    button.classList.add('bg-blue-700', 'text-white');

    // Clear the custom tip input value
    customTipInput.value = '';
  });
});

// Listen for custom tip input
customTipInput.addEventListener('input', () => {
  // Set the selectedTip to 0 so that custom tip is used
  selectedTip = 0;

  // Remove active class from all buttons
  tipButtons.forEach(btn => btn.classList.remove('bg-blue-700', 'text-white'));
});

// Calculate and display the tip and total per person
calculateBtn.addEventListener('click', () => {
  const billAmount = parseFloat(billAmountInput.value);
  const peopleCount = parseInt(peopleCountInput.value);
  const customTip = parseFloat(customTipInput.value);

  // Use the selected button tip if customTip is not filled
  const tipPercentage = selectedTip || customTip;

  if (isNaN(billAmount) || isNaN(peopleCount) || isNaN(tipPercentage) || peopleCount <= 0) {
    alert('Please enter valid numbers');
    return;
  }

  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalPerPerson = (billAmount + tipAmount) / peopleCount;

  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalPerPersonDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
});
