document.addEventListener('DOMContentLoaded', function() {
    const extractTextBtn = document.getElementById('extract-text-btn');

    extractTextBtn.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {file: 'content.js'}
            );
        });
    });
});
