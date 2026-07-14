const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let html = markdownInput.value;

  //Code Blocks
  html = html.replace(
    /```(\w+)?\n([\s\S]*?)```/gm,
    "<pre><code>$2</code></pre>",
  );

  //Inline Code
  html = html.replace(/`(.+?)`/g, "<code>$1</code>");

  //Images
  html = html.replace(/!\[(.+?)\]\((.+?)\)/g, '<img alt="$1" src="$2">');

  //Links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

  // Heading Text
  for (let i = 3; i >= 1; i--) {
    let hashes = "#".repeat(i);
    html = html.replace(
      new RegExp(`^\\s*${hashes}\\s+(.+)$`, "gm"),
      `<h${i}>$1</h${i}>`,
    );
  }

  //Blockquote
  html = html.replace(/^\s*>\s+(.+)$/gm, "<blockquote>$1</blockquote>");

  //Unordered Lists
  html = html.replace(/(?:^-\s.+$\n)+/gm, (block) => {
    const items = block.replace(/^-\s(.+)$/gm, "<li>$1</li>");
    return `<ul>${items}</ul>`;
  });

  //Ordered List
  html = html.replace(/(?:^\d+\.\s.+$\n?)+/gm, (block) => {
    const items = block.replace(/^\d+\.\s(.+)$/gm, "<li>$1</li>");
    return `<ol>${items}</ol>`;
  });

  //Bold Text
  html = html.replace(/(\*\*|__)(.+?)\1/g, "<strong>$2</strong>");

  //Italic Text
  html = html.replace(/(\*|_)(.+?)\1/g, "<em>$2</em>");

  //Horizontal Rule
  html = html.replace(/^\s*---\s*$/gm, "<hr>");

  //Paragraphs
  const lines = html.split("\n");
  let result = "";

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      result += "\n";
    } else if (/^</.test(trimmed)) {
      result += trimmed;
    } else {
      result += `<p>${trimmed}</p>\n`;
    }
  }
  return result;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  htmlOutput.textContent = html;
  preview.innerHTML = html;
});
