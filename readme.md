# Text Extractor with Markdown Chrome Extension

This document provides instructions for installing the "Text Extractor with Markdown" Chrome extension and outlines potential future features.

## Installation Guide

Follow these steps to install the extension in Google Chrome:

### 1. Download and Extract the Extension
- **Download**: Ensure you have the extension files on your computer. If in a compressed format (e.g., ZIP), extract them to a known directory.

### 2. Open Chrome Extensions Page
- **Navigate**: In Chrome, type `chrome://extensions/` in the address bar and press Enter to open the Extensions page.

### 3. Enable Developer Mode
- **Toggle**: Find the "Developer mode" switch in the top right corner of the Extensions page and toggle it to the ON position.

### 4. Load Unpacked Extension
- **Load**: Click "Load unpacked" in the top left corner, navigate to the directory where you extracted the extension files, and select it. The extension will now be listed among your installed extensions.

### 5. Verify Installation
- **Check**: Ensure the extension is enabled by verifying that its toggle switch is in the ON position. The extension icon should appear in your Chrome toolbar, indicating it's ready for use.

## Potential Future Features

### 1. Settings Page for Customization
- **Customize**: Implement a settings page (`options.html` and `options.js`) for user customization, including keyboard shortcut changes, modal window appearance, and markdown conversion preferences.

### 2. Server Integration with Truth Torch
- **Integrate**: Develop functionality to send extracted text to a server for processing or storage, including API creation for text data handling and enhancements for secure communication.

### 3. Enhanced Markdown Conversion
- **Improve**: Upgrade the `convertTextToMarkdown` function in `markdown.js` to support complex text structures and advanced markdown features like tables, images, and formatting options.

### 4. User Profiles and Syncing
- **Sync**: Introduce user profiles for settings and data synchronization across devices, requiring server-side support for user management and data sync.

## Feedback and Contributions

We welcome feedback and contributions to improve this extension. Please feel free to submit issues or pull requests on our GitHub repository.

Thank you for using the "Text Extractor with Markdown" Chrome extension!
