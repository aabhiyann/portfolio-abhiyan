// Simple syntax highlighter for common languages
// This is a lightweight alternative to Prism.js/Highlight.js

interface Token {
  type: string;
  value: string;
}

const keywords: Record<string, string[]> = {
  python: [
    "def",
    "class",
    "import",
    "from",
    "as",
    "if",
    "elif",
    "else",
    "for",
    "while",
    "try",
    "except",
    "finally",
    "with",
    "return",
    "yield",
    "async",
    "await",
    "True",
    "False",
    "None",
    "and",
    "or",
    "not",
    "in",
    "is",
    "lambda",
  ],
  javascript: [
    "function",
    "const",
    "let",
    "var",
    "if",
    "else",
    "for",
    "while",
    "return",
    "class",
    "extends",
    "import",
    "export",
    "default",
    "async",
    "await",
    "try",
    "catch",
    "finally",
    "throw",
    "new",
    "this",
    "super",
    "typeof",
    "instanceof",
  ],
  typescript: [
    "function",
    "const",
    "let",
    "var",
    "if",
    "else",
    "for",
    "while",
    "return",
    "class",
    "extends",
    "import",
    "export",
    "default",
    "async",
    "await",
    "try",
    "catch",
    "finally",
    "throw",
    "new",
    "this",
    "super",
    "typeof",
    "instanceof",
    "interface",
    "type",
    "enum",
    "namespace",
    "module",
    "declare",
    "public",
    "private",
    "protected",
    "readonly",
    "abstract",
    "implements",
  ],
  java: [
    "public",
    "private",
    "protected",
    "static",
    "final",
    "abstract",
    "class",
    "interface",
    "extends",
    "implements",
    "import",
    "package",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "return",
    "try",
    "catch",
    "finally",
    "throw",
    "throws",
    "new",
    "this",
    "super",
  ],
};

const highlightToken = (token: string, language: string): string => {
  const lang = language.toLowerCase();
  const keywordList = keywords[lang] || [];

  // Check if it's a keyword
  if (keywordList.includes(token)) {
    return `<span class="text-purple-400 font-semibold">${token}</span>`;
  }

  // Check if it's a string (starts with " or ')
  if (
    (token.startsWith('"') && token.endsWith('"')) ||
    (token.startsWith("'") && token.endsWith("'"))
  ) {
    return `<span class="text-green-400">${token}</span>`;
  }

  // Check if it's a number
  if (/^\d+\.?\d*$/.test(token)) {
    return `<span class="text-orange-400">${token}</span>`;
  }

  // Check if it's a function call (word followed by ()
  if (/^[a-zA-Z_][a-zA-Z0-9_]*\s*\(/.test(token)) {
    return `<span class="text-blue-400">${token}</span>`;
  }

  // Check if it's a comment
  if (
    token.startsWith("//") ||
    token.startsWith("#") ||
    token.startsWith("/*")
  ) {
    return `<span class="text-gray-500 italic">${token}</span>`;
  }

  return token;
};

export const highlightCode = (code: string, language: string): string => {
  if (!language || language === "text" || language === "") {
    return code;
  }

  // Simple tokenization - split by whitespace and punctuation
  const lines = code.split("\n");
  const highlightedLines = lines.map((line) => {
    // Handle comments first
    if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
      return `<span class="text-gray-500 italic">${line}</span>`;
    }

    // Tokenize the line
    const tokens = line.split(
      /(\s+|\(|\)|\{|\}|\[|\]|,|;|\.|:|=|!|&|\||\+|-|\*|\/|%)/,
    );

    return tokens
      .map((token) => {
        if (token.trim() === "") return token;
        return highlightToken(token.trim(), language);
      })
      .join("");
  });

  return highlightedLines.join("\n");
};
