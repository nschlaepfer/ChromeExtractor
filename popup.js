document.addEventListener('DOMContentLoaded', function() {
    const extractTextBtn = document.getElementById('extract-text-btn');

    extractTextBtn.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript(
                {
                    target: {tabId: tabs[0].id},
                    files: ['content.js']
                }
            );
        });
    });

    // Listen for messages from the background script
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        if (message.action === "displayTextInPopup") {
            document.getElementById('extracted-text').textContent = message.text;
        }
    });
});
