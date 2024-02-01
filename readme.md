To unpack and install the "Text Extractor with Markdown" Chrome extension into Chrome, follow these steps:

1. Download and Extract the Extension:
- Ensure you have the extension files downloaded to your computer. If they're in a compressed format (e.g., ZIP), extract them to a known directory.

2. Open Chrome Extensions Page:
- Open Google Chrome, and in the address bar, type chrome://extensions/ and press Enter. This opens the Extensions page.

3. Enable Developer Mode:
- In the top right corner of the Extensions page, toggle the "Developer mode" switch to the ON position.

4. Load Unpacked Extension:
- Click the "Load unpacked" button that appears in the top left corner after enabling Developer mode.
- Navigate to the directory where you extracted the extension files and select it. The extension should now appear in your list of installed extensions.

5. Verify Installation:
- Ensure the extension is enabled by locating it in the list of installed extensions and checking that the toggle switch is in the ON position.
- You should now see the extension icon in your Chrome toolbar, indicating it's ready for use.
Possible Future Features

1. Settings Page for Customization:
- Implement a settings page (options.html and options.js) to allow users to customize the extension, such as changing the keyboard shortcut, modifying the appearance of the modal window, or setting preferences for markdown conversion.

2. Server Integration with Truth Torch:
- Develop functionality to send extracted text to a server for further processing or storage. This could involve creating an API on the server side that accepts text data and responds with processed information or confirmation of storage.
- Enhance the extension to handle authentication and secure communication with the server, ensuring user data is protected.

3. Enhanced Markdown Conversion:
- Improve the convertTextToMarkdown function in markdown.js to handle more complex text structures and markdown features, such as tables, images, and advanced formatting options.

4. User Profiles and Syncing:
- Introduce user profiles that allow settings and data to be synced across devices. This would require server-side support for user management and data synchronization.