// markdown.js

/**
 * Converts plain text to a simple markdown format.
 * This function aims to enhance readability by applying markdown syntax,
 * such as headers, lists, and code blocks, based on certain patterns in the text.
 * 
 * @param {string} text The plain text to convert.
 * @return {string} The text converted to markdown format.
 */
function convertTextToMarkdown(text) {
  // Split the text into lines for processing
  const lines = text.split('\n');

  // Process each line to apply markdown formatting
  const markdownLines = lines.map(line => {
    // Convert headers: lines that look like titles (e.g., start with "Title: ")
    if (line.match(/^[A-Za-z]+:/)) {
      return `### ${line}`;
    }

    // Convert unordered lists: lines that start with a dash or asterisk
    if (line.match(/^\s*[-*]\s+/)) {
      return `- ${line.trim().substring(1).trim()}`;
    }

    // Convert numbered lists: lines that start with a number followed by a dot
    if (line.match(/^\s*\d+\.\s+/)) {
      return line.trim();
    }

    // Simple attempt to detect and format code blocks: lines that start with at least 4 spaces or a tab
    if (line.match(/^\s{4,}|\t/)) {
      return `\`\`\`\n${line.trim()}\n\`\`\``;
    }

    // Return the line unchanged if no patterns match
    return line;
  });

  // Join the processed lines back into a single string
  return markdownLines.join('\n');
}

// Export the function to be used in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { convertTextToMarkdown };
}
