document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const clearListButton = document.getElementById('clear-list');
    const sitesList = document.getElementById('sites-list');

    // Function to update the list of sites
    function updateSitesList(searchText) {
        // Clear the current list
        sitesList.innerHTML = '';

        // Define the query parameters for chrome.history.search
        const query = {
            'text': searchText, // Use the search text
            'startTime': (new Date()).setDate((new Date()).getDate() - 30), // Last 30 days
            'maxResults': 100 // Adjust as needed
        };

        // Fetch the visited sites from browser history
        chrome.history.search(query, function(results) {
            results.forEach(function(site) {
                const siteEntry = document.createElement('div');
                siteEntry.className = 'site-entry';
                siteEntry.innerHTML = `
                    <div class="site-info">
                        <h2 class="article-name">${site.title}</h2>
                        <a href="${site.url}" class="site-link" target="_blank">Visit Site</a>
                        <p class="access-info">Last accessed: <span class="access-date">${new Date(site.lastVisitTime).toLocaleDateString()}</span> at <span class="access-time">${new Date(site.lastVisitTime).toLocaleTimeString()}</span></p>
                    </div>
                `;
                sitesList.appendChild(siteEntry);
            });
        });
    }

    // Initial update of the sites list
    updateSitesList('');

    // Search button click event
    searchButton.addEventListener('click', function() {
        updateSitesList(searchInput.value);
    });

    // Clear list button click event
    clearListButton.addEventListener('click', function() {
        sitesList.innerHTML = '';
    });
});
