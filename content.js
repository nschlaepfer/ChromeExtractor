// content.js

// Function to create the button with a fire emoji
function createFireButton() {
  const fireButton = document.createElement('button');
  fireButton.innerHTML = '🔥'; // Fire emoji
  fireButton.style.position = 'fixed';
  fireButton.style.bottom = '20px';
  fireButton.style.right = '20px';
  fireButton.style.zIndex = '1000';
  fireButton.style.fontSize = '24px';
  fireButton.style.border = 'none';
  fireButton.style.background = 'orange';
  fireButton.style.color = 'white';
  fireButton.style.borderRadius = '50%';
  fireButton.style.cursor = 'pointer';
  fireButton.style.padding = '10px 15px';
  fireButton.id = 'extract-text-fire-btn';
  document.body.appendChild(fireButton);

  // Add click event listener to the button
  fireButton.addEventListener('click', extractAndSendText);
}

// Function to extract text and send it to the background script
function extractAndSendText() {
  const text = document.body.innerText; // Extract text from the body of the webpage
  // Send a message to the background script to open the modal and display the extracted text
  chrome.runtime.sendMessage({action: "openModal", text: text}, function(response) {
    console.log('Response from background:', response.status);
  });
}

// Check if the button already exists to avoid duplicates
if (!document.getElementById('extract-text-fire-btn')) {
  createFireButton(); // Call the function to create the button
}

