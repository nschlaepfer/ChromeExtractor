// background.js

// Listen for the extension's icon being clicked
chrome.action.onClicked.addListener((tab) => {
  // Execute the content script on the current tab
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

// Listen for messages from content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Check if the message is to open the modal
  if (request.action === "openModal") {
    // Inject the modal.js, styles.css, and markdown.js into the current tab
    chrome.scripting.insertCSS({
      target: {tabId: sender.tab.id},
      files: ['styles.css']
    });
    chrome.scripting.executeScript({
      target: {tabId: sender.tab.id},
      files: ['markdown.js']
    }, () => { // Callback after markdown.js to ensure order
      chrome.scripting.executeScript({
        target: {tabId: sender.tab.id},
        files: ['modal.js']
      });
    });

    // Send a response back to content.js (or modal.js if needed) to confirm injection
    sendResponse({status: "success"});
  }
  // Ensure to return true to indicate you wish to send a response asynchronously
  return true;
});
