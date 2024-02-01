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
});
