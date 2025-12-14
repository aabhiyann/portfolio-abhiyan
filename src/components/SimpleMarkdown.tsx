import React from "react";
import { cn } from "../utils/cn";
import { highlightCode } from "../utils/syntaxHighlight";
import MermaidDiagram from "./MermaidDiagram";

interface SimpleMarkdownProps {
  content: string;
  className?: string;
  onHeadersExtracted?: (
    headers: Array<{ id: string; text: string; level: number }>,
  ) => void;
}

// Helper function outside component to avoid dependency issues
const createHeaderId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

const SimpleMarkdown: React.FC<SimpleMarkdownProps> = ({
  content,
  className,
  onHeadersExtracted,
}) => {
  // Extract headers and notify parent - must be called unconditionally
  React.useEffect(() => {
    if (!onHeadersExtracted || !content) return;

    const lines = content.split("\n");
    const extractedHeaders: Array<{
      id: string;
      text: string;
      level: number;
    }> = [];

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("# ")) {
        const text = trimmed.substring(2);
        extractedHeaders.push({ id: createHeaderId(text), text, level: 1 });
      } else if (trimmed.startsWith("## ")) {
        const text = trimmed.substring(3);
        extractedHeaders.push({ id: createHeaderId(text), text, level: 2 });
      } else if (trimmed.startsWith("### ")) {
        const text = trimmed.substring(4);
        extractedHeaders.push({ id: createHeaderId(text), text, level: 3 });
      } else if (trimmed.startsWith("#### ")) {
        const text = trimmed.substring(5);
        extractedHeaders.push({ id: createHeaderId(text), text, level: 4 });
      }
    });

    if (extractedHeaders.length > 0) {
      onHeadersExtracted(extractedHeaders);
    }
  }, [content, onHeadersExtracted]);

  if (!content) return null;

  // Split content into blocks (headers, paragraphs, code blocks, lists)
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  const headers: Array<{ id: string; text: string; level: number }> = [];

  let currentList: React.ReactElement[] = [];
  let currentListType: "ul" | "ol" | null = null;
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLang = "";
  let inTable = false;
  let tableRows: string[][] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Handle Code Blocks
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        // End of code block
        const code = codeBlockContent.join("\n");

        // Check if it's a Mermaid diagram
        if (codeBlockLang.toLowerCase() === "mermaid") {
          blocks.push(<MermaidDiagram key={`mermaid-${i}`} chart={code} />);
        } else {
          // Regular code block with syntax highlighting
          const highlighted = highlightCode(code, codeBlockLang);

          blocks.push(
            <div
              key={`code-${i}`}
              className="my-6 rounded-lg overflow-hidden bg-[#1e1e1e] border border-white/10"
            >
              {codeBlockLang && (
                <div className="px-4 py-2 bg-white/5 border-b border-white/5 text-xs font-mono text-text-muted flex items-center justify-between">
                  <span>{codeBlockLang}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(code);
                    }}
                    className="text-xs text-text-muted hover:text-accent-primary transition-colors"
                    title="Copy code"
                  >
                    Copy
                  </button>
                </div>
              )}
              <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                <code dangerouslySetInnerHTML={{ __html: highlighted }} />
              </pre>
            </div>,
          );
        }

        inCodeBlock = false;
        codeBlockContent = [];
        codeBlockLang = "";
      } else {
        // Start of code block
        inCodeBlock = true;
        codeBlockLang = line.trim().replace("```", "").trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // Handle Tables
    if (line.trim().startsWith("|")) {
      inTable = true;
      const cells = line
        .split("|")
        .filter((c) => c)
        .map((c) => c.trim());
      // Skip separator line
      if (cells[0]?.startsWith("---")) {
        continue;
      }
      tableRows.push(cells);
      continue;
    } else if (inTable && !line.trim().startsWith("|")) {
      // End of table
      if (tableRows.length > 0) {
        const [header, ...rows] = tableRows;
        blocks.push(
          <div
            key={`table-${i}`}
            className="my-6 overflow-x-auto rounded-lg border border-border-primary/50"
          >
            <table className="w-full text-left text-sm">
              <thead className="bg-bg-surface/50">
                <tr>
                  {header.map((h, idx) => (
                    <th
                      key={idx}
                      className="p-3 font-semibold text-text-primary border-b border-border-primary/50"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="border-b border-border-primary/50 last:border-0 hover:bg-white/5"
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3 text-text-secondary">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
      }
      inTable = false;
      tableRows = [];
      if (!line.trim()) continue;
    }

    // Handle Lists (unordered and ordered)
    const unorderedMatch = trimmed.match(/^[-*]\s+(.+)$/);
    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);

    if (unorderedMatch || orderedMatch) {
      const text = unorderedMatch ? unorderedMatch[1] : orderedMatch![1];
      const listType = unorderedMatch ? "ul" : "ol";

      // If list type changed, flush previous list
      if (currentListType && currentListType !== listType) {
        if (currentList.length > 0) {
          const ListTag = currentListType === "ul" ? "ul" : "ol";
          blocks.push(
            <ListTag
              key={`list-${i}-flush`}
              className="my-4 space-y-1 list-disc list-inside"
            >
              {currentList}
            </ListTag>,
          );
          currentList = [];
        }
      }

      currentListType = listType;
      currentList.push(
        <li
          key={`li-${i}`}
          className="ml-4 pl-2 border-l-2 border-accent-primary/30 text-text-secondary mb-2"
        >
          <span dangerouslySetInnerHTML={{ __html: parseInline(text) }} />
        </li>,
      );
      continue;
    }

    // Flush list if we hit a non-list item
    if (currentList.length > 0 && !unorderedMatch && !orderedMatch) {
      const ListTag = currentListType === "ul" ? "ul" : "ol";
      blocks.push(
        <ListTag
          key={`list-${i}`}
          className={`my-4 space-y-1 ${currentListType === "ul" ? "list-disc list-inside" : "list-decimal list-inside"}`}
        >
          {currentList}
        </ListTag>,
      );
      currentList = [];
      currentListType = null;
    }

    // Handle Images: ![alt text](path/to/image.jpg)
    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      const [, alt, src] = imageMatch;
      blocks.push(
        <div key={`img-${i}`} className="my-8">
          <div className="rounded-2xl overflow-hidden border border-border-primary/50 shadow-xl">
            <img
              src={src}
              alt={alt || "Image"}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          {alt && (
            <p className="mt-3 text-sm text-text-muted italic text-center">
              {alt}
            </p>
          )}
        </div>,
      );
      continue;
    }

    // Empty lines
    if (!trimmed) {
      continue;
    }

    // Headers with IDs for TOC
    if (trimmed.startsWith("# ")) {
      const text = trimmed.substring(2);
      const id = createHeaderId(text);
      headers.push({ id, text, level: 1 });
      blocks.push(
        <h1
          id={id}
          key={`h1-${i}`}
          className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-text-primary font-heading scroll-mt-24"
        >
          {text}
        </h1>,
      );
    } else if (trimmed.startsWith("## ")) {
      const text = trimmed.substring(3);
      const id = createHeaderId(text);
      headers.push({ id, text, level: 2 });
      blocks.push(
        <h2
          id={id}
          key={`h2-${i}`}
          className="text-2xl md:text-3xl font-bold mt-10 mb-5 text-text-primary font-heading border-b border-white/10 pb-2 scroll-mt-24"
        >
          {text}
        </h2>,
      );
    } else if (trimmed.startsWith("### ")) {
      const text = trimmed.substring(4);
      const id = createHeaderId(text);
      headers.push({ id, text, level: 3 });
      blocks.push(
        <h3
          id={id}
          key={`h3-${i}`}
          className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-text-primary font-heading scroll-mt-24"
        >
          {text}
        </h3>,
      );
    } else if (trimmed.startsWith("#### ")) {
      const text = trimmed.substring(5);
      const id = createHeaderId(text);
      headers.push({ id, text, level: 4 });
      blocks.push(
        <h4
          id={id}
          key={`h4-${i}`}
          className="text-lg md:text-xl font-semibold mt-6 mb-3 text-text-primary scroll-mt-24"
        >
          {text}
        </h4>,
      );
    } else if (trimmed.startsWith("> ")) {
      // Blockquotes
      blocks.push(
        <blockquote
          key={`quote-${i}`}
          className="border-l-4 border-accent-primary pl-4 py-2 my-6 bg-accent-primary/5 rounded-r-lg italic text-text-muted"
        >
          {trimmed.substring(2)}
        </blockquote>,
      );
    } else if (trimmed.startsWith("---")) {
      // Horizontal Rule
      blocks.push(<hr key={`hr-${i}`} className="my-8 border-white/10" />);
    } else {
      // Paragraphs
      blocks.push(
        <p
          key={`p-${i}`}
          className="mb-4 text-lg text-text-secondary leading-relaxed"
          dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }}
        />,
      );
    }
  }

  // Flush remaining list
  if (currentList.length > 0 && currentListType) {
    const ListTag = currentListType === "ul" ? "ul" : "ol";
    blocks.push(
      <ListTag
        key="list-end"
        className={`my-4 space-y-1 ${currentListType === "ul" ? "list-disc list-inside" : "list-decimal list-inside"}`}
      >
        {currentList}
      </ListTag>,
    );
  }

  return (
    <div className={cn("prose prose-invert max-w-none", className)}>
      {blocks}
    </div>
  );
};

// Helper for inline styles (bold, link, code)
const parseInline = (text: string): string => {
  // Links: [text](url)
  let parsed = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent-primary hover:underline font-medium transition-colors">$1</a>',
  );

  // Bold: **text**
  parsed = parsed.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="text-text-primary font-semibold">$1</strong>',
  );

  // Italic: *text*
  parsed = parsed.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');

  // Inline Code: `text`
  parsed = parsed.replace(
    /`([^`]+)`/g,
    '<code class="px-1.5 py-0.5 rounded bg-white/10 font-mono text-sm text-accent-secondary">$1</code>',
  );

  return parsed;
};

export default SimpleMarkdown;
