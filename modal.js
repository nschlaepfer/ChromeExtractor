// modal.js

// Function to create and display the modal with the extracted text in markdown format
function showModalWithMarkdown(text) {
  // Create the modal container
  const modalContainer = document.createElement('div');
  modalContainer.style.position = 'fixed';
  modalContainer.style.left = '0';
  modalContainer.style.top = '0';
  modalContainer.style.width = '100%';
  modalContainer.style.height = '100%';
  modalContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
  modalContainer.style.zIndex = '2000';
  modalContainer.style.display = 'flex';
  modalContainer.style.justifyContent = 'center';
  modalContainer.style.alignItems = 'center';
  modalContainer.id = 'markdown-modal-container';

  // Create the modal content box
  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#fff';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '10px';
  modalContent.style.maxWidth = '80%';
  modalContent.style.maxHeight = '80%';
  modalContent.style.overflowY = 'auto';
  modalContent.className = 'modal-content'; // Ensure the modal content has the 'modal-content' class applied

  // Convert the extracted text to markdown format
  const markdownText = convertTextToMarkdown(text);

  // Set the markdown formatted text as the content of the modal
  modalContent.innerHTML = markdownText;

  // Append the modal content to the modal container
  modalContainer.appendChild(modalContent);

  // Append the modal container to the body
  document.body.appendChild(modalContainer);

  // Add click event listener to the modal container to close the modal when clicked
  modalContainer.addEventListener('click', function() {
    document.body.removeChild(modalContainer);
  });
}

// Function to convert text to markdown format
// This is a placeholder function. You should replace it with actual markdown conversion logic.
function convertTextToMarkdown(text) {
  // For demonstration purposes, this function simply wraps the text in markdown code block syntax
  return '```' + text + '```';
}

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "openModal") {
    console.log(request.text); // Logging the extracted text to the console
    showModalWithMarkdown(request.text);
    sendResponse({status: 'Modal opened'});
  }
});
// Function to show a preview of the text with a "Read more" button
function createReadMore(text) {
  const maxLength = 300; // Maximum number of characters to show before "Read more"
  if (text.length <= maxLength) return text;

  const previewText = text.substring(0, maxLength) + '...';
  const readMoreBtn = document.createElement('button');
  readMoreBtn.textContent = 'Read more';
  readMoreBtn.addEventListener('click', () => {
    modalContent.textContent = text; // Replace with the full text
  });

  return previewText + readMoreBtn.outerHTML;
}

// Modify showModalWithMarkdown to use createReadMore
function showModalWithMarkdown(text) {
  // Create the modal container
  const modalContainer = document.createElement('div');
  modalContainer.style.position = 'fixed';
  modalContainer.style.left = '0';
  modalContainer.style.top = '0';
  modalContainer.style.width = '100%';
  modalContainer.style.height = '100%';
  modalContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
  modalContainer.style.zIndex = '2000';
  modalContainer.style.display = 'flex';
  modalContainer.style.justifyContent = 'center';
  modalContainer.style.alignItems = 'center';
  modalContainer.id = 'markdown-modal-container';

  // Create the modal content box
  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#fff';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '10px';
  modalContent.style.maxWidth = '80%';
  modalContent.style.maxHeight = '80%';
  modalContent.style.overflowY = 'auto';
  modalContent.className = 'modal-content'; // Ensure the modal content has the 'modal-content' class applied

  // Convert the extracted text to markdown format
  const markdownText = convertTextToMarkdown(text);
  const previewContent = createReadMore(markdownText);
  modalContent.innerHTML = previewContent;

  // Append the modal content to the modal container
  modalContainer.appendChild(modalContent);

  // Append the modal container to the body
  document.body.appendChild(modalContainer);

  // Add click event listener to the modal container to close the modal when clicked
  modalContainer.addEventListener('click', function() {
    document.body.removeChild(modalContainer);
  });
}