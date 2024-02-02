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
  fireButton.style.background = 'blue';
  fireButton.style.color = 'white';
  fireButton.style.borderRadius = '50%';
  fireButton.style.cursor = 'pointer';
  fireButton.style.padding = '10px 15px';
  fireButton.id = 'extract-text-fire-btn';
  fireButton.classList.add('button-hover-effect');
  document.body.appendChild(fireButton);

  // Add click event listener to the button
  fireButton.addEventListener('click', extractAndSendText);
}

// Function to extract text and send it to the background script
function extractAndSendText() {
    const text = document.body.innerText;
    console.log(text);
    chrome.runtime.sendMessage({action: "openModal", text: text}, function(response) {
      if (chrome.runtime.lastError) {
          console.error("Error sending message:", chrome.runtime.lastError);
          // Optionally, implement a retry mechanism or notify the user here
      } else {
          console.log('Response from background:', response.status);
      }
    });
}

// Check if the button already exists to avoid duplicates
if (!document.getElementById('extract-text-fire-btn')) {
  createFireButton(); // Call the function to create the button
}
// Establish a persistent connection with the background script
const port = chrome.runtime.connect({name: "safeConnection"});

// Example message sending
port.postMessage({joke: "Knock knock"});

// Handle messages received from the background script
port.onMessage.addListener(function(msg) {
  if (msg.question === "Who's there?") {
    port.postMessage({answer: "Interrupting cow"});
  } else if (msg.question === "Interrupting cow who?") {
    console.log("MOO!");
  }
});

// Handle disconnection
port.onDisconnect.addListener(function() {
  console.log("Connection to background lost.");
  // Here you can handle reconnection or notify the user as necessary
});

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.button-hover-effect');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.classList.add('animate-border');
            
            setTimeout(() => {
                this.classList.remove('animate-border');
            }, 2000); // Match the duration of your CSS animation
        });
    });
});
